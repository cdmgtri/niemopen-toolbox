
<template>
  <PageHeader :page="AppItems.browse"/>
  <UCard>
    <UTabs :items="items" v-model="activeTab" class="w-full" @update:model-value="load" variant="link">

      <template #stewards>
        <ListStewards :stewards="stewards"/>
      </template>

      <template #models>
        <ListModels :models="models" :label-stewards="true"/>
      </template>

      <template #highlights>
        <!-- TODO: Highlights -->
        <UAlert title="HIGHLIGHTS" variant="subtle"/>
        <ListModels :models="highlights" :label-stewards="true"/>
      </template>

      <template #favorites>
        <!-- TODO: Favorites -->
        <UAlert title="FAVORITES" variant="subtle"/>
        <ListModels :models="favorites" :label-stewards="true"/>
      </template>

      <template #history>
        <!-- TODO: History -->
        <UAlert title="HISTORY" variant="subtle"/>
        <ListProperties :properties="history"/>
      </template>

    </UTabs>
  </UCard>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui';
import { Model } from '~/utils/niem/Model';
import { Steward } from '~/utils/niem/Steward';

const activeTab = ref<"stewards"|"models"|"highlights"|"favorites">("stewards");

let stewards = ref<StewardType[]>([]);
stewards.value = await Steward.stewards();

let models = ref<ModelType[]>([]);
let modelsLoaded = false;

let highlights = ref<ModelType[]>([]);
let highlightsLoaded = false;

let favorites = ref<ModelType[]>([]);
let favoritesLoaded = false;

let history = ref<PropertyType[]>([]);
let historyLoaded = false;

const items: TabsItem[] = [
  {
    label: "Stewards",
    icon: icons.steward,
    slot: "stewards",
    value: "stewards"
  },
  {
    label: "Models",
    icon: icons.model,
    slot: "models",
    value: "models"
  },
  {
    label: "NIEM highlights",
    icon: icons.niemopen,
    slot: "highlights",
    value: "highlights"
  },
  {
    label: "Favorites",
    icon: icons.starFilled,
    slot: "favorites",
    value: "favorites"
  },
  {
    label: "History",
    icon: icons.history,
    slot: "history",
    value: "history"
  }
]

async function load() {
  switch(activeTab.value) {
    case 'models':
      if (!modelsLoaded) {
        models.value = await Model.models();
        modelsLoaded = true
      }
      break;
  }
}

</script>
