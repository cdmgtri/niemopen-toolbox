
<template>
  <Entity :page="AppItems.type" :breadcrumbs="breadcrumbs" :additional-title="params.slug" :info-items="infoItems" :found="found">
</Entity>
</template>

<script setup lang="ts">
import type { InfoItem } from '~/utils/niem/Entity';
import { Type } from '~/utils/niem/Type';

const route = useRoute();

type Params = ComponentParams & {
  slug: string
}

const params = route.params as Params;
params.qname = params.slug;

let found = false;
let infoItems: InfoItem[] = [];

const breadcrumbs = Type.breadcrumbs(params);

const type = await Type.type(params);

if (type) {
  found = true;
  infoItems = Type.infoItems(type);
}

</script>
