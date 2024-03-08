
<template>
  <div>
    <PageHeader id="release-notes" />

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div id="version-body" class="card" v-html="changelog" />
  </div>
</template>

<script setup>
import changelog from "assets/js/changelog";
</script>

<style lang="scss">

// Note: v-html is not affected by scoped styles

#version-body > :is(h1, h2, h3, p) {
  padding: 16px $padding-left-app;
}

#version-body h1 {
  font-size: 1.3rem !important;
  font-weight: bold;
}

#version-body h2 {
  font-size: 1.2rem;
  background-color: gainsboro;
  opacity: 0.7;
  border-radius: 0.375rem;
}

#version-body h3 {
  font-size: 1.0rem;
  font-weight: bold;
}

#version-body ul {
  padding-left: calc($padding-left-app + 24px);
  border-color: gainsboro;
}

</style>
