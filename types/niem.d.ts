
declare global {

  type StewardParams = {
    stewardKey: string
  }

  type ModelParams = {
    steward: StewardRef,
    modelKey: string
  }

  type VersionParams = ModelParams & {
    steward: StewardRef,
    model: ModelRef,
    versionNumber: string
  }

  type EntityType = {
    "@id": string,
    "@type": string,
    localIdentifier: string,
    route: string,
    title: string
  }

  type EntityRef = {
    route: string
  }

  type StewardCategory = "Federal" | "State" | "Local" | "Tribal" | "Territorial" | "International" | "Industry" | "Nonprofit" | "SDO" | "Educational" | "Person" | "Other";

  type StewardType = EntityType & {
    "@type": "Steward",
    address?: string,
    category?: StewardCategory,
    contactName?: string,
    country?: string,
    description?: string,
    email?: string,
    fullName?: string,
    phone?: string,
    shortName: string,
    stewardKey: string,
    subunit: string,
    unit: string,
    website: string
  }

  type StewardRef = EntityRef & {
    stewardKey: string,
    shortName: string
  }


  type ModelCategory = "reference" | "message" | "other";

  type ModelType = EntityType & {
    "@type": "Model",
    category?: ModelCategory,
    description?: string,
    developer?: string,
    fullName?: string,
    keywords?: string,
    modelKey: string,
    objective?: string,
    purpose?: string,
    repo?: string,
    shortName: string,
    steward: StewardRef,
    subjects?: string,
    website?: string
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

  type VersionType = {
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

  type NamespaceType = {
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

  type Property = {
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

export {};
