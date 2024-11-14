import { Item } from "./Item"

export type StewardCategory = "Federal" | "State" | "Local" | "Tribal" | "Territorial" | "International" | "Industry" | "Nonprofit" | "SDO" | "Educational" | "Person" | "Other" | undefined;

export class Steward extends Item {

  address = "";

  category: StewardCategory | undefined;

  contactName = "";

  country = "";

  description = "";

  email = "";

  fullName = "";

  get localID() {
    return this.stewardKey;
  }

  phone = "";

  _shortName = "";

  get shortName() {
    return this._shortName;
  }

  set shortName(value: string) {
    this._shortName = value;
    this.stewardKey = slugify(value);
    this.id = this.stewardKey;
  }

  stewardKey = "";

  subunit = "";

  title = "";

  unit = "";

  website = "";

  static readonly NIEMStewardKey = "niem";


  constructor(shortName: string) {
    super();
    this.shortName = shortName;
  }

  static override id(stewardKey: string | undefined) {
    return stewardKey || "";
  }

  static override route(stewardKey: string) {
    return `/stewards/${stewardKey}`;
  }

}
