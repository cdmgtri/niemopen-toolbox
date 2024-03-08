
<template>
  <i :class="`bi bi-${ icon }`" v-bind="getAriaAttribute" />
</template>

<script setup>

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  ariaLabel: {
    type: String,
    required: false,
    default: null
  }
});

function getAriaAttribute() {
  if (props.ariaLabel) {
    return `aria-label='${props.ariaLabel}'`;
  }
  return "aria-hidden='true'";
}

</script>
