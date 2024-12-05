
<template>
  <Entity :page="AppItems.property" :breadcrumbs="breadcrumbs" :additional-title="params.slug" :info-items="infoItems" :found="found">

</Entity>
</template>

<script setup lang="ts">
import type { InfoItem } from '~/utils/niem/Entity';
import { Property } from '~/utils/niem/Property';

const route = useRoute();

type Params = ComponentParams & {
  slug: string
}

const params = route.params as Params;
params.qname = params.slug;

let found = false;
let infoItems: InfoItem[] = [];

const breadcrumbs = Property.breadcrumbs(params);

const property = await Property.property(params);

if (property) {
  found = true;
  infoItems = Property.infoItems(property);
}

</script>
