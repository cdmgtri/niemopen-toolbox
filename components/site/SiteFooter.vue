
<template>
  <hr />
  <UNavigationMenu :items="items" class="justify" />
</template>

<script setup lang="ts">

const footerRightItems = [
  AppItems.niemOpenWebsite,
  AppItems.apiRepo,
  AppItems.cmfToolRepo,
  AppItems.techHub,
  AppItems.trainingVideos,
  AppItems.contact
];

const items = [
  // Toolbox repo on left
  [AppItems.toolboxRepo],

  // Other references on right
  footerRightItems
];

</script>
