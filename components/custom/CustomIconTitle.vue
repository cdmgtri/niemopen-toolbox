
<template>
  <span :class="classes + ' space-x-1.5'">
    <UIcon :name="icon" class="size-4 align-middle"/>
    <span class="align-middle">{{ title }}</span>
  </span>
</template>

<script setup lang="ts">

const { icon, title, classes = "" } = defineProps<{
  icon: string,
  title: string,
  classes?: string }>();

</script>
