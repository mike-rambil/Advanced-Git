const fs = require('fs');
const path = require('path');

// --- CONFIG ---
const GITHUB_REPO_URL = 'https://github.com/mike-rambil/Advanced-Git';
const GITHUB_BRANCH = 'main';
const GITHUB_CONTENTS_URL = `${GITHUB_REPO_URL}/blob/${GITHUB_BRANCH}/contents`;
const GITHUB_README_URL = `${GITHUB_REPO_URL}/blob/${GITHUB_BRANCH}/README.md`;
const GITHUB_PR_URL = `${GITHUB_REPO_URL}/pulls`;
const INTRO = `<div style="width:100%; display:flex; justify-content:center; align-items:center; margin: 0 auto;">
  <img src="https://raw.githubusercontent.com/mike-rambil/Advanced-Git/refs/heads/main/brand/advanced-git-mike-rambil.png" style="max-width:100%; height:auto; display:block; margin:0 auto;" alt="banner" />
</div>

> [!IMPORTANT]
> If you find a useful GIT command - be sure to send a PR here as well :)
> Refer to [contribution format guide](./dev-docs/FORMAT.md) to send a PR.
`;

const TOC_HEADER = '# Table of Contents';

const CONCLUSION = `
## Contributors & Credits

> [!NOTE]
> Want to contribute? Be a contributor or author by following the [Contribution Format Guide](./dev-docs/FORMAT.md) , also add your favorite resources in [References & Resources](./CONTRIBUTING.md#references-resources) and submit a Pull Request.

#### [👨‍👩‍👧‍👦 Contributors](./CONTRIBUTING.md)

A list of individuals who have contributed to this project. Add your name and link in [CONTRIBUTING.md](./CONTRIBUTING.md#contributors). Please follow the instructions from [FORMAT.md](./dev-docs/FORMAT.md) when contributing.
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
    // If the step is just a command, render as a code block
    if (/^git [^\n]+$/.test(step.trim())) {
      out += `${i + 1}.\n   \`\`\`sh\n${step.trim()}\n\`\`\`\n`;
    } else {
      // Otherwise, wrap inline commands in backticks
      out += `${i + 1}. ${step.replace(
        /(`[^`]+`|\bgit [^ ]+[^\n]*\b)/gi,
        (match) => (match.startsWith('`') ? match : '`' + match + '`')
      )}\n`;
    }
  });
  return renderSection('Steps', out);
}

function renderExamples(examples) {
  if (!examples || !examples.length) return '';
  let out = '';
  examples.forEach((ex) => {
    out += `- **${ex.description || ''}** \n\n \`\`\`sh\n${
      ex.code
    } \n \`\`\`\n`;
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

function renderProTips(protips) {
  if (!protips || !protips.length) return '';
  let out = '';
  protips.forEach((tip) => {
    out += `> [!TIP]\n> ${tip}\n\n`;
  });
  return renderSection('ProTips', out);
}

function renderTags(tags) {
  if (!tags || !tags.length) return '';
  return renderSection('Tags', tags.map((t) => `\`${t}\``).join(', '));
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
  const badge = `![Category: ${category}](https://img.shields.io/badge/Category-${encodeURIComponent(
    category
  )}-blue)`;
  return `\n${badge}\n`;
}

function renderCommandExamples(examples) {
  if (!examples || !examples.length) return '';
  let out = '';
  examples.forEach((cmd) => {
    out += `- \`${cmd}\`\n`;
  });
  return renderSection('Similar Examples', out);
}

function renderCommand(command) {
  if (!command) return '';
  // Render as a code block if it looks like a command
  if (/^git /.test(command)) {
    return '\n#### Command\n```sh\n' + command + '\n```\n';
  } else {
    return '\n#### Command\n`' + command + '`\n';
  }
}

function conciseMetaLine(author, lastUpdated, tags) {
  let meta = [];
  if (author) meta.push(`Author: ${author}`);
  if (lastUpdated) meta.push(`Updated: ${lastUpdated}`);
  if (tags && tags.length) meta.push(`Tags: ${tags.join(', ')}`);
  return meta.length ? `\n---\n\n_${meta.join(' • ')}_\n` : '';
}

function generateMiniSubtocTOC(obj) {
  if (!obj.subtoc || !obj.subtoc.length) return '';
  let out = '## Key Topics & Subcommands\n';
  obj.subtoc.forEach((sub) => {
    out += `- [${sub.Name}](./${slugify(sub.Name)}.md)`;
    if (sub.short_description) out += `: ${sub.short_description}`;
    out += '\n';
  });
  return out + '\n';
}

function generateContentFile(obj, idx, tocData) {
  let slug = slugify(obj.Name);
  let md = `[⬅️ Back to Table of Contents](${GITHUB_README_URL}#${slug})\n\n`;
  md += `# ${obj.Name}\n\n`;
  if (obj.category) md += renderCategory(obj.category);
  if (obj.short_description) md += `> ${obj.short_description}\n\n`;

  if (obj.long_description) md += `${obj.long_description}\n\n`;
  if (obj.command) md += renderCommand(obj.command);
  if (obj.flags) md += renderFlags(obj.flags);
  if (obj.examples) md += renderExamples(obj.examples);
  if (obj['command similiar examples'])
    md += renderCommandExamples(obj['command similiar examples']);
  if (obj.steps) md += renderSteps(obj.steps);
  if (obj.prerequisites) md += renderPrerequisites(obj.prerequisites);
  if (obj.warnings) md += renderWarnings(obj.warnings);
  if (obj.protips) md += renderProTips(obj.protips);
  if (obj.links) md += renderLinks(obj.links);
  if (obj.related_commands) md += renderRelatedCommands(obj.related_commands);
  if (obj.output_example) md += renderOutputExample(obj.output_example);

  // Always add mini-TOC if subtoc exists
  if (obj.subtoc && obj.subtoc.length) {
    md += generateMiniSubtocTOC(obj);
  }

  // Navigation logic for main TOC items
  if (idx < tocData.length - 1) {
    // There's a next main TOC item
    const nextMainToc = tocData[idx + 1];
    md += `\n[➡️ Continue to Next Topic: ${
      nextMainToc.Name
    }](${GITHUB_CONTENTS_URL}/${slugify(nextMainToc.Name)}.md)\n`;
  } else {
    // This is the very last page - show congratulations
    md += `\n---\n\n## 🎉 Congratulations!\n\nYou've reached the end of this comprehensive Git guide! You've learned some of the most advanced Git techniques and commands.\n\n**What's next?**\n- [📚 Explore more Git topics in the main guide](${GITHUB_README_URL})\n- 🚀 **Great Git contributors put everything into practice** - if you discovered something useful or have your own Git tips, consider contributing to this repository!\n- 💡 Found a bug or have suggestions? [Open an issue or submit a PR](${GITHUB_README_URL}#contributors--credits)\n\n[🏠 Back to Main README](${GITHUB_README_URL})\n`;
  }

  md += conciseMetaLine(obj.author, obj.last_updated, obj.tags);
  return md;
}

function writeIfChanged(filePath, content) {
  if (fs.existsSync(filePath)) {
    const existing = fs.readFileSync(filePath, 'utf8');
    if (existing === content) return; // No change
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

function generateSubtocFile(obj, idx, tocData) {
  obj.subtoc.forEach((sub, subIdx) => {
    const subPath = path.join(CONTENTS_DIR, `${slugify(sub.Name)}.md`);
    let subMd = '';
    // Always add Back to parent
    subMd += `[⬅️ Back to ${obj.Name}](${GITHUB_CONTENTS_URL}/${slugify(
      obj.Name
    )}.md)\n\n`;
    if (subIdx > 0) {
      const prev = obj.subtoc[subIdx - 1];
      subMd += `[⬆️ Previous Step: ${
        prev.Name
      }](${GITHUB_CONTENTS_URL}/${slugify(prev.Name)}.md)\n\n`;
    }
    subMd += `# ${sub.Name}\n\n`;
    if (sub.category) subMd += renderCategory(sub.category);
    if (sub.short_description) subMd += `> ${sub.short_description}\n\n`;
    if (sub.long_description) subMd += `${sub.long_description}\n\n`;
    if (sub.command) subMd += renderCommand(sub.command);
    if (sub.flags) subMd += renderFlags(sub.flags);
    if (sub.examples) subMd += renderExamples(sub.examples);
    if (sub.steps) subMd += renderSteps(sub.steps);
    if (sub.prerequisites) subMd += renderPrerequisites(sub.prerequisites);
    if (sub.warnings) subMd += renderWarnings(sub.warnings);
    if (sub.protips) subMd += renderProTips(sub.protips);
    if (sub.links) subMd += renderLinks(sub.links);
    if (sub.related_commands)
      subMd += renderRelatedCommands(sub.related_commands);
    if (sub.output_example) subMd += renderOutputExample(sub.output_example);

    // Navigation logic
    if (subIdx < obj.subtoc.length - 1) {
      // Not the last subtoc, link to next subtoc
      const next = obj.subtoc[subIdx + 1];
      subMd += `\n[➡️ See the Next Step: ${
        next.Name
      }](${GITHUB_CONTENTS_URL}/${slugify(next.Name)}.md)\n`;
    } else {
      // This is the last subtoc, check if there's a next main TOC item
      if (idx < tocData.length - 1) {
        // There's a next main TOC item
        const nextMainToc = tocData[idx + 1];
        subMd += `\n[➡️ Continue to Next Topic: ${
          nextMainToc.Name
        }](${GITHUB_CONTENTS_URL}/${slugify(nextMainToc.Name)}.md)\n`;
      } else {
        // This is the very last page - show congratulations
        subMd += `\n---\n\n## 🎉 Congratulations!\n\nYou've reached the end of this comprehensive Git guide! You've learned some of the most advanced Git techniques and commands.\n\n**What's next?**\n- [📚 Explore more Git topics in the main guide](${GITHUB_README_URL})\n- 🚀 **Great Git contributors put everything into practice** - if you discovered something useful or have your own Git tips, consider contributing to this repository!\n- 💡 Found a bug or have suggestions? [Open an issue or submit a PR](${GITHUB_README_URL}#contributors--credits)\n\n[🏠 Back to Main README](${GITHUB_README_URL})\n`;
      }
    }

    subMd += conciseMetaLine(sub.author, sub.last_updated, sub.tags);
    writeIfChanged(subPath, subMd);
  });
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
  tocData.forEach((obj, idx) => {
    const filePath = path.join(CONTENTS_DIR, `${slugify(obj.Name)}.md`);
    const content = generateContentFile(obj, idx, tocData);
    writeIfChanged(filePath, content);
    // Also create subtoc files if needed
    if (obj.subtoc && obj.subtoc.length) {
      generateSubtocFile(obj, idx, tocData);
    }
  });
  console.log('Markdown files updated with improved formatting.');
}

main();
