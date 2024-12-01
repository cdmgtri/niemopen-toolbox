
<template>
  <div>
    <UTable :data="data" :columns="columns" :ui="ui" class="table-info-items"/>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import type { InfoItem } from '~/utils/niem/Entity';
import ToolboxLink from '../toolbox/ToolboxLink.vue';
import ToolboxCopy from '../toolbox/ToolboxCopy.vue';

const { widthClass } = defineProps<{
  data: InfoItem[],
  widthClass?: string
}>();

const ui = {
  root: widthClass,
  thead: "hidden",
  td: "whitespace-normal text-wrap"
}

const columns: TableColumn<InfoItem>[] = [
  {
    accessorKey: "field",
  },
  {
    accessorKey: "value",
    cell: ({ row, getValue }) => {
      // Text cell
      if (!row.original.format) {
        return h(ToolboxCopy, { text: getValue() as string });
      }

      // Link or email cell
      let link: AppLinkType = {
        to: (row.original.format == "email" ? "mailto:" : "") + getValue(),
        label: getValue() as string,
        target: "_blank"
      }
      return h(ToolboxLink, { link });
    }
  }
]

</script>

<style lang="scss">

.table-info-items td:nth-child(1) {
  white-space: nowrap !important;
}

.table-info-items td:nth-child(2) {
  width: 100%;
  white-space: normal !important;
}

.table-info-items tr:first-child td:nth-child(2) {
  font-weight: bold;
}

</style>