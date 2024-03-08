
const fs = require("fs");
const MarkdownUtils = require("./markdownUtils");

loadChangelogIntoNuxtAssets();

/**
 * Reads in markdown text from the given input path, runs custom text
 * replacements, converts the results to HTML, and saves to the
 * given output path.
 */
function loadChangelogIntoNuxtAssets() {
  let markdown = fs.readFileSync("CHANGELOG.md", "utf-8");

  // eslint-disable-next-line no-console
  console.debug(markdown);

  // Converts short git commit IDs to GitHub commit urls
  markdown = markdown.replace(/([\da-f]{7})$/gm, "<kbd>[$1](https://github.com/niemopen/niem-toolbox/commit/$1)</kbd>");

  // Removes the changelog header
  markdown = markdown.replace("# Changelog\n", "");

  // Removes information about commit guidelines.
  markdown = markdown.replace(/All notable changes to this project will be documented in this file.*$/m, "");

  const html = MarkdownUtils.convertMarkdownToHTML(markdown);
  const js = `\nexport default \`${html}\`;\n`;

  fs.writeFileSync("assets/js/changelog.js", js);
}
