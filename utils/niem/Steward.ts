import { Entity, type InfoItem } from "./Entity"

export class Steward extends Entity {

  static readonly NIEMStewardKey = "niem";

  static override id(stewardKey: string | undefined) {
    return stewardKey || "";
  }

  static override route(params?: StewardParams) {
    let base = Config.baseURL + "stewards";
    if (params) {
      return `${ base }/${ params.stewardKey }`
    }
    return base;
  }

  static override infoItems(steward: StewardType) {
    let items: InfoItem[] = [];

    let unit = steward.unit + (steward.unit && steward.subunit ? " | " : "") + steward.subunit;

    Entity.addInfoItem(items, "Full name", steward.fullName);
    Entity.addInfoItem(items, "Unit", unit);
    Entity.addInfoItem(items, "Description", steward.description);
    Entity.addInfoItem(items, "Category", steward.category);
    Entity.addInfoItem(items, "Contact", steward.contactName);
    Entity.addInfoItem(items, "Address", steward.address);
    Entity.addInfoItem(items, "Country", steward.country);
    Entity.addInfoItem(items, "Website", steward.website, "link");
    Entity.addInfoItem(items, "Email", steward.email, "email");
    Entity.addInfoItem(items, "Phone", steward.phone);

    return items;
  }

}
