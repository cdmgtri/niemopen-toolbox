
<template>
  <UAlert :title="title" :icon="icon" :color="color" variant="subtle" :class="classes" @update:open="hidden='hidden'" close>
    <template #description v-if="$slots.default">
      <hr/>
      <slot/>
    </template>
  </UAlert>
</template>

<script setup>

let hidden = ref("");

const props = defineProps({
  category: {
    type: String,
    required: false,
    default: "info",
    validator(value) {
      return ["success", "error", "warning", "info"].includes(value);
    }
  },
  title: {
    type: String,
    required: true
  }
});

/** @type{"success"|"error"|"warning"|"info"} */
const category = props.category;

const icon = computed(() => {
  switch (category) {
    case 'success':
      return icons.success;
    case 'error':
      return icons.error;
    case 'warning':
      return icons.warning;
    case 'info':
      return icons.info;
  }
});

const color = computed(() => props.category);

const classes = computed(() => `mt-[var(--app-vertical-spacer)] ${hidden.value}`);

</script>
