import { Model } from "./niem/Model";
import { Steward } from "./niem/Steward";
import { Version } from "./niem/Version";

export class Data {

  static async stewards() {
    let response = await fetch(Steward.route());
    if (response.ok) {
      return await response.json() as StewardType[];
    }
    return [];
  }

  static async steward(params: StewardParams) {
    let response = await fetch(Steward.route(params));
    if (response.ok) {
      return await response.json() as StewardType;
    }
  }

  static async models(params: StewardParams) {
    let response = await fetch(Model.route(params));
    if (response.ok) {
      return await response.json() as ModelType[];
    }
    return [];
  }

  static async model(params: ModelParams) {
    let response = await fetch(Model.route(params));
    if (response.ok) {
      return await response.json() as ModelType;
    }
  }

  static async versions(params: ModelParams) {
    let response = await fetch(Version.route(params));
    if (response.ok) {
      return await response.json() as VersionType[];
    }
    return [];
  }

  static async version(params: VersionParams) {
    let response = await fetch(Version.route(params));
    if (response.ok) {
      return await response.json() as VersionType;
    }
  }

}