import type { BreadcrumbItem } from "@nuxt/ui";
import { Entity, type InfoItem } from "./Entity";
import { Steward } from "./Steward";
import { Version } from "./Version";

export class Model extends Entity {

  static readonly NIEMModelKey = "model";
  static readonly NIEMModelID = Model.id(Steward.NIEMStewardKey, this.NIEMModelKey);

  static override id(stewardID: string, modelKey: string) {
    return `${stewardID}/${modelKey}`;
  }

  static override params(model: ModelType): ModelParams {
    return {
      stewardKey: model.steward.stewardKey,
      modelKey: model.modelKey
    }
  }

  static override path(params: ModelParams) {
    return Steward.path(params) + "/" + params.modelKey;
  }

  static override route(params: StewardParams | ModelParams) {
    let route = Steward.route(params) + "/models";
    if ("modelKey" in params) {
      route += `/${params.modelKey}`;
    }
    return route;
  }

  static override breadcrumbs(params: ModelParams): BreadcrumbItem[] {
    let breadcrumbs = Steward.breadcrumbs(params).slice(0, -1);
    breadcrumbs.push(...[
      {
        to: Steward.path(params),
        label: params.stewardKey
      },
      {
        label: params.modelKey
       }
    ]);
    return breadcrumbs;
  }

  static override infoItems(model: ModelType) {
    let items: InfoItem[] = [];

    Entity.addInfoItem(items, "Full name", model.fullName);
    Entity.addInfoItem(items, "Description", model.description);
    Entity.addInfoItem(items, "Category", model.category);
    Entity.addInfoItem(items, "Website", model.website, "link");
    Entity.addInfoItem(items, "Repo", model.repo, "link");
    Entity.addInfoItem(items, "Developer", model.developer);
    Entity.addInfoItem(items, "Keywords", model.keywords);
    Entity.addInfoItem(items, "Objective", model.objective);
    Entity.addInfoItem(items, "Purpose", model.purpose);
    Entity.addInfoItem(items, "Subjects", model.subjects);

    return items;
  }

  static async models() {
    let response = await fetch(Model.route({stewardKey: "*"}));
    if (response.ok) {
      return await response.json() as ModelType[];
    }
    return [];
  }

  static async model(modelParams: ModelParams) {
    let response = await fetch(Model.route(modelParams));
    if (response.ok) {
      return await response.json() as ModelType;
    }
  }

  static async versions(modelParams: ModelParams) {
    let response = await fetch(Version.route(modelParams));
    if (response.ok) {
      return await response.json() as VersionType[];
    }
    return [];
  }

}
