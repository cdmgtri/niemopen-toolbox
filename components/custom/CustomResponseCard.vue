
<template>
  <UCard v-if="results.status != 'unsent'" :class="cardClasses" :ui="ui">
    <template #header>
      <div class="flex justify-between">
        <CustomIconTitle :title="results.title || results.category.toUpperCase()" :icon="icon"/>
        <UButton :icon="icons.close" @click="display='hidden'" :class="closeClasses"/>
      </div>
    </template>

    <template #default v-if="!validationResults">
      <span class="whitespace-pre-line">
        <div>{{ results.message }}</div>
      </span>
    </template>

    <template #default v-else>
      <div class="spaced">
        <p>{{ results.message }}</p>
        <UCard v-if="results.category != 'info'">
          <UTable :data="resultCountData" class="flex-1"/>
        </UCard>

        <!-- <UCard v-for="test in validationResults?.tests"> -->
        <!-- <UCard v-for="test in validationResults?.tests" :ui="{header: 'bg-[var(--ui-success)]/10'}"> -->
        <UCard v-for="test in validationResults?.tests" :ui="testUI(test.status)">
          <template #header>
            <UBadge class="mr-2" variant="subtle" :color="getResultColorClass(test.status)">{{ test.status }}</UBadge>
            <span class="mr-1 font-semibold">{{ test.id }} test results</span>
          </template>
          <p class="font-light mb-4">{{ test.description }}</p>

          <UTable :data="test.results" :columns="resultColumns">
            <template #expanded="{ row }">
              <p>{{ row.original.message }}</p>
            </template>
          </UTable>
        </UCard>
      </div>
    </template>

    <template #footer v-if="results.status == 'returned'">
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

const props = defineProps<{
  results: APIResults,
  validationResults?: ValidationResults
}>();

const icon = computed(() => icons[props.results.category]);

const color = computed(() => {
  return props.results.category == 'pending' ? "warning" : props.results.category;
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


function testUI(status: ValidationStatusType) {
  return {};
  let color = getResultColorClass(status);
  return {
    root: `ring-[var(--ui-${color})]/25`,
    header: `bg-[var(--ui-${color})]/10 text-[var(--ui-${color})]`
  }
}


const resultCountData = computed<TableData[]>(() => {
  if (!props.validationResults) return [];
  return [
    {
      summary: "Passed",
      count: props.validationResults.passed
    },
    {
      summary: "Info",
      count: props.validationResults.info
    },
    {
      summary: "Warnings",
      count: props.validationResults.warnings
    },
    {
      summary: "Errors",
      count: props.validationResults.errors
    },
  ]
});

console.log(props.validationResults);

type TestItem = AccordionItem & {
  results: ValidationTestResult[]
}

const testItems : ComputedRef<TestItem[]> = computed(() => {
  if (props.validationResults == undefined) return [];
  return props.validationResults.tests.map(item => {
    return {
      icon: getResultIcon(item.severity),
      label: item.id,
      results: item.results
    }
  });
});

function getResultIcon(severity: ValidationSeverityType | ValidationStatusType) {
  switch (severity) {
    case "error" : return icons.error;
    case "info": return icons.info;
    case "warning": return icons.warning;
    case 'passed': return icons.success;
  }
}

function getResultColorClass(severity: ValidationSeverityType | ValidationStatusType) {
  switch (severity) {
    case "error" : return "error";
    case "info": return "info";
    case "warning": return "warning";
    case 'passed': return "success";
  }
}

const resultColumns: ComputedRef<TableColumn<ValidationTestResult>[]> = computed(() => {
  return [
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
