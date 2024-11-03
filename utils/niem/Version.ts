import { VersionedItem } from "./Item";
import { Model } from "./Model";

export type VersionCategoryType = "major" | "minor" | "patch" | "core_supplement" | "domain_update" | "other" | undefined;


export class Version extends VersionedItem {

  category: VersionCategoryType;

  conformanceTargets = "";

  draft = "";

  exchangePartners = "";

  exchangePattern = "";

  isCurrent = false;

  isPublished = false;

  get localID() {
    return this.versionNumber;
  }

  revised = "";

  status = "";

  uri = "";

  _versionNumber = "";

  get versionNumber() {
    return this._versionNumber;
  }

  set versionNumber(value: string) {
    this._versionNumber = value;
    this.id = Version.id(this.modelID, value);
    this.versionID = this.id;
  }

  // Local fields

  /**
   * Rendering options for simplified NIEM message format schemas
   */
  simpleOptions = {
    inlineSubstitutions: false,
    flattenInheritance: false,
    flattenDatatypes: false,
    useAliases: false
  }

  constructor(model: Model, versionNumber: string, niemVersionNumber: string) {
    super();
    this.stewardID = model.stewardID;
    this.modelID = model.id;
    this.versionNumber = versionNumber;
    this.niemVersionNumber = niemVersionNumber;
  }

  static override id(modelID: string, versionNumber: string) {
    return `${modelID}/${versionNumber}`;
  }

  static override route(versionID: string) {
    let [stewardKey, modelKey, versionNumber] = versionID.split("/");
    return `${Model.route(stewardKey, modelKey)}/versions/${versionNumber}`;
  }

  toCMF() {
    // TODO: Implement toCMF()
  }

  static override fromCMF() {
    // TODO: Implement fromCMF()
  }

  static override fromAPI(model: Model, data: APIVersionFull): Version {
    let version = new Version(model, data.versionNumber, data.niemVersionNumber);

    version.category = data.category;
    version.conformanceTargets = data.conformanceTargets;
    version.draft = data.draft;
    version.exchangePartners = data.exchangePartners;
    version.exchangePattern = data.exchangePattern;
    version.isCurrent = data.isCurrent;
    version.isPublished = data.isPublished;
    version.revised = data.revised;
    version.status = data.status;
    version.uri = data.uri;

    return version;
  }

  static initDefaults(models: Model[], niemVersionNumber: string) {
    let versions: Version[] = [];

    for (let model of models) {
      versions.push(new Version(model, model?.selectedVersionID?.split("/")?.pop() || "", niemVersionNumber))  ;
    }

    return versions;
  }

}
