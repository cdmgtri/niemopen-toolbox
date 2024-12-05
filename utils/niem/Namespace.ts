import type { BreadcrumbItem } from "@nuxt/ui";
import { Entity, type InfoItem } from "./Entity";
import { Version } from "./Version";
import { Property } from "./Property";
import { Type } from "./Type";

export class Namespace extends Entity {

  static override id(versionID: string, prefix: string) {
    return `${versionID}/${prefix}`;
  }

  static override params(namespace: NamespaceType): NamespaceParams {
    return {
      stewardKey: namespace.steward.stewardKey,
      modelKey: namespace.model.modelKey,
      versionNumber: namespace.version.versionNumber,
      prefix: namespace.prefix
    }
  }

  static override path(params: NamespaceParams) {
    return Version.path(params) + "/" + params.prefix;
  }

  static override route(params: VersionParams | NamespaceParams) {
    let route = Version.route(params) + "/namespaces";
    if ("prefix" in params) {
      route += "/" + params.prefix;
    }
    return route;
  }

  static override breadcrumbs(params: NamespaceParams): BreadcrumbItem[] {
    let breadcrumbs = Version.breadcrumbs(params).slice(0, -1);
    breadcrumbs.push(...[
      {
        to: Version.path(params),
        label: params.versionNumber
      },
      {
        label: params.prefix
      }
    ])
    return breadcrumbs;
  }

  static override infoItems(namespace: NamespaceType) {
    let items: InfoItem[] = [];

    Entity.addInfoItem(items, "Prefix", namespace.prefix);
    Entity.addInfoItem(items, "Name", namespace.name);
    Entity.addInfoItem(items, "URI", namespace.uri, "link");
    Entity.addInfoItem(items, "Definition", namespace.definition);
    Entity.addInfoItem(items, "Category", namespace.category);
    Entity.addInfoItem(items, "Draft", namespace.draft);
    Entity.addInfoItem(items, "Target", namespace.target);
    Entity.addInfoItem(items, "Generation", namespace.generation);
    Entity.addInfoItem(items, "Filename", namespace.filename);
    Entity.addInfoItem(items, "Filepath", namespace.filepath);
    Entity.addInfoItem(items, "Conformance target", namespace.conformanceTarget, "link");
    Entity.addInfoItem(items, "Deprecated?", namespace.isDeprecated + "");

    return items;
  }

  static async namespace(namespaceParams: NamespaceParams) {
    let response = await fetch(Namespace.route(namespaceParams));
    if (response.ok) {
      return await response.json() as NamespaceType;
    }
  }

  static async properties(namespaceParams: NamespaceParams) {
    let response = await fetch(Property.route(namespaceParams));
    if (response.ok) {
      return await response.json() as PropertyType[];
    }
    return [];
  }

  static async types(namespaceParams: NamespaceParams) {
    let response = await fetch(Type.route(namespaceParams));
    if (response.ok) {
      return await response.json() as TypeType[];
    }
    return [];
  }

}
