import { VersionedItem } from "./Item";
import { Version } from "./Version";

export type NamespaceCategory = "core" | "domain" | "code" | "adapter" | "auxiliary" | "external" | "utility" | "core_supplement" | "domain_update" | "extension" | "exchange" | "built_in" | "other" | undefined;

export class Namespace extends VersionedItem {

  category: NamespaceCategory;

  conformanceTargets = "";

  definition = "";

  draft = "";

  filename = "";

  filepath = "";

  generation: "build" | "static_file" | "none" = "build";

  get localID() {
    return this.prefix;
  }

  name = "";

  _prefix = "";

  get prefix() {
    return this.prefix;
  }

  set prefix(value: string) {
    this._prefix = value;
    this.id = Namespace.id(this.versionID, value);
  }

  target: "REF" | "EXT" | undefined;

  uri = "";

  static override id(versionID: string, prefix: string) {
    return `${versionID}/${prefix}`;
  }

  static override route(versionID: string, prefix: string) {
    return `${Version.route(versionID)}/namespaces/${prefix}`;
  }

  override toCMF() {
    // TODO: Implement toCMF()
    throw new Error("Method not yet implemented");
  }

  static override fromCMF() {
    // TODO: Implement toCMF()
    throw new Error("Method not yet implemented");
  }

  static override fromAPI(): void {
    // TODO: Implement fromAPI()
    throw new Error("Method not yet implemented");
  }

}
