
<template>
  <UCard :ui="cardUI" class="mb-2 -ml-5">
    <template #header>
      <div class="flex justify-between">
        <span class="mt-1">{{ title }}</span>
        <UButton id="btn-copy" v-if="isSupported" @click="copyValue(code)" :icon="icon" :class="{ copied }" :ui="copyButtonUI"/>
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

// LATER: Refactor copy to clipboard functionality
// Example: https://ui3.nuxt.dev/components/input#with-copy-button

const { color="neutral" } = defineProps<{
  code: string,
  title?: string
  color?: string
}>();

const icon: Ref<string> = ref(icons.copy);

const cardUI = {
  root: `ring ring-inset ring-[var(--ui-${color})]/25 mt-[var(--app-vertical-spacer)] p-0 `,
  header: `p-2 px-8 text-sm font-medium text-[var(--ui-text-muted)]`,
  body: "p-2 px-8 bg-gray-600 text-white",
  footer: "p-2 px-8 text-sm font-light"
}

const copyButtonUI = {
  // TODO: Set up a default style for an icon button with a transparent background
  base: "text-[var(--ui-text-muted)]"
}

async function copyValue(value: string) {
  copy(value);
  icon.value = icons.success;
  setTimeout(() => icon.value = icons.copy, 1500);
}

</script>
