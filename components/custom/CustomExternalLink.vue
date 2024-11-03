
<template>
  <ULink :to="to" target="_blank">{{ label }}</ULink>
  <UIcon name="i-heroicons:arrow-up-right-20-solid" class="size-3 align-top text-[var(--ui-text-dimmed)]"/>
</template>

<script setup>

const props = defineProps({
  to: {
    type: String,
    required: false,
    default: null
  },
  label: {
    type: String,
    required: true
  }
});

</script>

<style>

</style>