
<template>
  <div>
    <legend>
      <IconAny v-if="icon" :icon="'bi bi-' + icon" :aria-label="ariaLabel" />
      <span>{{ label }}</span>
    </legend>
    <hr />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false,
    default: null
  },
  ariaLabel: {
    type: String,
    required: false,
    default: null
  }
});
</script>

<style scoped>
legend {
  font-size: larger;
}

legend > span {
  margin-left: -6px;
}
</style>
