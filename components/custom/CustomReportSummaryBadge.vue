
<template>
  <UBadge :color="color" variant="subtle" class="mr-2">{{ text }}</UBadge>
</template>

<script setup lang="ts">

const { results } = defineProps<{results: APITypes.Results}>();

const color = computed(() => API.reportColorClass(results.report));

const text = computed(() => {
  if (!results.report) return "n/a";
  if (results.report.errors) return "errors";
  if (results.report.warnings) return "warnings";
  return "passed";
});

</script>
