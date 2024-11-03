
<template>
  <div id="page-header">

    <div class="flex justify-between">
      <!-- Header icon and title -->
      <CustomIconTitle :icon="page.icon" :title="page.label" classes="page-header-title font-bold"/>

      <!-- Header buttons -->
      <span class="gap-1.5">
        <!-- TODO: Slot for additional page buttons -->

        <UButtonGroup size="sm" id="page-header-buttons">
          <UButton color="neutral" variant="outline" @click="toggle" id="btn-user" :icon="icons.info"/>
          <UButton color="neutral" variant="outline" @click="toggle" id="btn-developer" :icon="icons.developer"/>
          <UButton color="neutral" variant="outline" @click="toggle" id="btn-preferences" :icon="icons.preferences"/>
        </UButtonGroup>
      </span>
    </div>

    <div>
      <div id="page-header-more">
        <!-- User information panel -->
        <PageMore v-if="showPanel=='user'" :icon="icons.info" title="User information" slot="user">
          <template #user>
            <slot name="user"/>
          </template>
        </PageMore>

        <!-- Developer information panel -->
        <PageMore v-if="showPanel=='developer'" :icon="icons.developer" title="Developer information" slot="developer">
          <template #developer>
            <slot name="developer"/>
          </template>
        </PageMore>

        <!-- Preferences panel -->
        <PageMore v-if="showPanel=='preferences'" :icon="icons.preferences" title="Preferences" slot="preferences">
          <template #preferences>
            <slot name="preferences"/>
          </template>
        </PageMore>
      </div>
    </div>

  </div>

  <br/>

</template>

<script setup>

import { ref } from 'vue';

const props = defineProps({
  link: {
    type: Object,
    required: true,
    default: null
  }
});

/**
 * Get the title, description, icon, etc., for the current page
 * @type {LinkType}
 */
const page = props.link;

// User, developer, or preferences panel to display.  Default to "none" to hide.
const showPanel = ref("none");

function toggle(e) {
  const selectedPanel = e.currentTarget.id.replace("btn-", "");
  showPanel.value = showPanel.value == selectedPanel ? "none" : selectedPanel;
}

</script>

<style scoped lang="scss">

  #page-header {
    background-color: var(--color-light);
    border: 1px solid gainsboro;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 10px 30px 10px 16px;
  }

  .page-header-title {
    margin-left: 12px;
  }

  button {
    background-color: white;
  }

  .more {
    color: var(--color-niem);
  }

</style>
