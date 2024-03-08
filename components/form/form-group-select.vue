
<template>
  <FormGroup v-bind="props">
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <select
      :id="controlId"
      class="form-select"
      :name="controlId"
      :multiple="multiple"
      :size="size"
      :required="required"
    >
      <slot />
    </select>
    <small v-if="note" class="text-muted">{{ note }}</small>
  </FormGroup>
</template>

<script>
import formGroupProps from "~/assets/js/formGroupProps";
</script>

<script setup>
const props = defineProps({
  ...formGroupProps,
  multiple: {
    type: Boolean,
    required: false,
    default: false
  },
  size: {
    type: Number,
    required: false,
    default: null
  },
  required: {
    type: Boolean,
    required: false,
    default: true
  },
  note: {
    type: String,
    required: false,
    default: null
  }
});
</script>
