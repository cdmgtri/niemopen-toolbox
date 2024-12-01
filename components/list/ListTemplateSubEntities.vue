
<template>
  <div>
    <UCollapsible class="mt-3" :default-open="true">

      <UButton :label="item.subEntitiesLabel" color="neutral" variant="subtle" :leading-icon="icons.down" class="justify-start" block/>

      <template #content>
        <div class="mt-3 ml-8">
          <slot name="body" :item="item"/>
        </div>
      </template>

    </UCollapsible>
  </div>
</template>

<script setup lang="ts" generic="T extends EntityType, U extends EntityType">
import type { EntityListItem } from './ListTemplate.vue';

const { item, loadFunction } = defineProps<{
  item: EntityListItem<T, U>,
  loadFunction?: (item: EntityListItem<T, U>) => Promise<void>
}>();

// Load items
if (item && !item.subEntitiesLoaded && loadFunction) {
  await loadFunction(item);
  item.subEntitiesLoaded = true;
  item.subEntitiesLabel += ` (${item.subEntities.length})`;
}

</script>
