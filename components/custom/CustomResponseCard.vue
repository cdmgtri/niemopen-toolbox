
<template>
  <UCard :color="color" :class="cardClasses" :ui="ui">
    <template #header>
      <div class="flex justify-between">
        <CustomIconTitle :title="title" :icon="icon"/>
        <UButton :icon="icons.close" @click="display='hidden'" :class="closeClasses"/>
      </div>
    </template>

    <template #default>
      <slot name="default"></slot>
    </template>

    <template #footer>
      <p>Request processed in ## seconds</p>
    </template>
  </UCard>
</template>

<script setup>

const display = ref("");

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

const color = props.category;

const cardClasses = computed(() => `mt-[--app-vertical-spacer] ${display.value}`);

const closeClasses = `right-0 p-0.5 bg-transparent text-[var(--ui-text-muted)] hover:text-[var(--ui-text)] font-medium text-sm hover:bg-inherit align-sub`;

const ui = {
  root: `ring ring-inset ring-[var(--ui-${color})]/25 mt-[var(--app-vertical-spacer)] p-0`,
  header: `p-1 text-sm font-medium bg-[var(--ui-${color})]/10 text-[var(--ui-${color})] sm:px-3`,
  body: "p-1 sm:px-3",
  footer: "p-1 text-sm sm:px-3"
}

</script>
