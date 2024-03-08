
<template>
  <div class="form-group mb-3">
    <label v-if="label" for="formFileInput" class="form-label">{{ label }}</label>
    <input id="file" class="form-control" type="file" :multiple="multiple" :accept="accept" />
    <small v-if="note" class="form-text note">
      {{ note }}
    </small>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: false,
    default: null
  },
  multiple: {
    type: Boolean,
    required: false,
    default: false
  },
  accept: {
    type: String,
    required: false,
    default: "*"
  },
  note: {
    type: String,
    required: false,
    default: null
  }
});
</script>
