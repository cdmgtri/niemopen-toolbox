
<template>
  <PageNamespace v-if="page=='namespace'"/>
  <PageProperty v-else-if="page=='property'"/>
  <PageType v-else/>
</template>

<script setup lang="ts">

const route = useRoute();

const slug = route.params.slug as string;

type Page = "namespace" | "property" | "type";

let page: Page;

if (slug.includes(":")) {
  if (slug.endsWith("Type") || slug.startsWith("xs:") || slug.startsWith("niem-xs:")) {
    page = "type";
  }
  else {
    page = "property";
  }
}
else {
  page = "namespace";
}

</script>
