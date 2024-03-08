
<template>
  <div>
    <CardSimple :class="{closed: closed }">
      <div id="header-row">
        <!-- Header icon and title -->
        <IconAny :icon="page.icon" />
        <span>{{ page.title }}</span>

        <!-- Page-specific header buttons -->
        <span id="header-buttons" class="nav float-end">
          <!-- User info button -->
          <CollapsibleTab id="user">
            <IconAny icon="info-circle" aria-label="User information" />
          </CollapsibleTab>

          <!-- Developer info button -->
          <CollapsibleTab id="developer">
            <IconAny icon="journal-code" aria-label="Developer information" />
          </CollapsibleTab>

          <!-- Preferences button -->
          <CollapsibleTab id="preferences">
            <IconAny icon="sliders2" aria-label="User information" />
          </CollapsibleTab>
        </span>
      </div>

      <div class="mb-3">
        <!-- User info tab pane -->
        <CollapsiblePane id="user" icon="info-circle" title="User information">
          <p>{{ page.description }}</p>
          <slot name="user" />
        </CollapsiblePane>

        <!-- Developer info tab pane -->
        <CollapsiblePane id="developer" icon="journal-code" title="Developer information">
          <slot name="developer" />
        </CollapsiblePane>

        <!-- Preferences tab pane -->
        <CollapsiblePane id="preferences" icon="sliders2" title="Preferences">
          <slot name="preferences" />
        </CollapsiblePane>
      </div>
    </CardSimple>
    <br v-if="!closed" />
  </div>
</template>

<script setup>

import { onMounted } from "vue";
import { getPage } from "assets/js/pages";

const props = defineProps({
  id: {
    type: String,
    required: true,
    default: null
  },
  closed: {
    //
    type: Boolean,
    required: false,
    default: false
  }
});

// Get the title, description, icon, etc., for the current page
const page = getPage(props.id);

/** @type {HTMLCollectionOf<Element>} */
let tabs;

/** @type {HTMLCollectionOf<Element>} */
let panes;

onMounted(() => {
  tabs = document.getElementsByClassName("page-header-tab");
  panes = document.getElementsByClassName("page-header-pane");

  for (const tab of tabs) {
    tab.addEventListener("click", toggle);
  }
});

/**
 * Toggle the pane.  Hide the pane if the tab is clicked twice in a row
 * or if another pane is displayed.
 * @param {Event} e - Event
 */
function toggle(e) {
  // Get the ID for the currently clicked tab and its corresponding tab pane
  const tabId = e.currentTarget.id;
  const paneId = "pane-" + tabId.replace("tab-", "");

  // Get the elements for the current tab and tab pane
  const currentTab = document.getElementById(tabId);
  const currentPane = document.getElementById(paneId);

  if (currentPane.style.display === "block") {
    // Close pane since it was already open
    currentPane.style.display = "none";
    currentTab.classList.remove("active", "current");
  }
  else {
    // Hide all panes
    for (const pane of panes) {
      pane.style.display = "none";
    }

    for (const tab of tabs) {
      tab.classList.remove("active", "current");
    }

    // Display the current tab pane
    currentPane.style.display = "block";
    currentTab.classList.add("active", "current");
  }
}

</script>

<style scoped lang="scss">

  .btn-header {
    background-color: whitesmoke;
    padding-right: 12px;
  }

  button {
    padding: 6px;
  }

  .btn-tab, .btn-tab:active {
    border: none !important;
  }

  #header-buttons {
    margin-right: 14px;
  }

  #header-buttons button {
    margin-left: 8px;
  }

  #header-row {
    width: 100%;
    font-size: 1.3em;
    font-weight: 500;
  }

  i {
    margin-left: -2px;
    margin-right: 13px;
  }

  button i {
    margin: 0;
  }

  i:active {
    color: $color-niem;
  }

  // .btn.current i {
  //   color: $color-niem !important;
  // }

  .tab-pane {
    display: none;
    margin-left: 32px;
  }

  .tab-pane-header {
    font-weight: 500;
    padding-bottom: 6px;
  }

  :deep(.page-header-pane-title) {
    color: $color-niem;
    font-weight: 500;
  }

  :deep(.card-body) {
    padding-bottom: 0;
  }

  /* Navbar with a background color shows square edges.  Match top corners. */
  .card {
    background-color: whitesmoke;
    border-top-left-radius: unset;
    border-top-right-radius: unset;
  }

  .card.closed {
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
  }

</style>
