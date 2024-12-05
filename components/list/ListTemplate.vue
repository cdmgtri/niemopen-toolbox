
<template>
  <div>
    <UAccordion :items="items" type="multiple" :disabled="!$slots.body" :ui="{ trailingIcon }">

      <!-- Accordion item header -->
      <template #default="{ item }">

        <!-- Link to item -->
        <ToolboxLink :link="{ label: item.label, to: item.to, labelClasses: 'text-base align-middle' }"/>

        <!-- Popover info -->
        <UPopover mode="hover" :content="{side: 'right'}" class="w-[600px]">
          <UButton :icon="icons.info" color="neutral" variant="ghost" class="align-middle text-[var(--ui-text-muted)]"/>
          <template #content>
            <InfoTable :data="item.infoItems" width-class="w-[600px]"/>
          </template>
        </UPopover>

        <!-- Badge -->
        <UBadge v-if="item.badgeText" :label="item.badgeText" size="sm" :variant="item.badgeVariant || 'subtle'" :color="item.badgeColor || 'neutral'" class="ml-1 font-light"/>

      </template>

      <!-- Accordion item body -->
      <template #body="{ item }">
        <div class="ml-7 mb-2">

          <!-- Description -->
          <p v-if="item.description">{{ item.description }}</p>

          <!-- Sub-Entities -->
          <ListTemplateSubEntities :item="item" :load-function="loadFunction">
            <template #body>
              <slot name="body" :item="item"/>
            </template>
          </ListTemplateSubEntities>

        </div>
      </template>

    </UAccordion>
  </div>
</template>

<script setup lang="ts" generic="T extends EntityType, U extends EntityType">
import type { AccordionItem } from '@nuxt/ui';
import type { InfoItem } from '~/utils/niem/Entity';

export type EntityListItem<T, U> = AccordionItem & {
  label: string,
  to: string,
  badgeText?: string,
  badgeColor?: ColorType,
  badgeVariant?: "solid" | "outline" | "soft" | "subtle"
  entity: T,
  description?: string,
  infoItems: InfoItem[],
  subEntities: U[],
  subEntitiesLabel: string,
  subEntitiesLoaded: boolean
}

let slots = useSlots();

let trailingIcon = slots.body ? "" : "invisible";

const { items, loadFunction } = defineProps<{
  items: EntityListItem<T, U>[],
  loadFunction?: (item: EntityListItem<T, U>) => Promise<void>
}>();

</script>