import { Entity, VersionedItem, type InfoItem } from "./Entity";
import { Model } from "./Model";
import { Namespace } from "./Namespace";

export class Version extends Entity {

  // LATER: Simple NIEM rendering options
  /**
   * Rendering options for simplified NIEM message format schemas
   */
  simpleOptions = {
    inlineSubstitutions: false,
    flattenInheritance: false,
    flattenDatatypes: false,
    useAliases: false
  }

  static override id(modelID: string, versionNumber: string) {
    return `${modelID}/${versionNumber}`;
  }

  static override params(version: VersionType): VersionParams {
    return {
      stewardKey: version.steward.stewardKey,
      modelKey: version.model.modelKey,
      versionNumber: version.versionNumber
    }
  }

  static override path(params: VersionParams) {
    return Model.path(params) + "/" + params.versionNumber;
  }

  static override route(params: ModelParams | VersionParams) {
    let route = `${Model.route(params)}/versions`;
    if ("versionNumber" in params) {
      return `${route}/${params.versionNumber}`;
    }
    return route;
  }

  static override breadcrumbs(params: VersionParams) {
    let breadcrumbs = Model.breadcrumbs(params).slice(0, -1);
    breadcrumbs.push(...[
      {
        to: Model.path(params),
        label: params.modelKey
      },
      {
        label: params.versionNumber
      }
    ]);
    return breadcrumbs;
  }

  static override infoItems(version: VersionType) {
    let items: InfoItem[] = [];

    Entity.addInfoItem(items, "Version Number", version.versionNumber);

    Entity.addInfoItem(items, "Category", version.category);
    Entity.addInfoItem(items, "Conformance targets", version.conformanceTargets);
    Entity.addInfoItem(items, "Draft", version.draft);
    Entity.addInfoItem(items, "Exchange partners", version.exchangePartners);
    Entity.addInfoItem(items, "Exchange pattern", version.exchangePattern);
    Entity.addInfoItem(items, "Is current?", version.isCurrent + "");
    Entity.addInfoItem(items, "Is published?", version.isPublished + "");
    Entity.addInfoItem(items, "NIEM version number", version.niemVersionNumber);
    Entity.addInfoItem(items, "Revised date", version.revised);
    Entity.addInfoItem(items, "Status", version.status);
    Entity.addInfoItem(items, "URI", version.uri, "link");

    return items;
  }

  static async version(versionParams: VersionParams) {
    let response = await fetch(Version.route(versionParams));
    if (response.ok) {
      return await response.json() as VersionType;
    }
  }

  static async namespaces(versionParams: VersionParams) {
    let response = await fetch(Namespace.route(versionParams));
    if (response.ok) {
      return await response.json() as NamespaceType[];
    }
    return [];
  }

}
