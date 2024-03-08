
<template>
  <div
    :id="'pane-' + id"
    :class="'tab-pane page-header-pane fade show'"
    :role="'tabpanel'"
    :aria-labelledby="'tab-' + id"
  >
    <hr />
    <div class="page-header-pane-title mb-3">
      <IconAny :icon="icon" />
      <span>{{ title }}</span>
    </div>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.page-header-pane-title {
  color: dimgray;
  margin-left: -32px;
}

</style>
