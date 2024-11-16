
<template>
  <hr />
  <UNavigationMenu :items="items" class="justify"/>
</template>

<script setup lang="ts">

const items = [
  // Toolbox repo on left
  [AppItems.toolboxRepo],

  // Other references on right
  AppItemGroups.footerRightItems
];

</script>
