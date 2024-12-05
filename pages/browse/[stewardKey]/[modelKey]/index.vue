
<template>
  <Entity :page="AppItems.model" :breadcrumbs="breadcrumbs" :additional-title="params.modelKey" :info-items="infoItems" :found="found">
    <ToolboxCollapsible :label="versionsLabel">
      <ListVersions :versions="versions"/>
    </ToolboxCollapsible>
  </Entity>
</template>

<script setup lang="ts">
import type { InfoItem } from '~/utils/niem/Entity';
import { Model } from '~/utils/niem/Model';

const route = useRoute();

const params = route.params as ModelParams;

let found = false;
let infoItems: InfoItem[] = [];

const breadcrumbs = Model.breadcrumbs(params);

const model = await Model.model(params);

let versions: VersionType[] = [];
let versionsLabel = "Versions";

if (model) {
  found = true;
  infoItems = Model.infoItems(model);
  versions = await Model.versions(params);
  versionsLabel += ` (${versions.length})`;
}

</script>
