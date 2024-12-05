
declare global {

  type StewardParams = {
    stewardKey: string
  }

  type ModelParams = StewardParams & {
    modelKey: string
  }

  type VersionParams = ModelParams & {
    versionNumber: string
  }

  type NamespaceParams = VersionParams & {
    prefix: string
  }

  type ComponentParams = VersionParams & {
    qname: string,
    prefix?: string,
    name?: string
  }

  type EntityType = {
    "@id": string,
    "@type": string,
    localIdentifier: string,
    route: string,
    title: string
  }

  type EntityRef = {
    route?: string
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
    shortName?: string
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

  type ModelRef = EntityRef & {
    modelKey: string,
    shortName?: string
  }

  type VersionCategoryType = "major" | "minor" | "patch" | "core_supplement" | "domain_update" | "other" | undefined;


  type VersionRef = EntityRef & {
    versionNumber: string,
    niemVersionNumber?: string
  }

  type VersionType = EntityType & {
    "@type": "Version";
    category: VersionCategoryType;
    conformanceTargets: string;
    draft: string;
    exchangePartners: string;
    exchangePattern: string;
    isCurrent: boolean;
    isPublished: boolean;
    model: ModelRef;
    niemVersionNumber: string;
    revised: string;
    status: string;
    steward: StewardRef;
    uri: string;
    versionNumber: string;
  }

  type NamespaceCategory = "core" | "domain" | "code" | "adapter" | "auxiliary" | "external" | "utility" | "core_supplement" | "domain_update" | "extension" | "exchange" | "built_in" | "other" | undefined;

  type NamespaceRef = EntityRef & {
    prefix: string,
    name?: string,
    category?: NamespaceCategory,
    uri?: string
  }

  type NamespaceType = EntityType & {
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
    isOriginal: boolean,
    isDeprecated: boolean,
    hasTarget: boolean, // TODO and ?
    version: VersionRef,
    model: ModelRef,
    steward: StewardRef
  }

  type ComponentRef = {
    route: string,
    prefix: string,
    qname: string,
    name: string,
    definition: string,
    category: PropertyCategory | TypeCategory
  }

  type ComponentType = EntityType & {
    prefix: string,
    qname: string,
    name: string,
    definition: string,
    category: PropertyCategory | TypeCategory,
    terms: string[],
    isOriginal: boolean,
    isDeprecated: boolean,
    namespace: NamespaceRef,
    version: VersionRef,
    model: ModelRef,
    steward: StewardRef
  }

  type PropertyCategory = "element" | "abstract_element" | "attribute";

  type PropertyRef = ComponentRef & {
    category: PropertyCategory
  }

  type PropertyType = ComponentType & {
    "@type": "Property",
    category: PropertyCategory
    alias: string,
    keywords: string,
    exampleContent: string,
    usageInfo: string,
    type?: TypeRef,
    group?: PropertyRef
  }

  type TypeCategory = "complex_object" | "complex_value" | "simple_value" | undefined;

  type TypeDerivation = "extension" | "restriction" | undefined;

  type TypePattern = "object" | "adapter" | "association" | "augmentation" | "metadata" | "complex_value" | "simple_value" | "simple_list" | "simple_union" | undefined;

  type TypeRef = ComponentRef & {
    category: TypeCategory
  }

  type TypeType = ComponentType & {
    "@type": "Type",
    category: TypeCategory,
    derivation: TypeDerivation,
    pattern: TypePattern,
    isSimple: boolean,
    isComplexContent: boolean,
    isSimpleContent: boolean,
    base?: TypeRef | null,
  }

}

export {};
