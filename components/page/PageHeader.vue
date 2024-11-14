
<template>
  <Teleport defer to="#page-header">

    <div class="flex justify-between z-30">
      <!-- Header icon and title -->
      <CustomIconTitle :icon="page.icon" :title="page.label" classes="page-header-title font-bold"/>

      <!-- Header buttons -->
      <span class="gap-1.5">
        <!-- TODO: Slot for NIEM version select box -->

        <!-- TODO: Slot for additional page buttons -->

        <UButtonGroup size="sm" id="page-header-buttons">
          <UTooltip v-for="id in buttonItems" :text="tooltip(id)">
            <UButton
              color="neutral" variant="outline"
              :id="'btn-' + id"
              :icon="icons[id]"
              :disabled="!$slots[id]"
              @click="toggle"
              v-bind:class="{ 'open': showPanel == id }"
            />
          </UTooltip>
        </UButtonGroup>
      </span>
    </div>

    <div id="page-header-more">

      <!-- TODO: Fix dynamic template / slot names -->
<!--
      <div v-for="panel in panelItems">
        <PageMore v-if="showPanel==panel.id" :icon="icons[panel.id]" :title="panel.title" slot="panel.id">
          <template #[panel.id]>
            <slot :name="panel.id"/>
          </template>
        </PageMore>
      </div>
-->

      <!-- User information panel -->
      <PageMore v-if="showPanel=='info'" :icon="icons.info" title="User information" slot="info">
        <template #info>
          <slot name="info"/>
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

  </Teleport>

</template>

<script setup lang="ts">

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

function toggle(e: Event) {
  const element = e.currentTarget as HTMLElement
  const selectedPanel = element.id.replace("btn-", "");
  showPanel.value = showPanel.value == selectedPanel ? "none" : selectedPanel;
}

const buttonItems : (keyof typeof icons)[] = [ "info", "developer", "preferences" ];

const panelItems = [
  {
    id: "info",
    title: "User information"
  },
  {
    id: "developer",
    title: "Developer information"
  },
  {
    id: "preferences",
    title: "Preferences"
  }
];

function tooltip(id: string) {
  return panelItems.find(item => item.id == id)?.title;
}

</script>

<style lang="scss">

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

  #page-header button {
    background-color: white;
  }

</style>
