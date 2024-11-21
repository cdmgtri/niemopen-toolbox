
<template>
  <UCard v-if="results.request != 'unsent'" :class="cardClasses" :ui="ui">
    <template #header>
      <div class="flex justify-between">
        <CustomIconTitle :title="results.title || results.status.toUpperCase()" :icon="icon"/>
        <UButton :icon="icons.close" @click="display='hidden'" :class="closeClasses"/>
      </div>
    </template>

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

        <!-- TODO: Clean up -->
        <!-- <UCard v-for="test in validationResults?.tests"> -->
        <!-- <UCard v-for="test in validationResults?.tests" :ui="{header: 'bg-[var(--ui-success)]/10'}"> -->
        <UCard v-for="test in results.report?.tests" :ui="testUI(test.status)">
          <template #header>
            <UBadge class="mr-2" variant="subtle" :color="getResultColorClass(test.status)">{{ test.status }}</UBadge>
            <span class="mr-1 font-semibold">{{ test.id }} test results</span>
          </template>
          <p class="font-light mb-4">{{ test.description }}</p>

          <UTable :data="test.results" :columns="resultColumns">
            <template #expanded="{ row }">
              <p class="text-wrap">{{ row.original.message }}</p>
            </template>
          </UTable>
        </UCard>
      </div>
    </template>

    <template #footer v-if="results.request == 'returned'">
      <p>Request returned in {{ results.time }} seconds</p>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { h, resolveComponent } from 'vue'

const UButton = resolveComponent('UButton')
const UBadge = resolveComponent('UBadge')
import type { AccordionItem, TableColumn, TableData } from '@nuxt/ui';


const display = ref("");

const { results } = defineProps<{ results: APITypes.Results }>();

const icon = computed(() => icons[results.status]);

const color = computed(() => {
  return results.status == 'pending' ? "warning" : results.status;
});

// TODO: Test hardcoded margin re custom state pseudo class warning
const cardClasses = computed(() => `mt-[24px] ${display.value}`);
// const cardClasses = computed(() => `mt-[--app-vertical-spacer] ${display.value}`);

const closeClasses = `right-0 p-0.5 bg-transparent text-[var(--ui-text-muted)] hover:text-[var(--ui-text)] font-medium text-sm hover:bg-inherit align-sub`;

const ui = computed(() => {
  return {
  // TODO: Test hardcoded margin re custom state pseudo class warning
    root: `ring ring-inset ring-[var(--ui-${color.value})]/25 mt-[24px] p-0`,
    // root: `ring ring-inset ring-[var(--ui-${color.value})]/25 mt-[var(--app-vertical-spacer)] p-0`,
    header: `p-2 px-8 text-sm font-medium bg-[var(--ui-${color.value})]/10 text-[var(--ui-${color.value})]`,
    body: "p-2 px-8",
    footer: "p-2 px-8 text-sm font-light"
  }
});


// TODO: Fix testUI
function testUI(status: APITypes.ResultStatusCode) {
  return {};
  let color = getResultColorClass(status);
  return {
    root: `ring-[var(--ui-${color})]/25`,
    header: `bg-[var(--ui-${color})]/10 text-[var(--ui-${color})]`
  }
}


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

type TestItem = AccordionItem & {
  results: APITypes.TestResult[]
}

const testItems : ComputedRef<TestItem[]> = computed(() => {
  if (results.report == undefined) return [];
  return results.report.tests.map(item => {
    return {
      icon: getResultIcon(item.severity),
      label: item.id,
      results: item.results
    }
  });
});

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

const resultColumns: ComputedRef<TableColumn<APITypes.TestResult>[]> = computed(() => {
  return [
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
    {
      accessorKey: "status",
      header: "Status",
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
      accessorKey: "entity",
      header: "Entity"
    },
    {
      accessorKey: "entityCategory",
      header: "Category"
    },
    {
      accessorKey: "location",
      header: "Location"
    },
    {
      accessorKey: "line",
      header: "Line"
    },
    {
      accessorKey: "column",
      header: "Column"
    },

  ]
});

</script>
