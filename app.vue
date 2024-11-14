
<template>
  <NuxtRouteAnnouncer />
  <UApp>
    <ClientOnly>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </ClientOnly>
  </UApp>
</template>

<script setup lang="ts">

await callOnce(async () => {
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
