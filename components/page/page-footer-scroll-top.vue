
<template>
  <div id="scroll-top">
    <!-- Scroll page to the top of the screen if not already there -->
    <a class="btn text-secondary" href="#" role="button" aria-label="Scroll to top of page">
      <i class="bi bi-arrow-up-circle" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

/** @type{HTMLElement|null} */
let scrollButton;

/**
 * Display the scroll-top button to return to the top of the page
 * if the user is no longer at the top; hide otherwise.
 */
function toggleScrollTopButton() {
  scrollButton.style.display = window.scrollY > 0 ? "block" : "none";
}

onMounted(() => {
  // Hide the scroll-top button and set the event listener
  scrollButton = document.getElementById("scroll-top");
  scrollButton.style.display = "none";
  window.addEventListener("scroll", toggleScrollTopButton);
});

</script>

<style scoped>
  a:active {
    border: none;
  }

  i {
    font-size: 1.5rem;
  }

  #scroll-top {
    margin-left: -60px;
    position: fixed;
    top: 70%;
    z-index: 100;
  }
</style>
