
<template>
  <UCard v-if="report">
    <template #header>
      <span class="mr-1 font-semibold">NDR validation results</span>
    </template>

    <UTable :data="tests" :columns="testColumns">
      <template #expanded="{ row }">
        <div class="mb-5">
          <!-- Rule details -->
           <!-- TODO: Review alert vs paragraph -->
          <!-- <p class="my-1 ml-4 mb-3 text-wrap">{{ row.original.comment }}</p> -->
          <UAlert :color="row.original.status" variant="subtle" :title="row.original.comment" class="my-1 mb-3 text-wrap"/>

          <!-- Results table -->
          <UTable :data="testResults(row.original.testId)" :columns="resultColumns"/>
        </div>
      </template>
    </UTable>
  </UCard>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import { h, resolveComponent } from 'vue'
import CustomReportTestBadge from './CustomReportTestBadge.vue';

const UButton = resolveComponent('UButton')
const UBadge = resolveComponent('UBadge')

const { results } = defineProps<{results: APITypes.Results}>();

const report = results.report;

const allTestResults = report?.tests.flatMap(test => test.results) || [];

// TODO-API: Set entity category on test for skipped schemas
allTestResults.forEach(item => {
  if (item.testId == "validate-ndr") {
    item.entityCategory = "xs:schema";
  }
});

const testResultsMap = new Map(
  allTestResults.map(item => [item.testId, {
    testId: item.testId,
    ruleNumber: item.testId.replace("validate-ndr-rule_", ""),
    sortNumber: "",
    count: 0,
    status: item.status,
    message: item.message,
    comment: item.comment
  }])
);

// Update rule sort number and result counts
for (let [key, entry] of testResultsMap) {
  entry.ruleNumber = entry.ruleNumber == "validate-ndr" ? "*****" : entry.ruleNumber;
  entry.sortNumber = entry.ruleNumber[0] == "1" ? entry.ruleNumber : "0" + entry.ruleNumber;
  entry.count = testResults(key).length;
}

let entry = testResultsMap.get("validate-ndr");
if (entry) {
  entry.message = "Skipped validation on schema"
  entry.comment = "Check schemas to see if any missed validation due to lack of a conformance target."
  entry.status = "warning";
}

const tests = [...testResultsMap.values()]
.sort((a, b) => {
  if (a.sortNumber < b.sortNumber) return -1;
  if (a.sortNumber > b.sortNumber) return 1;
  return 0;
});

function testResults(testId: string) {
  return allTestResults
  .filter(item => item.testId == testId)
  .sort((a, b) => {
    if (a.status < b.status) return -1;
    if (a.status > b.status) return 1;
    if (a.location < b.location) return -1;
    if (a.location > b.location) return 1;
    if (a.entity < b.entity) return -1;
    if (a.entity > b.entity) return 1;
    return 0;
  });
}

const testColumns: TableColumn<typeof tests[0]>[] = [
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
    size: 100,
    cell: ({ row }) => h(CustomReportTestBadge, { status: row.original.status, display: "icon", as: 'icon' })
  },
  {
    accessorKey: "ruleNumber",
    header({ }) {
      return h("div", { class: "text-right" }, "Rule")
    },
    cell({ row }) {
      return h("div", { class: "text-right" }, row.original.ruleNumber )
    }
  },
  {
    accessorKey: "message",
    header: "Message"
  },
  {
    accessorKey: "count",
    header: "Count",
    cell({ row }) {
      return h("div", { class: "text-right mr-3" }, row.original.count)
    },
  }
]

const resultColumns: TableColumn<APITypes.TestResult>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell({ row }) {
      return h(CustomReportTestBadge, {
        status: row.original.status,
        display: "text",
      });
    },
    // LATER: Column size isn't working
    size: 75,
    maxSize: 75,
    minSize: 75
  },
  {
    accessorKey: "entityCategory",
    header() {
      return h("div", { class: "w-[150px]" }, "Category")
    },
    cell({ row }) {
      return h(UBadge, {
        color: "neutral",
        variant: "subtle",
      }, () => row.original.entityCategory);
    }
  },
  {
    accessorKey: "entity",
    header: "Entity"
  },
  {
    accessorKey: "location",
    header: "Location"
  }
];

</script>
