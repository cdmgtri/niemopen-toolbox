
<template>
  <NuxtPwaManifest/>
  <NuxtRouteAnnouncer />
  <UApp>
    <NuxtPage/>
  </UApp>
</template>

<script setup lang="ts">

await callOnce(async () => {
  // Set some content defaults
  let toolbox = useToolboxStore();
  await toolbox.loadDefaults();
  console.log("Loaded defaults from app.vue");
});

</script>

<style>
  @import "tailwindcss";
  @import "@nuxt/ui";

  :root {
    --ui-primary: #297DB3;
    --ui-secondary: #297eb32f;
  }

  @theme {
    --color-primary: var(--ui-primary);
    --color-secondary: var(--ui-secondary);
  }
</style>
