
<template>
  <ListTemplate :items="items"/>
</template>

<script setup lang="ts">
import { Property } from '~/utils/niem/Property';
import type { EntityListItem } from './ListTemplate.vue';

const { properties } = defineProps<{ properties: PropertyType[] }>();

type PropertyItem = EntityListItem<PropertyType, EntityType>;

const items = computed<PropertyItem[]>(() => {
  let propertyItems: PropertyItem[] = properties.map(property => {
    return {
      icon: icons.property,
      label: property.qname,
      to: Property.path(Property.params(property)),
      entity: property,
      infoItems: Property.infoItems(property),
      subEntities: [],
      subEntitiesLabel: "",
      subEntitiesLoaded: false
    }
  });
  return propertyItems.sort((a, b) => a.label.localeCompare(b.label));
});

</script>
