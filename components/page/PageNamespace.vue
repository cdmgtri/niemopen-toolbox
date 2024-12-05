
<template>
  <Entity :page="AppItems.namespace" :breadcrumbs="breadcrumbs" :additional-title="params.slug" :info-items="infoItems" :found="found">

    <ToolboxCollapsible :label="propertiesLabel" :default-open="false" @open="loadProperties">
      <ListProperties :properties="properties"/>
    </ToolboxCollapsible>

    <ToolboxCollapsible :label="typesLabel" :default-open="false" @open="loadTypes">
      <ListTypes :types="types"/>
    </ToolboxCollapsible>

    <!-- TODO: Local terms -->
<!--
    <ToolboxCollapsible :label="'Local terms'">
    </ToolboxCollapsible>
 -->

</Entity>
</template>

<script setup lang="ts">
import type { InfoItem } from '~/utils/niem/Entity';
import { Namespace } from '~/utils/niem/Namespace';

const route = useRoute();

type Params = NamespaceParams & {
  slug: string
}

const params = route.params as Params;
params.prefix = params.slug;

let found = false;
let infoItems: InfoItem[] = [];

const breadcrumbs = Namespace.breadcrumbs(params);

const namespace = await Namespace.namespace(params);

let properties: PropertyType[] = [];
let propertiesLoaded = false;
let propertiesLabel = ref("Properties");

let types: TypeType[] = [];
let typesLoaded = false;
let typesLabel = ref("Types");

// TODO-API: Implement local terms
let terms: string[] = [];
let termsLoaded = false;
let termsLabel = ref("Terms");

if (namespace) {
  found = true;
  infoItems = Namespace.infoItems(namespace);
}

async function loadProperties() {
  if (namespace && !propertiesLoaded) {
    properties = await Namespace.properties(params);
    propertiesLabel.value += ` (${properties.length})`;
    propertiesLoaded = true;
  }
}

async function loadTypes() {
  if (namespace && !typesLoaded) {
    types = await Namespace.types(params);
    typesLabel.value += ` (${ types.length })`;
    typesLoaded = true;
  }
}


</script>
