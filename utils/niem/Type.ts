import { Component } from "./Component";
import { Entity } from "./Entity";
import { Version } from "./Version";

export enum TypeCategory {
  class,
  primitive_datatype,
  structured_datatype
}

export enum ClassPattern {
  class,
  association,
  augmentation,
  adapter
}

export enum StructuredDatatypePattern {
  structured_datatype
}

export enum DatatypePattern {
  atomic,
  list,
  union
}

export const Pattern = {
  ...ClassPattern,
  ...StructuredDatatypePattern,
  ...DatatypePattern
}

type Pattern = ClassPattern | StructuredDatatypePattern | DatatypePattern;

export class Type extends Component {

  static override route(params: NamespaceParams | ComponentParams) {
    let route = Version.route(params);
    if ("qname" in params) {
      route += `/types/${params.qname}`;
    }
    else {
      route += `/namespaces/${params.prefix}/types`;
    }
    return route;
  }

  static override infoItems(type: TypeType) {
    let items = Component.infoItems(type);

    Entity.addInfoItem(items, "Base", type.base?.qname);
    Entity.addInfoItem(items, "Derivation", type.derivation);
    Entity.addInfoItem(items, "Pattern", type.pattern);

    return items;
  }

  static async type(typeParams: ComponentParams) {
    let response = await fetch(Type.route(typeParams));
    if (response.ok) {
      return await response.json() as TypeType;
    }
  }

}
