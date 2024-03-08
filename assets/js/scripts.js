
/* eslint-disable no-unused-vars */

/**
 * Show the "Top of page" button at the bottom of the page
 * if the user has scrolled down.
 */
$(function() {
  $("#scroll-top").hide();
  $(window).on("scroll", function() {
    $("#scroll-top").toggle(window.scrollY > 0);
  });
});

/**
 * @param {Blob} blob - Data to be zipped
 * @param {String} filename - Filename for the zip
 * @returns {void}
 */
function downloadZip(blob, filename) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.target = "_blank";
  link.setAttribute("type", "hidden");

  // Needed for Firefox
  document.body.appendChild(link);

  link.click();
  link.remove();
}
