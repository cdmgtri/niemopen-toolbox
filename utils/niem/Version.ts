import { Entity, VersionedItem, type InfoItem } from "./Entity";
import { Model } from "./Model";

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

  static override route(params: ModelParams | VersionParams) {
    let base = `${ Model.route(params) }/versions`;
    if ("versionNumber" in params) {
      return `${ base }/${ params.versionNumber }`;
    }
    return base;
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

}
