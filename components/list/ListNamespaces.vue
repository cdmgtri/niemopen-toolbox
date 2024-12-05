
<template>
  <ListTemplate :items="items"/>
</template>

<script setup lang="ts">
import { Namespace } from '~/utils/niem/Namespace';
import type { EntityListItem } from './ListTemplate.vue';


const { namespaces } = defineProps<{ namespaces: NamespaceType[] }>();

type NamespaceItem = EntityListItem<NamespaceType, EntityType>;

const items = computed<NamespaceItem[]>(() => {
  let namespaceItems: NamespaceItem[] = namespaces.map(namespace => {
    return {
      icon: icons.namespace,
      label: namespace.prefix + (namespace.name ? ` - (${namespace.name})` : ""),
      to: Namespace.path(Namespace.params(namespace)),
      entity: namespace,
      infoItems: Namespace.infoItems(namespace),
      subEntities: [],
      subEntitiesLabel: "",
      subEntitiesLoaded: false
    }
  });
  return namespaceItems.sort((a, b) => a.label.localeCompare(b.label));
});

</script>
