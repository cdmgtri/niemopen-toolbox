import type { BreadcrumbItem } from "@nuxt/ui";
import { Entity, VersionedItem, type InfoItem } from "./Entity";
import { Version } from "./Version";
import { Namespace } from "./Namespace";

export abstract class Component extends Entity {

  static override id(versionID: string, qname: string) {
    return `${versionID}/${qname}`;
  }

  static override params(component: PropertyType | TypeType): ComponentParams {
    return {
      stewardKey: component.steward.stewardKey,
      modelKey: component.model.modelKey,
      versionNumber: component.version.versionNumber,
      qname: component.qname
    }
  }

  static override path(params: ComponentParams) {
    return Version.path(params) + "/" + params.qname;
  }

  static override breadcrumbs(params: ComponentParams): BreadcrumbItem[] {
    params.prefix = params.qname.split(":")[0];
    params.name = params.qname.split(":")[1];

    let breadcrumbs = Namespace.breadcrumbs(params as NamespaceParams).slice(0, -1);
    breadcrumbs.push(...[
      {
        to: Namespace.path(params as NamespaceParams),
        label: params.prefix
      },
      {
        label: params.name
      }
    ]);
    return breadcrumbs;
  }

  static override infoItems(component: ComponentType): InfoItem[] {
    let items: InfoItem[] = [];

    Entity.addInfoItem(items, "QName", component.qname);
    Entity.addInfoItem(items, "Definition", component.definition);
    Entity.addInfoItem(items, "Category", component.category);
    Entity.addInfoItem(items, "Terms", component.terms.join(", "));
    Entity.addInfoItem(items, "Deprecated?", component.isDeprecated + "");

    return items;
  }

  static terms(qname: string) {
    return qname

      // Replace dashes and underscores with spaces
      .replaceAll("_", " ")
      .replaceAll("-", " ")

      // Add a space after any non-digit that precedes a digit
      .replace(/(\D+)(\d+)/g, "$1 $2")

      // Add a space before an upper case letter following a lower case letter
      .replace(/([a-z]+)([A-Z]+)/g, " ")

      .split(" ");
  }

}
