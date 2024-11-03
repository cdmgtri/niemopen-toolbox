import type { Version } from "./Version";

export abstract class Item {

  /**
   * Edit mode of the item.
   *
   * - locked:   Reference item from the API or published local item that
   *             cannot be modified.
   * - subset:   Reference item from the API or published local item that
   *             can have subset operations applied.
   * - unlocked: Unpublished local item that can be modified.
   */
  editMode: "locked" | "subset" | "unlocked" = "locked";

  /**
   * True if the item should be expanded in the user interface; false
   * if it should be collapsed.
   */
  expand = false;

  /**
   * Number of times this item has been pulled from local storage.
   */
  hits = 0;

  /**
   * ID of item, unique across models and versions.
   */
  id = "";

  /**
   * ID of item that is unique only within its version or other scope.
   * @example - A prefix for a namespace.
   * @example - A qname for a component.
   */
  abstract get localID(): string;

  static id(...args: any[]): string {
    throw new Error("Method not implemented");
  }

  static route(...args: any[]): string {
    throw new Error("Method not implemented");
  }

}

export abstract class VersionedItem extends Item {

  modelID = "";

  /**
   * Version of NIEM which this item is coherent with.
   */
  niemVersionNumber = "";

  stewardID = "";

  versionID = "";

  constructor(version?: Version) {
    super();
    if (version) {
      this.stewardID = version.stewardID;
      this.modelID = version.modelID;
      this.versionID = version.id;
    }
  }

  abstract toCMF(): any;

  static fromCMF() {
    throw new Error("Method not implemented");
  }

  static fromAPI(...args: any[]): any {
    throw new Error("Method not implemented");
  }

}
