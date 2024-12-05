
<template>
  <Entity :page="AppItems.steward" :breadcrumbs="breadcrumbs" :additional-title="params.stewardKey" :info-items="infoItems" :found="found">
    <ToolboxCollapsible :label="modelsLabel">
      <ListModels :models="models"/>
    </ToolboxCollapsible>
  </Entity>
</template>

<script setup lang="ts">
import type { InfoItem } from '~/utils/niem/Entity';
import { Steward } from '~/utils/niem/Steward';

const route = useRoute();

const params = route.params as StewardParams;

const breadcrumbs = Steward.breadcrumbs(params);

let found = false;
let infoItems: InfoItem[] = [];

const steward = await Steward.steward(params);

let models: ModelType[] = [];
let modelsLabel = "Models";

if (steward) {
  found = true;
  infoItems = Steward.infoItems(steward);
  models = await Steward.models(params);
  modelsLabel += ` (${models.length})`;
}

</script>
