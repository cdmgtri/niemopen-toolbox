import type { LinkProps, SelectItem } from "@nuxt/ui";

declare global {

  type IconKeyType = keyof typeof icons;
  type IconType = typeof icons[IconKeyType];

  type AppLinkType = LinkProps & {
    // TODO: Unresolved link value types
    value?: "brand" | "home" | ToolType | SiteSettingsType | ReferenceType,
    label?: string,
    description?: string,
    icon?: IconType
  }

  type DemoFileItemType = SelectItem & {
    from?: FromType,
    path?: string
  }

  type ColorType = "success" | "error" | "warning" | "info" | "neutral" | "primary" | "secondary";

}

export {}
