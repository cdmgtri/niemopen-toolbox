
export class ToolboxApp {

  static slugify(value: string) {
    // TODO: Match how API performs slugify
    return value.trim().toLowerCase().replaceAll(" ", "-");
  }

  static extension(filename: string | undefined) {
    // Special cases
    if (!filename) return undefined;
    if (filename.endsWith(".cmf.xml")) return "cmf.xml";
    if (filename.endsWith(".schema.json")) return "schema.json";

    // Default
    return filename?.split(".")?.pop();
  }

}
