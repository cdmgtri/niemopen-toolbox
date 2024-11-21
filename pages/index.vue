
<template>
  <PageHeader :page="AppItems.home">
    <template #user>
      <p>
        Use the provided utilities to help manage NIEM data models or to see working demos of NIEM API 2.0 functionality.
      </p>

      <p>
        This application is under development.  It is open source and will be a replacement for SSGT, Migration Tool, and ConTesA functionality.
      </p>

      <p class="font-medium">Tips:</p>

      <ul class="bullets">
        <li>
          Toggle the page buttons to open or close the panel.  The button is blue when the panel is open.
        </li>
      </ul>

      <p class="font-medium">Report bugs:</p>

      <ul class="bullets">
        <li>
          Create an issue on the repo at <CustomLink :link="AppItems.toolboxRepo"/> <span class="font-light text-xs">(GitHub account required)</span>
        </li>
        <li>
          Submit a report through <CustomLink :link="AppItems.contact"/>
        </li>
      </ul>
    </template>

    <template #developer>
      <p>
        See the developer information panels on each of the utility pages for information on how to make the corresponding API calls.
      </p>

      <p>
        The Swagger UI and OpenAPI JSON file are available at <CustomLink :link="AppItems.apiSwaggerUI"/>.
      </p>
    </template>

    <template #preferences>
      <p>Page-specific preferences will be available in this panel.</p>
    </template>
  </PageHeader>

  <UCard v-for="page in AppTools" :ui="ui">
    <!-- Page icon -->
    <UIcon :name="page.icon" class="mr-2"/>

    <!-- Page title as link if available... -->
    <span v-if="page.to">
      <ULink :to="page.to" class="label-link font-semibold">{{ page.label }}</ULink>
      <UBadge color="warning" variant="subtle" class="ml-2 align-top">alpha</UBadge>
    </span>
    <!-- ...otherwise page title as text -->
    <span v-else class="label-text">
      <span class="font-semibold">{{ page.label }}</span>
      <UBadge color="neutral" variant="outline" class="ml-2 align-top">future</UBadge>
    </span>


    <!-- Page description -->
    <p class="label-description">{{ page.description }}</p>
  </UCard>

</template>

<script setup lang="ts">

const ui = {
  body: "sm:p-5 p-5"
}

</script>

<style lang="css" scoped>

.iconify {
  color: var(--ui-text-muted);
}

.label-description {
  font-size: smaller;
  color: slategray;
  font-weight: 400;
  margin-left: 24px;
}

</style>
