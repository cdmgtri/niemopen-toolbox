
<template>
  <UCard v-for="test in tests" :ui="testUI(test.status)">

    <template #header>
      <UBadge class="mr-2" variant="subtle" :color="getResultColorClass(test.status)">
        {{ test.status }}
      </UBadge>
      <span class="mr-1 font-semibold">{{ test.id }} test results</span>
    </template>

    <p class="font-light mb-4">{{ test.description }}</p>

    <UTable :data="test.results.sort(sortTestResults)" :columns="resultColumns" sticky>
      <template #expanded="{ row }">
        <h3>Path:</h3>
        <p class="mb-3">{{ row.original.location }}</p>
        <h3>Error:</h3>
        <p class="text-wrap mb-3">{{ row.original.message }}</p>
      </template>
    </UTable>

  </UCard>
</template>

<script setup lang="ts">
import { h, resolveComponent } from 'vue'

const UButton = resolveComponent('UButton')
const UBadge = resolveComponent('UBadge')
import type { TableColumn } from '@nuxt/ui';


const { tests=[] } = defineProps<{ tests: APITypes.Test[] | undefined }>();


/**
 * Sort test results by filename and line.
 */
function sortTestResults(a: APITypes.TestResult, b: APITypes.TestResult) {
  let aFilename = a.location.split("/").pop() || "";
  let bFilename = b.location.split("/").pop() || "";

  let filenameComparison = aFilename.localeCompare(bFilename,undefined,{sensitivity: 'base'});
  if (filenameComparison != 0) return filenameComparison;
  return parseInt(a.line) - parseInt(b.line);
}

function testUI(status: APITypes.ResultStatusCode) {
  let color = getResultColorClass(status);
  return {
    root: `ring-[var(--ui-${color})]/25`,
    header: `bg-[var(--ui-${color})]/10 text-[var(--ui-${color})]`
  }
}

function getResultIcon(severity: APITypes.ResultSeverityCode | APITypes.ResultStatusCode) {
  switch (severity) {
    case "error" : return icons.error;
    case "info": return icons.info;
    case "warning": return icons.warning;
    case 'passed': return icons.success;
  }
}

function getResultColorClass(severity: APITypes.ResultSeverityCode | APITypes.ResultStatusCode) {
  switch (severity) {
    case "error" : return "error";
    case "info": return "info";
    case "warning": return "warning";
    case 'passed': return "success";
  }
}

const resultColumns: TableColumn<APITypes.TestResult>[] = [
  // TODO: Refactor expandable row
  {
    id: 'expand',
    cell: ({ row }) =>
      h(UButton, {
        color: 'neutral',
        variant: 'ghost',
        icon: icons.down,
        square: true,
        ui: {
          leadingIcon: [
            'transition-transform',
            row.getIsExpanded() ? 'duration-200 rotate-180' : ''
          ],
          base: "bg-transparent"
        },
        onClick: () => row.toggleExpanded()
      })
  },
  // TODO: Refactor status badge
  {
    accessorKey: "status",
    header: "Status",
    size: 100,
    cell: ({ row }) => {
      const color = {
        passed: 'success' as const,
        error: 'error' as const,
        warning: 'warning' as const
      }[row.getValue('status') as string]

      return h(UBadge, { variant: 'subtle', color }, () =>
        row.getValue('status')
      )
    }
  },
  {
    accessorKey: "entityCategory",
    header: "Category",
    cell({ getValue }) {
      if (!getValue()) return;
      return h(UBadge, { color: "neutral", variant: "subtle"}, getValue);
    },

    size: 150,
    maxSize: 150
  },
  {
    accessorKey: "entity",
    header: "Entity",
    cell: ({ getValue}) => h("span", {class: 'w-[100px]'}, getValue),
    size: 200,
    maxSize: 200
  },
  {
    accessorKey: "location",
    header: "File",
    cell: ({ row }) => row.original.location.split("/")?.pop()
  },
  {
    accessorKey: "line",
    header: "Line",
    size: 75,
    maxSize: 75
  },
  {
    accessorKey: "column",
    header: "Column",
    size: 75,
    maxSize: 75
  }
];


</script>
