
/* eslint no-unused-vars: off */

function getNIEMApiUrl() {
  return "http://localhost:8080/api/v2";
}

async function getNIEMApiVersion() {
  let version = "CALL FAILED";
  try {
    const response = await fetch(getNIEMApiUrl() + "/version");
    version = await response.text();
  }
  catch (exception) {
  }
  return version;
}

/**
 * Add an event handler to all elements with a "copy" class to copy text to the clipboard on click.
 */
$(function() {
  // Add a new copy button to each code block
  $(".copy").each(function() {
    const selected = $(this);
    let textNode = selected;

    // Support the stacked-table partial by copying the value cell instead of the label cell
    if (selected.hasClass("copy-next")) {
      textNode = selected.next();
    }

    selected.on("click", function() {
      // Copy text to clipboard
      navigator.clipboard.writeText(textNode.text().trim());

      // Provide temporary visual cue that the text has been copied
      selected.removeClass("copy");
      selected.addClass("copied");

      // Restore original style after a short amount of time
      setTimeout(function() {
        selected.removeClass("copied");
        selected.addClass("copy");
        // @ts-ignore
        selected.popover("hide");
      }, 300);
    });
  });
});

/**
 * Set up popovers for elements with class "copy"
 */
$(function() {
  // @ts-ignore
  $(".copy").attr("data-toggle", "popover").attr("title", "Copied value").attr("data-placement", "top").popover();
});

/**
 * Copy codes and definitions from a code table, formatted for Markdown
 * or Excel.
 *
 * @param {string} tableClass - Class of table
 * @param {"markdown"|"excel"} style - Output table style
 */
function copyTable(tableClass, style) {
  let text = style === "excel" ? "Code\tDefinition\n" : "Code | Definition\n--- | ---\n";
  const delimiter = style === "excel" ? "\t" : " | ";

  $(`.${tableClass} > tbody`).first().find("tr").each(function(index, tr) {
    text += $(tr).find("td").get().map(td => td.innerHTML).join(delimiter) + "\n";
  });

  navigator.clipboard.writeText(text);
}
