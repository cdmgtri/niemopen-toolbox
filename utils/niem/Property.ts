import { Component } from "./Component";
import { Entity } from "./Entity";
import { Version } from "./Version";

export type PropertyBaseCategory = "object" | "data" | "abstract" | "attribute";

export type PropertyDataPattern = "text" | "number" | "id" | "date" | "value";

export type PropertyObjectPattern = "object" | "association" | "adapter" | "augmentation";

export type PropertyPattern = PropertyDataPattern | PropertyObjectPattern;


export class Property extends Component {

  static readonly PROPERTY_DATA_REPRESENTATION_TERMS = ["Amount", "BinaryObject", "Graphic", "Picture", "Sound", "Video", "Code", "DateTime", "Date", "Time", "Duration", "ID", "URI", "Indicator", "Measure", "Numeric", "Value", "Rate", "Percent", "Quantity", "Text", "Name", "List"];

  static override route(params: NamespaceParams | ComponentParams) {
    let route = Version.route(params);
    if ("qname" in params) {
      route += `/properties/${ params.qname }`;
    }
    else {
      route += `/namespaces/${ params.prefix }/properties`;
    }
    return route;
  }

  static override infoItems(property: PropertyType) {
    let items = Component.infoItems(property);

    Entity.addInfoItem(items, "Type", property.type?.qname);
    Entity.addInfoItem(items, "Group", property.group?.qname);
    Entity.addInfoItem(items, "Alias", property.alias);
    Entity.addInfoItem(items, "Keywords", property.keywords);
    Entity.addInfoItem(items, "Example content", property.exampleContent);
    Entity.addInfoItem(items, "Usage info", property.usageInfo);

    return items;
  }

  static async property(propertyParams: ComponentParams) {
    let response = await fetch(Property.route(propertyParams));
    if (response.ok) {
      return await response.json() as PropertyType;
    }
  }

  private static categoryFromAPI(apiPropertyCategory: PropertyCategory, apiTypeCategory?: TypeCategory): PropertyBaseCategory | undefined {
    switch (apiPropertyCategory) {
      case "abstract_element": return "abstract";

      case "attribute": return "attribute";

      case "element":
        switch (apiTypeCategory) {
          case "complex_object": return "object";

          case "complex_value":
          case "simple_value":
            return "data";
        }
    }
  }

  static categoryOptions(category: PropertyBaseCategory) {
    switch (category) {
      case "abstract":
        return Property.loadCategoryOptions("abstract", "neutral", undefined, "abstract_element", "abstract");

      case "attribute":
        return Property.loadCategoryOptions("attribute", "warning", undefined, "attribute", "data property");

      case "data":
        return Property.loadCategoryOptions("data", "info", undefined, "element", "data property");

      case "object":
        return Property.loadCategoryOptions("object", "success", undefined, "element", "object");
    }
  }

  private static loadCategoryOptions(label: string, color: string, icon?: string, apiValue?: PropertyCategory, cmfValue ?: string) {
    return { label, color, icon, apiValue, cmfValue };
  }

}
