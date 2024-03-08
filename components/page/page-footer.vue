
<template>
  <footer class="footer small mt-auto align-self-bottom">
    <hr />
    <div id="footer-links" class="d-flex justify-content-between">
      <!-- NIEM -->
      <span class="flex-grow-1">
        <strong><a href="https://niemopen.org" target="_blank">NIEM</a></strong>
      </span>

      <!-- NIEM Toolbox on GitHub -->
      <a href="https://github.com/NIEM/niem-toolbox" target="_blank" aria-label="NIEM Toolbox on GitHub">
        <i class="bi bi-github" title="NIEM Toolbox on GitHub" />
      </a>

      <!-- NIEM API 2.0 -->
      <a href="https://github.com/niemopen/niem-api/tree/dev" target="_blank">NIEM API 2.0</a>

      <!-- CMF Tool -->
      <a href="https://github.com/niemopen/cmf-tool" target="_blank">CMF Tool</a>

      <!-- niem.github.io -->
      <a href="https://niem.github.io" target="_blank">niem.github.io</a>

      <!-- NIEM Training on YouTube -->
      <a href="https://www.youtube.com/watch?v=LJABuw42EnY&list=PLWEnz1sVMlkqxUzx7mCFSRdOLZhyM4DiV" target="_blank">Training videos</a>

      <!-- niemopen.org Contact us -->
      <a href="https://www.niemopen.org/contact-us/" target="_blank">Contact Us</a>
    </div>
  </footer>
</template>

<style>

  #footer-links > * {
    padding: 0 10px;
  }

  footer {
    /* position: sticky; */
    background-color: white;
    padding-bottom: 10px;
    bottom: 0;
    z-index: -1;
  }

</style>
