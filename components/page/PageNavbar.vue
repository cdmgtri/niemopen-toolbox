
<template>
  <UNavigationMenu :items="items" class="flex justify-between h-12 bg-[var(--color-niem)] p-4" variant="link" :ui="ui"/>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';


  const items = [
    // Brand on left
    [AppItems.brand],

    // Menu items on right
    [
      AppMenuItem(undefined, icons.menu, AppItemGroups.siteMenuItems)
    ]
  ] as NavigationMenuItem[];

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
