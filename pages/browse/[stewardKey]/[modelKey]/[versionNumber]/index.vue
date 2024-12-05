
<template>
  <Entity :page="AppItems.version" :breadcrumbs="breadcrumbs" :additional-title="params.versionNumber" :info-items="infoItems" :found="found">
    <ToolboxCollapsible :label="namespacesLabel">
      <ListNamespaces :namespaces="namespaces"/>
    </ToolboxCollapsible>
  </Entity>
</template>

<script setup lang="ts">
import type { InfoItem } from '~/utils/niem/Entity';
import { Version } from '~/utils/niem/Version';

const route = useRoute();

const params = route.params as VersionParams;

const breadcrumbs = Version.breadcrumbs(params);

let found = false;
let infoItems: InfoItem[] = [];

const version = await Version.version(params);

let namespaces: NamespaceType[] = [];
let namespacesLabel = "Namespaces";

if (version) {
  found = true;
  infoItems = Version.infoItems(version);
  namespaces = await Version.namespaces(params);
  namespacesLabel += ` (${namespaces.length})`;
}

</script>