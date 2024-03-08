<!-- eslint-disable vuejs-accessibility/label-has-for -->

<template>
  <div class="form-group mb-4">
    <!-- Label -->
    <label :for="controlId" class="text-niem mb-2">
      <!-- Add icon for step number if given -->
      <IconStep v-if="step" :step="step" />

      <!-- Add icon if given otherwise -->
      <IconAny v-else-if="icon" v-bind="props" />

      <!-- Label text -->
      <span>
        {{ label }}
      </span>
    </label>

    <!-- Form control slot -->
    <slot />
  </div>
</template>

<script>
import props from "~/assets/js/formGroupProps";
</script>

<script setup>
defineProps({ ...props });
</script>

<style scoped>
label {
  width: 100%;
}
</style>
