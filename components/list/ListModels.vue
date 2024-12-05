
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

const { models=[], labelStewards = false } = defineProps<{
  models: ModelType[],
  labelStewards?: boolean
}>();

type ModelItem = EntityListItem<ModelType, VersionType>;

const items = computed<ModelItem[]>(() => {
  let modelItems: ModelItem[] = models.map(model => {
    return {
      icon: icons.model,
      label: (labelStewards ? `(${model.steward.shortName}) ` : "") + model.shortName,
      to: Model.path(Model.params(model)),
      badgeText: model.category,
      badgeColor: model.category == "other" ? "neutral" : "primary",
      badgeVariant: model.category == "reference" ? "solid" : "subtle",
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
  let params = Model.params(item.entity);
  item.subEntities = await Model.versions(params);
}

</script>
