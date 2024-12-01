
export class ToolboxApp {

  static slugify(value: string) {
    // TODO: Match how API performs slugify
    return value.trim().toLowerCase().replaceAll(" ", "-");
  }

  static extension(filename: string | undefined) {
    // Special cases
    if (!filename) return undefined;

    // Default
    return filename?.split(".")?.pop();
  }

}
