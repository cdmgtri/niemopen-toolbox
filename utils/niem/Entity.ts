
export type InfoItemFormat = "link" | "email";

export type InfoItem = {
  field: string,
  value: string,
  format?: InfoItemFormat
}

export abstract class Entity {

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

  static id(...args: any[]): string {
    throw new Error("Method not implemented");
  }

  static route(...args: any[]): string {
    throw new Error("Method not implemented");
  }

  static infoItems(...args: any[]): InfoItem[] {
    throw new Error("Method not implemented");
  }

  static addInfoItem(infoItems: InfoItem[], field: string, value: string | undefined, format?: InfoItemFormat) {
    if (value) {
      infoItems.push({field, value, format});
    }
  }

}

export abstract class VersionedItem extends Entity {

  abstract toCMF(): any;

  static fromCMF() {
    throw new Error("Method not implemented");
  }

  static fromAPI(...args: any[]): any {
    throw new Error("Method not implemented");
  }

}
