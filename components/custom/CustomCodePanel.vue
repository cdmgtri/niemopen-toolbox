
<template>
  <UCard :ui="ui" class="mb-2 -ml-5">
    <template #header>
      <div class="flex justify-between">
        <span class="mt-1">{{ title }}</span>
        <UButton id="btn-copy" v-if="isSupported" @click="copy(code)" :icon="icons.copy" :class="{ copied }">
          <!-- {{ copied ? "COPIED" : "COPY" }} -->
        </UButton>
      </div>
    </template>

    <pre class="whitespace-pre-wrap"><code>{{ code }}</code></pre>

    <template #footer>
      Fill out fields in the form below to see a request.
    </template>
  </UCard>
</template>

<script setup lang="ts">

import { useClipboard } from "@vueuse/core"
const { copy, copied, isSupported } = useClipboard();

// TODO: Fix support for Card color and variant props

const props = defineProps({
  code: {
    type: String,
    required: true
   },
  title: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: false,
    default: "neutral"
  },
  variant: {
    type: String,
    required: false,
    default: "subtle"
  }
});

const ui = {
  // TODO: Test hardcoded margin re custom state pseudo class warning
  root: `ring ring-inset ring-[var(--ui-${props.color})]/25 mt-[24px] p-0`,
  // root: `ring ring-inset ring-[var(--ui-${props.color})]/25 mt-[var(--app-vertical-spacer)] p-0`,
  header: `p-2 px-8 text-sm font-medium text-[var(--ui-${props.color})]`,
  body: "p-2 px-8 bg-gray-600 text-white",
  footer: "p-2 px-8 text-sm font-light"
}

</script>

<style lang="scss">

#btn-copy {
  color: var(--ui-text-muted) !important;
}

#btn-copy.copied>.iconify {
  color: var(--ui-success) !important;
}

</style>