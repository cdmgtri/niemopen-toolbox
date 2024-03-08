
<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <slot name="header" />
      </div>
      <div class="card-text">
        <slot name="body" />
      </div>
      <div v-if="$slots.footer" class="card-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
