
<template>
  <div>
    <PageHeader :page="page" :additional-title="additionalTitle">
      <template #user>
        <slot name="user"/>
      </template>
      <template #developer>
        <slot name="developer"/>
      </template>
      <template #preferences>
        <slot name="preferences"/>
      </template>
    </PageHeader>

    <UCard>

      <UBreadcrumb v-if="breadcrumbs" :items="breadcrumbs" class="-mt-2 mb-5 ml-3">
        <template #separator>
          <span class="mx-1 text-[var(--ui-text-muted)]">/</span>
        </template>
      </UBreadcrumb>

      <div v-if="found">
        <ToolboxCollapsible label="Details">
          <InfoTable :data="infoItems"/>
        </ToolboxCollapsible>

        <slot name="default"/>
      </div>

      <div v-else>
        <UAlert title="Item not found" color="error" variant="subtle"/>
      </div>

    </UCard>

  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';
import type { InfoItem } from '~/utils/niem/Entity';

const {} = defineProps<{
  page: AppLinkType,
  breadcrumbs: BreadcrumbItem[],
  additionalTitle?: string,
  infoItems: InfoItem[],
  found: boolean
}>();

</script>
