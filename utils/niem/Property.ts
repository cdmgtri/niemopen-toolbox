import { Component } from "./Component";
import { Type } from "./Type";
import { Version } from "./Version";

export type PropertyCategory = "object" | "data" | "abstract" | "attribute" | undefined;

export type PropertyDataPattern = "text" | "number" | "id" | "date" | "value" | undefined;

export type PropertyObjectPattern = "object" | "association" | "adapter" | "augmentation" | undefined;

export type PropertyPattern = PropertyDataPattern | PropertyObjectPattern;



export class Property extends Component {

  static readonly PROPERTY_DATA_REPRESENTATION_TERMS = ["Amount", "BinaryObject", "Graphic", "Picture", "Sound", "Video", "Code", "DateTime", "Date", "Time", "Duration", "ID", "URI", "Indicator", "Measure", "Numeric", "Value", "Rate", "Percent", "Quantity", "Text", "Name", "List"];

  alias = "";

  category: PropertyCategory | undefined;

  exampleContent = "";

  groupID = "";

  get isAttribute() {
    return this.category == "attribute";
  }

  isDeprecated = false;

  get isElement() {
    return this.category != "attribute";
  }

  keywords = "";

  pattern: PropertyPattern | undefined;

  usageInfo = "";

  typeID = "";

  constructor(version: Version, qname: string, definition?: string) {
    super(version, qname, definition);
  }

  static override route(versionID: string, qname: string) {
    return `${Version.route(versionID)}/properties/${qname}`;
  }

  toCMF() {
    // TODO: Implement toCMF()
    throw new Error("Method not yet implemented");
  }

  static override fromCMF() {
    // TODO: Implement fromCMF()
    throw new Error("Method not yet implemented");
  }

  static override fromAPI(version: Version, data: APIPropertyFull): Property {
    let property = new Property(version, data.qname, data.definition);

    property.alias = data.alias;
    property.category = Property.categoryFromAPI(data.category, data.type?.category);
    property.definition = data.definition;
    property.exampleContent = data.exampleContent;
    property.isDeprecated = data.isDeprecated;
    property.keywords = data.keywords;
    property.usageInfo = data.usageInfo;

    property.groupID = data.group ? Property.id(version.id, data.group.qname) : "";

    property.typeID = data.type ? Type.id(version.id, data.type.qname) : "";

    return property;
  }

  private static categoryFromAPI(apiPropertyCategory: APIPropertyCategory, apiTypeCategory?: APITypeCategory): PropertyCategory {
    switch (apiPropertyCategory) {
      case "abstract_element":
        return "abstract";
      case "attribute":
        return "attribute";
      case "element":
        switch (apiTypeCategory) {
          case "complex_object":
            return "object";
          case "complex_value":
          case "simple_value":
            return "data";
        }
    }
    return undefined;
  }

  get categoryOptions() {
    switch (this.category) {
      case "abstract":
        return Property.loadCategoryOptions("abstract", "error", undefined, "abstract_element", "abstract");

      case "attribute":
        return Property.loadCategoryOptions("attribute", "warning", undefined, "attribute", "data property");

      case "data":
        return Property.loadCategoryOptions("data", "info", undefined, "element", "data property");

      case "object":
        return Property.loadCategoryOptions("object", "success", undefined, "element", "object");
    }
  }

  private static loadCategoryOptions(label: string, color: string, icon?: string, apiValue?: APIPropertyCategory, cmfValue ?: string) {
    return { label, color, icon, apiValue, cmfValue };
  }

}
