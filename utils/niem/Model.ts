import { Item } from "./Item";
import { Steward } from "./Steward";

export type ModelCategory = "reference" | "message" | "other" | undefined;

export class Model extends Item {

  category: ModelCategory;

  description = "";

  developer = "";

  fullName = "";

  keywords = "";

  get localID() {
    return this.modelKey;
  }

  _modelKey = "";

  get modelKey() {
    return this._modelKey;
  }

  objective = "";

  purpose = "";

  repo = "";

  _shortName = "";

  get shortName() {
    return this._shortName;
  }

  set shortName(value) {
    this._shortName = value;
    this._modelKey = slugify(value);
    this.id = Model.id(this.stewardID, this._modelKey);
  }

  stewardID = "";

  subjects = "";

  title = "";

  website = "";

  static readonly NIEMModelKey = "model";
  static readonly NIEMModelID = Model.id(Steward.NIEMStewardKey, this.NIEMModelKey);

  steward: Steward | undefined;

  title2() {
    return `[${this.steward?.shortName}] ${this.shortName}`;
  }

  constructor(steward: Steward, shortName: string, category?: ModelCategory, ) {
    super();
    this.stewardID = steward.id;
    this.shortName = shortName;
    this.category = category;
    this.title = `[${steward.shortName}] ${this.shortName}`;
    this.steward = steward;
  }

  static override id(stewardID: string, modelKey: string) {
    return `${stewardID}/${modelKey}`;
  }

  static override route(stewardKey: string, modelKey: string) {
    return `${Steward.route(stewardKey)}/models/${modelKey}`;
  }

}
