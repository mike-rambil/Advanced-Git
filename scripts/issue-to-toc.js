#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ISSUE_BODY = process.env.ISSUE_BODY;
const ISSUE_NUMBER = process.env.ISSUE_NUMBER || "unknown";
const WORKSPACE = process.env.GITHUB_WORKSPACE || process.cwd();

if (!ISSUE_BODY) {
  console.error("ISSUE_BODY environment variable is required.");
  process.exit(1);
}

const FIELD_CONFIG = [
  { heading: "Name", key: "Name", required: true, parser: asString },
  { heading: "Category", key: "category", required: true, parser: asString },
  {
    heading: "Short Description",
    key: "short_description",
    required: true,
    parser: asString,
  },
  {
    heading: "Long Description",
    key: "long_description",
    required: false,
    parser: asOptionalString,
  },
  {
    heading: "Command",
    key: "command",
    required: false,
    parser: asOptionalString,
  },
  {
    heading: "Examples",
    key: "examples",
    required: true,
    parser: asExamples,
  },
  {
    heading: "Steps",
    key: "steps",
    required: true,
    parser: asStringArray,
  },
  { heading: "Flags", key: "flags", required: false, parser: asFlags },
  {
    heading: "Prerequisites",
    key: "prerequisites",
    required: false,
    parser: asOptionalStringArray,
  },
  {
    heading: "Warnings",
    key: "warnings",
    required: false,
    parser: asOptionalStringArray,
  },
  {
    heading: "ProTips",
    key: "protips",
    required: false,
    parser: asOptionalStringArray,
  },
  {
    heading: "Tags",
    key: "tags",
    required: true,
    parser: asStringArray,
  },
  { heading: "Author", key: "author", required: true, parser: asString },
  {
    heading: "Last Updated",
    key: "last_updated",
    required: true,
    parser: asDateString,
  },
  { heading: "Links", key: "links", required: false, parser: asLinks },
  {
    heading: "Related Commands",
    key: "related_commands",
    required: false,
    parser: asOptionalStringArray,
  },
  {
    heading: "Parent",
    key: "parent",
    required: false,
    parser: asOptionalString,
  },
];

const sections = parseSections(ISSUE_BODY);
const entry = {};

for (const field of FIELD_CONFIG) {
  const rawValue = sections[field.heading] ?? "";
  if (!rawValue && field.required) {
    fail(`Field "${field.heading}" is required but was not provided.`);
  }
  const parsedValue = field.parser(rawValue, field.heading);
  if (parsedValue !== undefined) {
    entry[field.key] = parsedValue;
  }
}

const tocPath = path.join(WORKSPACE, "toc-source.json");
const toc = readJson(tocPath);

// Capture and remove parent if provided so entry does not include parent as a data field
const parentName = entry.parent;
if (parentName !== undefined) {
  delete entry.parent;
}

// Ensure the new name is unique globally (top-level and subtoc)
ensureUniqueName(entry.Name, toc);

// Insert either as top-level or as a subtoc item under the named parent
if (parentName) {
  const parentEntry = toc.find((e) => e && e.Name === parentName);
  if (!parentEntry) {
    fail(
      `Parent entry with Name "${parentName}" was not found in toc-source.json.`,
    );
  }
  if (!Array.isArray(parentEntry.subtoc)) {
    parentEntry.subtoc = [];
  }
  parentEntry.subtoc.push(entry);
  writeJson(tocPath, toc);
  console.log(
    `Entry for "${entry.Name}" added to subtoc of "${parentName}" in toc-source.json from issue #${ISSUE_NUMBER}.`,
  );
} else {
  toc.push(entry);
  writeJson(tocPath, toc);
  console.log(
    `Entry for "${entry.Name}" added to toc-source.json from issue #${ISSUE_NUMBER}.`,
  );
}

function parseSections(body) {
  const normalized = body.replace(/\r\n/g, "\n").trim();
  const regex = /### ([^\n]+)\n([\s\S]*?)(?=(?:\n### [^\n]+)|$)/g;
  const result = {};
  let match;
  while ((match = regex.exec(normalized)) !== null) {
    const heading = match[1].trim();
    const value = match[2] ?? "";
    result[heading] = value;
  }
  return result;
}

function cleanupValue(value) {
  if (!value) return "";
  let cleaned = value.trim();
  const isNoResponse = (text) =>
    text.replace(/\s+/g, " ").toLowerCase() === "_no response_";
  if (isNoResponse(cleaned)) {
    return "";
  }
  if (cleaned.startsWith("```")) {
    const lines = cleaned.split(/\r?\n/);
    if (lines[0].startsWith("```")) {
      lines.shift();
      const last = lines[lines.length - 1];
      if (last && last.startsWith("```")) {
        lines.pop();
      }
      cleaned = lines.join("\n").trim();
      if (isNoResponse(cleaned)) {
        return "";
      }
    }
  }
  return cleaned;
}

function asString(raw, field) {
  const value = cleanupValue(raw);
  if (!value) {
    fail(`Field "${field}" must be a non-empty string.`);
  }
  return value;
}

function asOptionalString(raw) {
  const value = cleanupValue(raw);
  return value ? value : undefined;
}

function asDateString(raw, field) {
  const value = asString(raw, field);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    fail(`Field "${field}" must follow the YYYY-MM-DD format.`);
  }
  return value;
}

function parseJson(raw, field) {
  const value = cleanupValue(raw);
  if (!value) {
    return undefined;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    fail(`Field "${field}" must contain valid JSON. ${error.message}`);
  }
}

function asStringArray(raw, field) {
  const parsed = parseJson(raw, field);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    fail(`Field "${field}" must be a non-empty JSON array of strings.`);
  }
  parsed.forEach((item, index) => {
    if (typeof item !== "string" || !item.trim()) {
      fail(
        `Field "${field}" must contain only non-empty strings (problem at index ${index}).`,
      );
    }
  });
  return parsed;
}

function asOptionalStringArray(raw, field) {
  const value = cleanupValue(raw);
  if (!value) {
    return undefined;
  }
  const parsed = parseJson(value, field);
  if (!Array.isArray(parsed)) {
    fail(`Field "${field}" must be a JSON array of strings.`);
  }
  parsed.forEach((item, index) => {
    if (typeof item !== "string" || !item.trim()) {
      fail(
        `Field "${field}" must contain only non-empty strings (problem at index ${index}).`,
      );
    }
  });
  return parsed;
}

function asExamples(raw, field) {
  const parsed = parseJson(raw, field);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    fail(
      `Field "${field}" must be a non-empty JSON array of objects with "code" and "description" strings.`,
    );
  }
  parsed.forEach((item, index) => {
    if (!item || typeof item !== "object") {
      fail(
        `Field "${field}" must contain objects (problem at index ${index}).`,
      );
    }
    if (typeof item.code !== "string" || !item.code.trim()) {
      fail(
        `Field "${field}" example ${index} is missing a non-empty "code" string.`,
      );
    }
    if (typeof item.description !== "string" || !item.description.trim()) {
      fail(
        `Field "${field}" example ${index} is missing a non-empty "description" string.`,
      );
    }
  });
  return parsed;
}

function asFlags(raw, field) {
  const value = cleanupValue(raw);
  if (!value) {
    return undefined;
  }
  const parsed = parseJson(value, field);
  if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") {
    fail(`Field "${field}" must be a JSON object of flag descriptions.`);
  }
  Object.entries(parsed).forEach(([flag, description]) => {
    if (typeof flag !== "string" || !flag.trim()) {
      fail(`Field "${field}" contains a flag with an invalid name.`);
    }
    if (typeof description !== "string" || !description.trim()) {
      fail(
        `Field "${field}" flag "${flag}" must have a non-empty description string.`,
      );
    }
  });
  return parsed;
}

function asLinks(raw, field) {
  const value = cleanupValue(raw);
  if (!value) {
    return undefined;
  }
  const parsed = parseJson(value, field);
  if (!Array.isArray(parsed)) {
    fail(`Field "${field}" must be a JSON array of link objects.`);
  }
  parsed.forEach((item, index) => {
    if (!item || typeof item !== "object") {
      fail(
        `Field "${field}" must contain objects (problem at index ${index}).`,
      );
    }
    if (typeof item.label !== "string" || !item.label.trim()) {
      fail(
        `Field "${field}" link ${index} is missing a non-empty "label" string.`,
      );
    }
    if (typeof item.url !== "string" || !item.url.trim()) {
      fail(
        `Field "${field}" link ${index} is missing a non-empty "url" string.`,
      );
    }
  });
  return parsed;
}

function ensureUniqueName(name, toc) {
  const exists = toc.some((entry) => {
    if (entry && typeof entry === "object") {
      if (entry.Name === name) return true;
      if (Array.isArray(entry.subtoc)) {
        return entry.subtoc.some((sub) => sub && sub.Name === name);
      }
    }
    return false;
  });
  if (exists) {
    fail(`An entry with the Name "${name}" already exists in toc-source.json.`);
  }
}

function readJson(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    fail(`Unable to read or parse JSON file at ${filePath}. ${error.message}`);
  }
}

function writeJson(filePath, data) {
  const serialized = JSON.stringify(data, null, 2) + "\n";
  fs.writeFileSync(filePath, serialized, "utf8");
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
