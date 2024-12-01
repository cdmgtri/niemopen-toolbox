import { Entity, type InfoItem } from "./Entity";
import { Steward } from "./Steward";

export class Model extends Entity {

  static readonly NIEMModelKey = "model";
  static readonly NIEMModelID = Model.id(Steward.NIEMStewardKey, this.NIEMModelKey);

  static override id(stewardID: string, modelKey: string) {
    return `${stewardID}/${modelKey}`;
  }

  static override route(params: StewardParams | ModelParams) {
    if ("modelKey" in params) {
      return `${ Steward.route(params.steward) }/models/${ params.modelKey }`;
    }
    return `${ Steward.route(params) }/models`;
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

}
