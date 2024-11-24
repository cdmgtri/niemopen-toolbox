
<template>
  <div v-if="tests.length > 0">
    <UTable :data="testSummaries" :columns="columns" class="table-ndr-validation-test">
      <template #expanded="{ row }">
        <APIResponseReportNDRTest :row="row" :test-results="results(row.original.testId)"/>
      </template>
    </UTable>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import { h } from 'vue'
import ToolboxButtonRowExpand from '../toolbox/ToolboxButtonRowExpand.vue';
import ToolboxIcon from '../toolbox/ToolboxIcon.vue';

const { tests } = defineProps<{tests: APITypes.Test[]}>();

const allResults = computed(() => {
  let results = tests.flatMap(test => test.results) || [];

  // TODO-API: Set entity category on test for skipped schemas
  let utilityMessage = "Skipped validation on NIEM utility schema.";
  let externalMessage = "This warning can be ignored for external standards that are properly handled via NIEM adapter types.";

  results.forEach(item => {
    if (item.testId == "validate-ndr") {
      item.entityCategory = "xs:schema";
      item.entity = item.message == utilityMessage ? utilityMessage : externalMessage;
    }
  });

  return results;
});

/**
 * Combine test information from each result into a single unique array of basic test info.
 */
const testSummaries = computed(() => {
  let testIDs = new Set(tests.map(test => test.id));

  let summaries: APITypes.TestSummary[] = [];

  testIDs.forEach((id) => {
    let summary: Partial<APITypes.TestSummary> = {};
    let results = allResults.value.filter(result => result.testId == id);
    let result = results[0];

    summary.testId = id;

    if (result) {
      let status = API.resultsStatus(results);

      summary.ruleNumber = result.testId.replace("validate-ndr-rule_", "");
      summary.sortNumber = (summary.ruleNumber[0] == "1" ? "" : "0") + summary.ruleNumber;
      summary.comment = result.comment;
      summary.message = result.message;
      summary.count = results.length;
      summary.status = status;
      summary.color = API.statusColor(status);
      summary.icon = API.statusIcon(status);
    }

    // TODO-API: Update test description info for skipped schemas
    if (id == "validate-ndr") {
      summary.ruleNumber = "n/a";
      summary.sortNumber = "00-00";
      summary.message = "No target namespace found. This attribute is required for NIEM conformant schemas.";
      summary.comment = "Check schemas to see if any unintentionally missed validation checks due to lack of a valid NDR conformance target."
    }

    summaries.push(summary as APITypes.TestSummary);
  });

  return summaries.sort((a, b) => a.sortNumber.localeCompare(b.sortNumber));
});

function results(testId: string) {
  return allResults.value
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

const columns: TableColumn<typeof testSummaries.value[0]>[] = [
  {
    id: 'expand',
    cell: ({ row }) => h(ToolboxButtonRowExpand, { row })
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => h(ToolboxIcon, {
      icon: row.original.icon ,
      color: row.original.color
    })
  },
  {
    accessorKey: "ruleNumber",
    header: ( ) => h("div", { class: "text-right" }, "Rule"),
    cell: ({ row }) => h("div", { class: "text-right" }, row.original.ruleNumber )
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "count",
    header: "Count",
    cell: ({ row }) => h("div", { class: "text-right mr-3" }, row.original.count)
  }
]

</script>

<style lang="scss">

// Maximize width of message column
.table-ndr-validation-test th:nth-child(4) {
  width: 100%;
}

</style>