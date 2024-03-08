
<template>
  <ul class="navbar nav">
    <div class="nav-item dropdown float-end">
      <!-- Settings dropdown button -->
      <button class="btn btn-link float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <!-- Gear icon -->
        <i class="bi bi-gear text-white"></i>
      </button>

      <!-- Settings items -->
      <ul class="dropdown-menu dropdown-menu-end">
        <li v-for="page in pages" :key="page.title">
          <!-- Item with link -->
          <NuxtLink v-if="page.link" :to="page.link" class="text-secondary dropdown-item">
            <i :class="`bi bi-${ page.icon }`" aria-hidden="true" />
            <span>
              {{ page.title }}
            </span>
          </NuxtLink>

          <!-- Item without link -->
          <button v-else class="dropdown-item disabled">
            <i :class="`bi bi-${page.icon}`" aria-hidden="true" />
            <span>
              {{ page.title }}
            </span>
          </button>
        </li>
      </ul>
    </div>
  </ul>
</template>

<script setup>

import { getPages } from "assets/js/pages";
const pages = getPages("navbar-settings");

</script>

<style scoped lang="scss">
a:active {
  background-color: unset;
  color: $color-niem !important;
}
</style>
