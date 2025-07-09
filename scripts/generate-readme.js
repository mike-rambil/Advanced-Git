const fs = require('fs');
const path = require('path');

// --- CONFIG ---
const INTRO = `<table style="width:100%; border: 0; margin: 0 auto;">
  <tr style="width:100%;">
    <td style="width: 25%; text-align: center;">
      <img src="https://raw.githubusercontent.com/mike-rambil/Advanced-Git/refs/heads/main/brand/advanced-git-mike-rambil.png" height="200" width="375" alt="banner" />
    </td>
    <td style="width: 75%; text-align: right;">
      <h1>Advanced Git Commands</h1>
      <em style="display: block; text-align: center; width:100%;">For Dummies & Try hards</em>
    </td>
  </tr>
</table>

> [!IMPORTANT]
> If you find a useful GIT command - be sure to sent a PR here as well :)
`;

const TOC_HEADER = '# Table of Contents';

const CONCLUSION = `
## Contributors & Credits

> [!NOTE]
> Add yourself, your links you have used, or even your blogs if you have some or is an **author**

#### [👨‍👩‍👧‍👦 Contributors](./Contributors&Credits.md)

A list of individuals who have contributed to this project.

> 👨‍👩‍👧‍👦 [View Contributors](./Contributors&Credits.md#contributors)

#### [🧑‍💻 Credits & Authors](./Contributors&Credits.md#credits-authors)

Acknowledgment of the original authors.

> 🧑‍💻 [View Credits & Authors](./Contributors&Credits.md#credits-authors)

#### [📖 References & Resources](./Contributors&Credits.md#references-resources)

A collection of blogs, articles, and materials used to learn more about Git.

> 📖 [View References & Resources](./Contributors&Credits.md#references-resources)
`;

const TOC_JSON = path.join(__dirname, '..', 'toc-source.json');
const CONTENTS_DIR = path.join(__dirname, '..', 'contents');
const README = path.join(__dirname, '..', 'README.md');

// Ensure the contents directory exists
fs.mkdirSync(CONTENTS_DIR, { recursive: true });

function tocEntry(obj, idx) {
  let entry = `- [${obj.Name}](./contents/${slugify(obj.Name)}.md)`;
  if (obj.short_description) entry += `: ${obj.short_description}`;
  if (obj.subtoc && obj.subtoc.length) {
    entry += '\n';
    obj.subtoc.forEach((sub) => {
      entry += `  - [${sub.Name}](./contents/${slugify(sub.Name)}.md)`;
      if (sub.short_description) entry += `: ${sub.short_description}`;
      entry += '\n';
    });
  } else {
    entry += '\n';
  }
  return entry;
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function renderSection(title, content) {
  return content ? `\n#### ${title}\n${content}\n` : '';
}

function renderFlags(flags) {
  if (!flags || Object.keys(flags).length === 0) return '';
  let out = '';
  Object.entries(flags).forEach(([flag, desc]) => {
    out += `- \`${flag}\`: ${desc}\n`;
  });
  return renderSection('Flags', out);
}

function renderSteps(steps) {
  if (!steps || !steps.length) return '';
  let out = '';
  steps.forEach((step, i) => {
    out += `${i + 1}. ${step}\n`;
  });
  return renderSection('Steps', out);
}

function renderExamples(examples) {
  if (!examples || !examples.length) return '';
  let out = '';
  examples.forEach((ex) => {
    out += `- **${ex.description || ''}**\n\n  \`\`\`sh\n${ex.code}\n\`\`\`\n`;
  });
  return renderSection('Examples', out);
}

function renderLinks(links) {
  if (!links || !links.length) return '';
  let out = '';
  links.forEach((link) => {
    out += `- [${link.label}](${link.url})\n`;
  });
  return renderSection('Links', out);
}

function renderPrerequisites(prereq) {
  if (!prereq || !prereq.length) return '';
  let out = '';
  prereq.forEach((p) => {
    out += `- ${p}\n`;
  });
  return renderSection('Prerequisites', out);
}

function renderWarnings(warnings) {
  if (!warnings || !warnings.length) return '';
  let out = '';
  warnings.forEach((w) => {
    out += `- ⚠️ ${w}\n`;
  });
  return renderSection('Warnings', out);
}

function renderTags(tags) {
  if (!tags || !tags.length) return '';
  return renderSection('Tags', tags.map((t) => ` [1m${t} [0m`).join(', '));
}

function renderRelatedCommands(related) {
  if (!related || !related.length) return '';
  let out = '';
  related.forEach((cmd) => {
    out += `- ${cmd}\n`;
  });
  return renderSection('Related Commands', out);
}

function renderOutputExample(output) {
  if (!output) return '';
  return renderSection('Output Example', `\`\`\`${output}\`\`\``);
}

function renderAuthor(author) {
  if (!author) return '';
  return renderSection('Author', author);
}

function renderLastUpdated(date) {
  if (!date) return '';
  return renderSection('Last Updated', date);
}

function renderCategory(category) {
  if (!category) return '';
  return renderSection('Category', category);
}

function renderCommandExamples(examples) {
  if (!examples || !examples.length) return '';
  let out = '';
  examples.forEach((cmd) => {
    out += `- \`${cmd}\`\n`;
  });
  return renderSection('Similar Examples', out);
}

function renderSubtoc(subtoc) {
  if (!subtoc || !subtoc.length) return '';
  let out = '\n---\n\n### Subcommands\n';
  subtoc.forEach((sub) => {
    out += `#### ${sub.Name}\n`;
    if (sub.short_description) out += `${sub.short_description}\n`;
    if (sub.command) out += `- \`${sub.command}\`\n`;
    if (sub.flags) out += renderFlags(sub.flags);
    if (sub.examples) out += renderExamples(sub.examples);
    if (sub.steps) out += renderSteps(sub.steps);
    if (sub.prerequisites) out += renderPrerequisites(sub.prerequisites);
    if (sub.warnings) out += renderWarnings(sub.warnings);
    if (sub.links) out += renderLinks(sub.links);
    if (sub.tags) out += renderTags(sub.tags);
    if (sub.related_commands)
      out += renderRelatedCommands(sub.related_commands);
    if (sub.output_example) out += renderOutputExample(sub.output_example);
    if (sub.author) out += renderAuthor(sub.author);
    if (sub.last_updated) out += renderLastUpdated(sub.last_updated);
    out += '\n';
  });
  return out;
}

function generateContentFile(obj) {
  let md = `# ${obj.Name}\n\n`;
  if (obj.category) md += renderCategory(obj.category);
  if (obj.short_description) md += `> ${obj.short_description}\n\n`;
  if (obj.long_description) md += `${obj.long_description}\n\n`;
  if (obj.command) md += `**Command:** \`${obj.command}\`\n`;
  if (obj.flags) md += renderFlags(obj.flags);
  if (obj.examples) md += renderExamples(obj.examples);
  if (obj['command similiar examples'])
    md += renderCommandExamples(obj['command similiar examples']);
  if (obj.steps) md += renderSteps(obj.steps);
  if (obj.prerequisites) md += renderPrerequisites(obj.prerequisites);
  if (obj.warnings) md += renderWarnings(obj.warnings);
  if (obj.links) md += renderLinks(obj.links);
  if (obj.tags) md += renderTags(obj.tags);
  if (obj.related_commands) md += renderRelatedCommands(obj.related_commands);
  if (obj.output_example) md += renderOutputExample(obj.output_example);
  if (obj.author) md += renderAuthor(obj.author);
  if (obj.last_updated) md += renderLastUpdated(obj.last_updated);
  if (obj.subtoc) md += renderSubtoc(obj.subtoc);
  return md;
}

function writeIfChanged(filePath, content) {
  if (fs.existsSync(filePath)) {
    const existing = fs.readFileSync(filePath, 'utf8');
    if (existing === content) return; // No change
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

function main() {
  const tocData = JSON.parse(fs.readFileSync(TOC_JSON, 'utf8'));

  // Generate TOC
  let toc = '';
  tocData.forEach((obj, idx) => {
    toc += tocEntry(obj, idx);
  });

  // Write README.md (always overwrite)
  const readmeContent = `${INTRO}\n${TOC_HEADER}\n\n${toc}\n${CONCLUSION}`;
  fs.writeFileSync(README, readmeContent, 'utf8');

  // Write/Update content files only if changed
  tocData.forEach((obj) => {
    const filePath = path.join(CONTENTS_DIR, `${slugify(obj.Name)}.md`);
    const content = generateContentFile(obj);
    writeIfChanged(filePath, content);
    // Also create subtoc files if needed
    if (obj.subtoc && obj.subtoc.length) {
      obj.subtoc.forEach((sub) => {
        const subPath = path.join(CONTENTS_DIR, `${slugify(sub.Name)}.md`);
        let subMd = `# ${sub.Name}\n\n`;
        if (sub.category) subMd += renderCategory(sub.category);
        if (sub.short_description) subMd += `> ${sub.short_description}\n\n`;
        if (sub.command) subMd += `**Command:** \`${sub.command}\`\n`;
        if (sub.flags) subMd += renderFlags(sub.flags);
        if (sub.examples) subMd += renderExamples(sub.examples);
        if (sub.steps) subMd += renderSteps(sub.steps);
        if (sub.prerequisites) subMd += renderPrerequisites(sub.prerequisites);
        if (sub.warnings) subMd += renderWarnings(sub.warnings);
        if (sub.links) subMd += renderLinks(sub.links);
        if (sub.tags) subMd += renderTags(sub.tags);
        if (sub.related_commands)
          subMd += renderRelatedCommands(sub.related_commands);
        if (sub.output_example)
          subMd += renderOutputExample(sub.output_example);
        if (sub.author) subMd += renderAuthor(sub.author);
        if (sub.last_updated) subMd += renderLastUpdated(sub.last_updated);
        writeIfChanged(subPath, subMd);
      });
    }
  });
}

main();
