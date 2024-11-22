
<template>
  <CustomCard v-if="results.request != 'unsent'"
  :title="title" :icon="icon" :color="color" :dismissible="true">

    <template #default v-if="!results.report">
      <span class="whitespace-pre-line">
        <div>{{ results.message }}</div>
      </span>
    </template>

    <template #default v-else>
      <div class="spaced">
        <p>{{ results.message }}</p>

        <UCard v-if="results.status != 'info'">
          <UTable :data="resultCountData" class="flex-1"/>
        </UCard>

        <CustomValidationNDRResults v-if="kind=='ndr'" :results="results"/>

        <CustomReportGenericResults v-else :tests="results.report?.tests"/>
      </div>
    </template>

    <template #footer v-if="results.request == 'returned'">
      <p>Request returned in {{ results.time }} seconds</p>
    </template>

  </CustomCard>
</template>

<script setup lang="ts">

import type { TableData } from '@nuxt/ui';

const { results, kind } = defineProps<{
  results: APITypes.Results,
  kind?: APITypes.ValidationKindType
}>();

const title = computed(() => {
  return results.title || results.status.toUpperCase();
});

const icon = computed(() => icons[results.status]);

const color = computed(() => {
  return results.status == 'pending' ? "warning" : results.status;
});


const resultCountData = computed<TableData[]>(() => {
  if (!results.report) return [];
  return [
    {
      summary: "Info",
      count: results.report.info
    },
    {
      summary: "Warnings",
      count: results.report.warnings
    },
    {
      summary: "Errors",
      count: results.report.errors
    },
  ]
});

</script>
