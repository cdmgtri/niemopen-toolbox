
<template>
  <div>
    <ul :id="`tab-ul-${ group }`" :class="`nav nav-${ navStyle }`" role="tablist">
      <li v-for="label in tabLabels" :key="label" class="nav-item" role="presentation">
        <button
          :id="getButtonId(label)"
          :class="'nav-link ' + getActiveButtonClass(label)"
          :data-bs-toggle="'tab'"
          :data-bs-target="'#' + getTabId(label)"
          :type="'button'"
          :role="'tab'"
          :aria-controls="getTabId(label)"
          :aria-selected="getTabIndex(label)===0"
        >
          <IconAny v-if="icons" :icon="getIcon(label)" />
          {{ label }}
        </button>
      </li>
    </ul>

    <div class="tab-content mb-3">
      <!-- Tab pane slot -->
      <div
        v-for="label in tabLabels"
        :id="getTabId(label)"
        :key="label"
        :class="'tab-pane fade ' + getTabPaneClasses(label)"
        :role="'tabpanel'"
        :aria-labelledby="getButtonId(label)"
        :tabindex="'0'"
      >
        <slot :name="label" />
      </div>
    </div>
  </div>
</template>

<script setup>

import { useSlots } from "vue";
const slots = useSlots();

const props = defineProps({
  navStyle: {
    type: String,
    required: false,
    default: "tabs",
    validator(value) {
      return ["tabs", "pills"].includes(value);
    }
  },
  group: {
    type: String,
    required: false,
    default: "default"
  },
  icons: {
    type: Array,
    required: false,
    default: null
  }
});

const tabLabels = Object.keys(slots).map(key => key.replaceAll("-", " "));

function getTabId(label) {
  return `tab-pane-${props.group}-${label}`.replaceAll(" ", "-").toLowerCase();
}

function getTabIndex(label) {
  return tabLabels.indexOf(label);
}

function getButtonId(label) {
  return `tab-btn-${props.group}-${getTabId(label)}`;
}

function getActiveButtonClass(label) {
  const index = getTabIndex(label);
  return index === 0 ? "active" : "";
}

function getTabPaneClasses(label) {
  const index = getTabIndex(label);
  return `tab-pane-${props.navStyle} ` + (index === 0 ? "show active" : "");
}

function getIcon(label) {
  const index = getTabIndex(label);
  return props.icons[index];
}
</script>

<style scoped lang="scss">

button.active {
  color: dimgray !important;
  font-weight: 700;
}

button i {
  margin-right: 6px;
}

.tab-content {
  display: flex;
}

.tab-pane {
  border: 1px solid lightgray;
  border-radius: 0.375em;
  display: block;
  margin-right: -100%;
  padding: 10px;
  padding-top: 15px;
  visibility: hidden;
  width: 100%;
}

.nav-tabs {
  border-bottom: none;
}

.tab-pane-tabs {
  border-top-left-radius: 0 !important;
}

.tab-pane.active {
  visibility: visible;
}

ul {
  border-bottom-right-radius: 0.375em;
}

</style>
