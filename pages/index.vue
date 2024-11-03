
<template>
  <NuxtLayout>
    <template #header>
      <PageHeader :link="links.home">
        <template #user>
          USER INFO
        </template>
        <template #developer>
          DEVELOPER INFO
        </template>
        <template #preferences>
          PREFERENCES
        </template>
      </PageHeader>
    </template>

    <template #default>
      <div>
        <UCard v-for="page in getLinks(groups.tools)" :ui="ui">
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
      </div>
    </template>
  </NuxtLayout>

</template>

<script setup>

const ui = {
  body: "p-x-1 sm:p-x-1 p-y-1 sm:p-y-1"
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
