
export default {

  button_default: {
    base: "bg-[var(--color-niem)] hover:bg-[var(--color-niem)] hover:font-semibold"
  },

  button_icon: "bg-transparent text-gray-500",

  button_invisible: {
    base: "bg-transparent"
  },

  /**
   * Input file in a manual button group
   */
  inputFileInGroup: {
    base: 'rounded-r-none w-[600px]'
  },

  /**
   * Input mode select box
   */
  inputMode: {
    base: `w-[125px] font-medium text-[var(--ui-text)] capitalize visible rounded-s-none focus-visible:ring-[var(--ui-primary)]`,
    item: 'capitalize'
  }

}
