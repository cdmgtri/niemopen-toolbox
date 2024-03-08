
<template>
  <div :id="panelId" :class="'tab-pane fade ' + classes" role="tabpanel" aria-labelledby="" tabindex="0">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  panelId: {
    type: String,
    required: true
  },
  classes: {
    type: String,
    required: false,
    default: "",
    validator(value) {
      return value === "" || value === "show active";
    }
  }
});
</script>

<style scoped>
.tab-pane {
  border: 1px solid lightgray;
  border-top: none;
  border-bottom-left-radius: 0.375em;;
  border-bottom-right-radius: 0.375em;;
  border-top-right-radius: 0.375em;;
  display: block;
  margin-right: -100%;
  padding: 10px;
  padding-top: 15px;
  visibility: hidden;
  width: 100%;
}

.tab-pane.active {
  visibility: visible;
}
</style>
