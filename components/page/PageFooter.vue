
<template>
  <hr />
  <UNavigationMenu :items="items" class="justify"/>
</template>

<script setup>

const items = [
  getLinks(groups.footerLeft),
  getLinks(groups.footerRight)
];

</script>
