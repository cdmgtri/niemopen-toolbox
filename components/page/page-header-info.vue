
<template>
  <div class="header-info">
    <details>
      <summary>
        <IconAny :icon="getIcon()" />
        <div>{{ getSummary() }}</div>
      </summary>
      <slot />
    </details>
  </div>
</template>

<script setup>
const props = defineProps({
  target: {
    type: String,
    required: true,
    validation(value) {
      return value === "user" || value === "developer";
    }
  }
});

function getSummary() {
  return props.target === "user" ? "User info" : "Developer info";
}

function getIcon() {
  return props.target === "user" ? "info-circle" : "journal-code";
}
</script>
