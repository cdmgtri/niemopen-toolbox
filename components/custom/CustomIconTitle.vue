
<template>
  <span :class="classes + ' space-x-1.5'">
    <UIcon :name="icon" class="size-4 align-middle"/>
    <span class="align-middle">{{ title }}</span>
  </span>
</template>

<script setup>

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  classes: {
    type: String,
    required: false,
    default: ""
  }
});

</script>
