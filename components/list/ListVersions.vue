
<template>
  <ListTemplate :items="items"/>
</template>

<script setup lang="ts">
import { Version } from '~/utils/niem/Version';
import type { EntityListItem } from './ListTemplate.vue';

const { versions } = defineProps<{ versions: VersionType[] }>();

type VersionItem = EntityListItem<VersionType, NamespaceType>;

const items = computed<VersionItem[]>(() => {
  let versionItems: VersionItem[] = versions.map(version => {
    return {
      icon: icons.version,
      label: version.versionNumber,
      to: Version.path(Version.params(version)),
      badgeText: badgeText(version),
      badgeColor: badgeColor(version),
      badgeVariant: version.isCurrent ? "solid" : undefined,
      entity: version,
      infoItems: Version.infoItems(version),
      subEntities: [],
      subEntitiesLabel: "",
      subEntitiesLoaded: false
    }
  });
  return versionItems.sort((a, b) => b.label.localeCompare(a.label));
});

function badgeText(version: VersionType) {
  if (version.isCurrent) return "current";
  if (!version.isPublished) return "draft";
}

function badgeColor(version: VersionType): ColorType | undefined {
  if (version.isCurrent) return "success";
  if (!version.isPublished) return "warning";
}

</script>