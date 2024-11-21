
declare namespace NIEMTypes {

  type StewardRef = {
    route: string,
    stewardKey: string,
    shortName: string
  }

  type ModelRef = {
    route: string,
    modelKey: string,
    shortName: string
  }

  type VersionCategoryType = "major" | "minor" | "patch" | "core_supplement" | "domain_update" | "other" | undefined;


  type VersionRef = {
    route: string,
    versionNumber: string,
    niemVersionNumber: string
  }

  type VersionFull = {
    "@id": string;
    "@type": string;
    category: VersionCategoryType;
    conformanceTargets: string;
    draft: string;
    exchangePartners: string;
    exchangePattern: string;
    isCurrent: boolean;
    isPublished: boolean;
    localIdentifier: string;
    model: ModelRef;
    niemVersionNumber: string;
    revised: string;
    route: string;
    status: string;
    steward: StewardRef;
    title: string;
    uri: string;
    versionNumber: string;
  }

  type NamespaceCategory = "core" | "domain" | "code" | "adapter" | "auxiliary" | "external" | "utility" | "core_supplement" | "domain_update" | "extension" | "exchange" | "built_in" | "other" | undefined;

  type NamespaceRef = {
    prefix: string,
    name: string,
    category: string, // TODO
    uri: string
  }

  type NamespaceFull = {
    "@id": string,
    "@type": "Namespace",
    prefix: string,
    name: string,
    uri: string,
    definition: string,
    category: NamespaceCategory,
    draft: string,
    target: "REF" | "EXT",
    generation: "build" | "static_file" | "none"
    filename: string,
    filepath: string,
    conformanceTarget: string,
    route: string,
    title: string,
    localIdentifier: string,
    isOriginal: boolean,
    isDeprecated: boolean,
    hasTarget: boolean, // TODO and ?
    version: VersionRef,
    model: ModelRef,
    steward: StewardRef
  }

  type PropertyCategory = "element" | "abstract_element" | "attribute";

  type PropertyRef = {
    route: string,
    prefix: string,
    qname: string,
    name: string,
    definition: string,
    category: PropertyCategory
  }

  type PropertyFull = {
    "@id": string,
    "@type": "Property",
    prefix: string,
    qname: string,
    name: string,
    definition: string,
    category: PropertyCategory
    alias: string,
    keywords: string,
    exampleContent: string,
    usageInfo: string,
    route: string,
    title: string,
    localIdentifier: string,
    terms: string[],
    isOriginal: boolean,
    isDeprecated: boolean,
    type?: TypeRef,
    group?: PropertyRef
    namespace: NamespaceRef,
    version: VersionRef,
    model: ModelRef,
    steward: StewardRef
  }

  type TypeCategory = "complex_object" | "complex_value" | "simple_value" | undefined;

  type TypeDerivation = "extension" | "restriction" | undefined;

  type TypePattern = "object" | "adapter" | "association" | "augmentation" | "metadata" | "complex_value" | "simple_value" | "simple_list" | "simple_union" | undefined;

  type TypeRef = {
    route: string,
    prefix: string,
    qname: string,
    name: string,
    definition: string,
    category: TypeCategory
  }

  type Type = {
    "@id": string,
    "@type": "Type",
    prefix: string,
    qname: string,
    name: string,
    definition: string,
    category: TypeCategory,
    derivation: TypeDerivation,
    pattern: TypePattern,
    route: string,
    title: string,
    localIdentifier: string,
    terms: string[],
    isOriginal: boolean,
    isDeprecated: boolean,
    isSimple: boolean,
    isComplexContent: boolean,
    isSimpleContent: boolean,
    base: TypeRef,
    namespace: NamespaceRef,
    version: VersionRef,
    model: ModelRef,
    steward: StewardRef
  }

}