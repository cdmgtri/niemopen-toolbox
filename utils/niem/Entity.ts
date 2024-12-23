import { type BreadcrumbItem } from "@nuxt/ui";
import type { Serializer } from "@vueuse/core";

export type EntityTypeCode = "Steward" | "Model" | "Version" | "Namespace" | "Property" | "Type" | "ChildProperty" | "Facet" | "LocalTerm";

export abstract class Entity {

  /**
   * ID of item, unique across models and versions.
   */
  "@id"?: string;

  "@type"?: EntityTypeCode;

  category?: any;

  localIdentifier?: string;

  route?: string;

  title?: string;

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
   * True to disable opening the entity as an accordion item; false
   * to allow it to be opened.
   */
  disabled = false;

  private get childConstructor() {
    return this.constructor as typeof Entity;
  }

  get apiRoute() {
    return this.childConstructor.apiRoute(this.params);
  }

  get badgeVariant(): ColorVariantType | undefined {
    return "subtle";
  }

  get breadcrumbs() {
    return this.childConstructor.breadcrumbs(this.params);
  }

  /**
   * Getter for `@id`
   */
  get id() {
    return this["@id"];
  }

  get labelQualifier(): string | undefined {
    return undefined;
  }

  get params() {
    return this.childConstructor.params(this.toAPI());
  }

  get to() {
    return this.childConstructor.toolboxRoute(this.params);
  }

  get toolboxRoute(): string {
    return this.childConstructor.toolboxRoute(this.params);
  }

  abstract get badgeLabel(): string | undefined;

  abstract get badgeColor(): ColorType | undefined;

  abstract get documentation() : string | undefined;

  abstract get icon(): IconType;

  abstract get infoItems(): InfoItem[];

  abstract get label(): string;

  abstract get page(): AppLinkType;

  abstract get tabsItems(): ToolboxTabsItem[];

  protected static addInfoItem(infoItems: InfoItem[], field: string, value: string | undefined, format?: InfoItemFormat, link?: string, badgeColor?: ColorType, badgeVariant?: ColorVariantType) {
    if (value) {
      infoItems.push({ field, value, format, link, badgeColor, badgeVariant });
    }
  }

  toAPI<T extends APIEntity>() {
    return Object.assign({} as T, this);
  }

  static badgeColor(arg: any): ColorType {
    return "neutral";
  }

  static badgeVariant(arg: any): ColorVariantType {
    return "subtle";
  }

  static fromAPI<T extends Entity>(entity: T, apiData: APIEntity) {
    return (Object.assign(entity, apiData)) as T;
  }

  static apiRoute(params: any): string {
    throw new Error("Method not implemented");
  }

  static breadcrumbs(params: any): BreadcrumbItem[] {
    throw new Error("Method not implemented");
  }

  static id(...args: any[]): string {
    throw new Error("Method not implemented");
  }

  static idFromParams(EntityClass: typeof Entity, params: any) {
    return EntityClass.toolboxRoute(params).replace("/browse/", "");
  }

  static init(): Entity {
    throw new Error("Method not implemented");
  }

  /**
   * @param apiEntity - API Entity or Entity ID
   */
  static params(apiEntity: APIEntity | string): Object {
    throw new Error("Method not implemented");
  }

  static serializeEntity<T extends Entity>(initializer: () => T): Serializer<T> {
    return {
      read: (raw: string) => Object.assign(initializer(), raw),
      write: (value: T) => JSON.stringify(value)
    }
  }

  static serializeEntityList<T extends Entity>(initializer: () => T): Serializer<T[]> {
    return {
      read: (raw: string) => {
        let objects = JSON.parse(raw) as T[];
        return objects.map(object => Object.assign(initializer(), object));
      },
      write: (value: T[]) => JSON.stringify(value)
    }
  }

  static toolboxRoute(params: any): string {
    throw new Error("Method not implemented");
  }

  static toRef(entity: Entity): Object {
    throw new Error("Method not implemented");
  }

  static toAPI(): APIEntity {
    throw new Error("Method not implemented");
  }

  static fromCMF() {
    throw new Error("Method not implemented");
  }

  static toCMF() {
    throw new Error("Method not implemented");
  }

  static sort(a: Entity, b:Entity): number {
    throw new Error("Method not implemented");
  }

}
