
<template>
  <ListTemplate :items="items" :loadFunction="loadModels">

    <template #body="{ item }">
      <ListModels :models="item.subEntities"/>
    </template>

  </ListTemplate>
</template>

<script setup lang="ts">
import { Steward } from '~/utils/niem/Steward';
import type { EntityListItem } from './ListTemplate.vue';

const { stewards=[] } = defineProps<{ stewards: StewardType[] }>();

type StewardItem = EntityListItem<StewardType, ModelType>;

const items = ref<StewardItem[]>(stewards.map(steward => {
  return {
    icon: icons.steward,
    label: steward.shortName,
    to: Steward.path(steward),
    badgeText: badge(steward),
    badgeColor: "neutral",
    entity: steward,
    description: steward.description,
    infoItems: Steward.infoItems(steward),
    subEntities: [],
    subEntitiesLabel: "Models",
    subEntitiesLoaded: false
  }
}));

async function loadModels(item: StewardItem) {
  item.subEntities = await Steward.models(item.entity);
}

function badge(steward: StewardType) {
  let text = "";
  // TODO-API: Update NIEM steward to remove country
  text += steward.stewardKey == "niem" ? "" : steward.country;
  text += text.length > 0 && steward.category ? " | " : "";
  text += steward.category ;
  return text;
}

</script>
