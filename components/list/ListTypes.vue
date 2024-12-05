
<template>
  <ListTemplate :items="items"/>
</template>

<script setup lang="ts">
import { Type } from '~/utils/niem/Type';
import type { EntityListItem } from './ListTemplate.vue';

const { types } = defineProps<{ types: TypeType[] }>();

type TypeItem = EntityListItem<TypeType, EntityType>;

const items = computed<TypeItem[]>(() => {
  let typeItems: TypeItem[] = types.map(type => {
    return {
      icon: icons.class,
      label: type.qname,
      to: Type.path(Type.params(type)),
      entity: type,
      infoItems: Type.infoItems(type),
      subEntities: [],
      subEntitiesLabel: "",
      subEntitiesLoaded: false
    }
  });
  return typeItems.sort((a, b) => a.label.localeCompare(b.label));
});

</script>
