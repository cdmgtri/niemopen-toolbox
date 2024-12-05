
export default defineAppConfig({
  ui: {
    accordion: {
      slots: {
        trailingIcon: "-rotate-90 group-data-[state=open]:rotate-0 duration-400 data-[disabled]:invisible"
      }
    },
    breadcrumb: {
      variants: {
        active: {
          true: {
            link: "text-[var(--ui-text)] font-medium"
          }
        }
      }
    },
    button: {
      slots: {
        base: ["hover:bg-[var(--ui-primary)] cursor-pointer disabled:cursor-auto", "transition"]
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class: "hover:bg-[var(--ui-primary)]"
        }
      ]
    },
    colors: {
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
        base: ["file:font-normal"],
        // trailing: "text-xs font-medium text-gray-400"
      }
    },
    select: {
      slots: {
        base: ["cursor-pointer"]
      }
    },
    tabs: {
      slots: {
        content: "pl-4"
      }
    }
  }
});
