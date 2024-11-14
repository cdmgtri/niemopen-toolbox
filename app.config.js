
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
    // TODO: Formatting didn't pick up
    button: {
      slots: {
        base: "bg-[var(--color-niem)]"
      }
    },
    formField: {
      slots: {
        help: "mt-1 font-light"
      }
    },
    icons: {
      // dynamic: true
    },
    input: {
      slots: {
        base: "file:font-normal",
        trailing: "text-xs font-medium text-gray-400"
      }
    }
  }
});
