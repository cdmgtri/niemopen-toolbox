
<template>
  <UInput v-model="file" type="file" :icon="icons.fileUpload">
    <template #trailing v-if="$slots.trailing">
      <slot name="trailing"/>
    </template>
  </UInput>
</template>

<script setup>
  const file = defineModel();
</script>
