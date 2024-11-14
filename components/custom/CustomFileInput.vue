
<template>
  <UInput type="file" :icon="icon" :id="id">
    <template #trailing v-if="$slots.trailing">
      <slot name="trailing"/>
    </template>
  </UInput>
</template>

<script setup lang="ts">

  const props = defineProps({
    icon: {
      type: String,
      required: false,
      default: icons.fileUpload
    },
    id: {
      type: String,
      required: false,
      default: "file"
    }
  });

</script>
