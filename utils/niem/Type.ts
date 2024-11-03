import { Component } from "./Component";

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

  override category: TypeCategory | "" = "";
  override pattern: Pattern | "" = "";

}
