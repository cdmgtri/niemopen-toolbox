<template>
  <div>
    <USeparator :decorative="true" class="my-2"/>
    <CustomIconTitle :icon="icon" :title="title" classes="page-header-title font-semibold ml-3"/>
    <div class="mx-9 mt-2 text-sm">
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
