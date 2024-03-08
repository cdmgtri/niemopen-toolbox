
<template>
  <i :class="`bi bi-${ step }-circle i-step`" :aria-label="`Step ${step}`" />
</template>

<script setup>
defineProps({
  step: {
    type: String,
    required: true
  }
});
</script>
