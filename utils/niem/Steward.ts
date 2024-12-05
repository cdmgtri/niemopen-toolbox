import type { BreadcrumbItem } from "@nuxt/ui";
import { Entity, type InfoItem } from "./Entity"
import { Model } from "./Model";

export class Steward extends Entity {

  static readonly NIEMStewardKey = "niem";

  static override id(stewardKey: string | undefined) {
    return stewardKey || "";
  }

  static override params(steward: StewardType): StewardParams {
    return {
      stewardKey: steward.stewardKey
    }
  }

  static override path(params: StewardParams) {
    return `/browse/${params.stewardKey}`;
  }

  static override route(params?: StewardParams ) {
    let route = Config.baseURL + "stewards";
    if (params) {
      route += `/${params.stewardKey}`;
    }
    return route;
  }

  static override breadcrumbs(params: StewardParams): BreadcrumbItem[] {
    return [
      {
        to: "/",
        label: "Home"
      },
      {
        to: "/browse",
        label: "Browse"
      },
      {
        label: params.stewardKey
      }
    ]
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

  static async stewards() {
    let response = await fetch(Steward.route());
    if (response.ok) {
      return await response.json() as StewardType[];
    }
    return [];
  }

  static async steward(stewardParams: StewardParams) {
    let response = await fetch(Steward.route(stewardParams));
    if (response.ok) {
      return await response.json() as StewardType;
    }
  }

  static async models(stewardParams: StewardParams) {
    let response = await fetch(Model.route(stewardParams));
    if (response.ok) {
      return await response.json() as ModelType[];
    }
    return [];
  }

}
