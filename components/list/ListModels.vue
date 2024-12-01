
<template>
  <ListTemplate :items="items" :load-function="loadVersions">
    <template #body="{ item }">
      <ListVersions :versions="item.subEntities"/>
    </template>
  </ListTemplate>
</template>

<script setup lang="ts">
import { Model } from '~/utils/niem/Model';
import type { EntityListItem } from './ListTemplate.vue';

const { models=[] } = defineProps<{ models: ModelType[] }>();

type ModelItem = EntityListItem<ModelType, VersionType>;

const items = computed<ModelItem[]>(() => {
  let modelItems: ModelItem[] = models.map(model => {
    return {
      icon: icons.model,
      label: model.shortName,
      badgeText: model.category,
      badgeColor: "primary",
      entity: model,
      description: model.description,
      infoItems: Model.infoItems(model),
      subEntities: [],
      subEntitiesLabel: "Versions",
      subEntitiesLoaded: false
    }
  });
  return modelItems.sort((a, b) => {
    if (a.entity.category != b.entity.category) {
      // Sort reference models first
      if (a.entity.category == "reference") return -1;
    }
    return a.label.localeCompare(b.label);
  });
});

async function loadVersions(item: ModelItem) {
  item.subEntities = await Data.versions(item.entity);
}

</script>
