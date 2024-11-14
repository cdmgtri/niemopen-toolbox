<template>
  <div>
    <USeparator :decorative="true" class="my-2"/>

    <!-- Panel title -->
    <CustomIconTitle :icon="icon" :title="title" classes="page-header-title font-semibold ml-3 color-niem"/>

    <!-- Panel contents passed in from parent component -->
    <div class="more mt-2 text-sm spaced-sm">
      <slot :name="slot"/>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  slot: {
    type: String,
    required: true
  }
});

</script>

<style lang="scss" scoped>

.more {
  margin-left: 33px;
}

</style>