
<template>
  <button
    :id="'tab-' + id"
    :class="'btn btn-tab page-header-tab nav-item'"
    :role="'tab'"
    :aria-controls="'pane-' + id"
    :aria-selected="false"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  }
});
</script>
