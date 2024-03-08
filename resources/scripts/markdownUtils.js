
const Showdown = require("showdown");

const Converter = new Showdown.Converter();
Showdown.setFlavor("github");
// Showdown.setOption("", "");

class MarkdownUtils {

  /**
   * Converts Markdown text to HTML
   * @param {string} markdownText - Text formatted as Markdown
   * @returns{string} Text formatted as HTML
   */
  static convertMarkdownToHTML(markdownText) {
    return Converter.makeHtml(markdownText);
  }

}

module.exports = MarkdownUtils;
