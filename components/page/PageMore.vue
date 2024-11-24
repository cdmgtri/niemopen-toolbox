<template>
  <div>
    <USeparator :decorative="true" class="my-2"/>

    <!-- Panel title -->
    <ToolboxIconTitle :icon="icon" :title="title" classes="page-header-title font-semibold ml-3 color-niem"/>

    <!-- Panel contents passed in from parent component -->
    <div class="more mt-2 text-sm spaced-sm">
      <slot :name="slotName"/>
    </div>
  </div>
</template>

<script setup lang="ts">

const { icon, title, slotName } = defineProps<{
  icon: string,
  title: string,
  slotName: string
}>();

</script>

<style lang="scss" scoped>

.more {
  margin-left: 33px;
}

</style>