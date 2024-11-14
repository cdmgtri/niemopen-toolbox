
<template>
  <UNavigationMenu :items="items" class="flex justify-between h-12 bg-[var(--color-niem)] p-4" variant="link" :ui="ui"/>
</template>

<script setup>

  const items = [
    // Brand on left
    getLinks(groups.brand),

    // Menu items on right
    [
      getMenuItem(null, icons.menu, groups.siteSettings)
    ]
  ];

  const ui = {
    // Display drop-down as single small (not full width) column on right
    viewportWrapper: "w-48 right-0 left-auto",
    childList: "grid-cols-1",
    linkLabel: "text-white text-lg",
    link: "text-white",
    linkLeadingIcon: "text-white",
    linkTrailingIcon: "hidden"
  };

</script>

<style lang="scss" scoped>

nav .iconify {
  // TODO: Check hosted navbar colors
  color: white !important;
  // color: var(--ui-text-muted) !important;
}

</style>
