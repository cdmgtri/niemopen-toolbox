
export default defineAppConfig({
  ui: {
    colors: {
      primary: "--color-niem",
      secondary: "--color-niem-secondary",
      success: "emerald",
      info: "cyan",
      error: "red",
      neutral: "zinc"
    },
    formField: {
      slots: {
        help: "mt-1 font-light"
      }
    },
    input: {
      slots: {
        base: "file:font-normal",
        trailing: "text-xs font-medium text-gray-400"
      }
    }
  }
});
