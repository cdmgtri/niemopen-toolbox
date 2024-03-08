
<template>
  <div>
    <PageHeader id="home" />

    <ul class="list-group icon-list">
      <li
        v-for="page in pages"
        :key="page.title"
        class="list-group-item list-group-item-action"
      >
        <!-- Icon -->
        <i :class="`bi bi-${ page.icon } item-icon`" aria-hidden="true"></i>

        <!-- Title with link -->
        <b v-if="page.link">
          <NuxtLink :to="page.link" class="item-link">
            {{ page.title }}
          </NuxtLink>
        </b>

        <!-- Title without link -->
        <a v-else class="item-link item-link-unavailable">
          {{ page.title }}
        </a>

        <!-- Badge with development status -->
        <!-- :class="`float-end badge badge-${ getBadgeColor(page.status) }`" -->
        <!--
        <span
          :class="`float-end badge ${ getBadgeClasses(page.status) }`"
          role="status"
          :aria-label="page.status"
        >
          {{ page.draft }} | <span id="schedule">{{ page.schedule }}</span>
        </span>
 -->

        <!-- Description -->
        <div v-if="page.description" class="small text-muted item-description">
          {{ page.description }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>

import { getPages } from "assets/js/pages";
const pages = getPages("home");

/**
 * Returns the badge color given a status.
 * @param {"completed"|"in progress"|"future"} status - Page status
 * @returns Bootstrap icon base name, without the "bi-" prefix
 */
function getBadgeClasses(status) {
  switch (status) {
    case "future":
      return "app-secondary";
    case "in progress":
      return "app-warning";
      // return "bg-warning-subtle custom-text-warning";
    case "completed":
      return "app-success";
  }
}

</script>

<style scoped lang="scss">

$padding-list-group-x: 16px;

.item-description {
  margin-left: calc($padding-left-app - $padding-list-group-x);
}

.item-link-unavailable {
  color: black;
  text-decoration: none;
}

.list-group-item {
  padding: 12px $padding-list-group-x;
;
}

#schedule {
  font-family: 'Courier New', Courier, monospace;
}

</style>
