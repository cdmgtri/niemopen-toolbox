
<template>
  <UInput type="file" :icon="icon" :id="id">
    <template #trailing v-if="$slots.trailing">
      <slot name="trailing"/>
    </template>
  </UInput>
</template>

<script setup lang="ts">

  const { icon = icons.upload, id = "file" } = defineProps<{icon?: string, id?: string}>();

</script>
