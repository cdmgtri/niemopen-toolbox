
<template>
  <div class="mb-5">
    <!-- Rule details -->
    <UAlert :color="row.original.color" variant="subtle" :title="row.original.comment" class="my-1 mb-3 text-wrap"/>

    <!-- Results table -->
    <UTable :data="testResults" :columns="columns" class="table-ndr-validation-test-results"/>
  </div>
</template>

<script setup lang="ts">

import type { TableColumn } from '@nuxt/ui';
import type { Row } from '@tanstack/vue-table'
import ToolboxBadgeStatus from '../toolbox/ToolboxBadgeStatus.vue';
import { UBadge } from '#components';

const { row, testResults=[] } = defineProps<{
  row: Row<APITypes.TestSummary>,
  testResults: APITypes.TestResult[]
}>();


const columns: TableColumn<APITypes.TestResult>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell({ row }) {
      return h(ToolboxBadgeStatus, {
        status: row.original.status,
        display: "text",
      });
    }
  },
  {
    accessorKey: "entityCategory",
    header: "Category",
    cell({ row }) {
      return h(UBadge, {
        color: "neutral",
        variant: "subtle",
      }, () => row.original.entityCategory);
    }
  },
  {
    accessorKey: "entity",
    header: "Entity",
  },
  {
    accessorKey: "location",
    header: "Location"
  }
];

</script>

<style lang="scss">

// Maximize width of entity column
.table-ndr-validation-test-results td:nth-child(3) {
  width: 100%;
  white-space: normal !important;
}

.table-ndr-validation-test-results td:nth-child(4) {
  white-space: no-wrap;
}

</style>
