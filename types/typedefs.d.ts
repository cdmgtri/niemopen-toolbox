import type { LinkProps } from "@nuxt/ui";
import type { PanelCategory } from "~/utils/app"

declare global {

  type IconKeyType = keyof typeof icons;
  type IconType = typeof icons[IconKeyType];

  type AppLinkType = LinkProps & {
    value: "brand" | "home" | ToolType | SiteSettingsType | ReferenceType,
    label: string,
    description?: string,
    icon: IconType
  }

  type ResultsCategory = "success" | "error" | "warning" | "info" | "pending" | "unsent";

  type APIErrorResponse = {
    timestamp: string,
    status: string,
    error: string,
    message: string,
    path: string
  }

  type APIResults = {
    status: "unsent" | "pending" | "returned",
    category: ResultsCategory,
    title?: string,
    message: string,
    time: string,
    filename?: string,
    error?: APIErrorResponse
  }

  type ValidationResults = {
    tests: ValidationTest[],
    comment: string,
    passed: number,
    errors: number,
    warnings: number,
    info: number
  }

  type ValidationSeverityType = "error" | "warning" | "info";
  type ValidationStatusType = "passed" | "error" | "warning";

  type ValidationTest = {
    status: ValidationStatusType,
    id: string,
    description: string,
    severity: ValidationSeverityType,
    category: string,
    comments: string,
    ran: boolean,
    runtime: number,
    results: ValidationTestResult[]
  }

  type ValidationTestResult = {
    testId: string,
    status: ValidationStatusType,
    entity: string,
    entityCategory: string,
    message: string,
    location: string,
    line: string,
    column: string
  }

  type APIStewardRef = {
    route: string,
    stewardKey: string,
    shortName: string
  }

  type APIModelRef = {
    route: string,
    modelKey: string,
    shortName: string
  }

  type APIVersionCategoryType = "major" | "minor" | "patch" | "core_supplement" | "domain_update" | "other" | undefined;


  type APIVersionRef = {
    route: string,
    versionNumber: string,
    niemVersionNumber: string
  }

  type APIVersionFull = {
    "@id": string;
    "@type": string;
    category: APIVersionCategoryType;
    conformanceTargets: string;
    draft: string;
    exchangePartners: string;
    exchangePattern: string;
    isCurrent: boolean;
    isPublished: boolean;
    localIdentifier: string;
    model: APIModelRef;
    niemVersionNumber: string;
    revised: string;
    route: string;
    status: string;
    steward: APIStewardRef;
    title: string;
    uri: string;
    versionNumber: string;
  }

  type APINamespaceCategory = "core" | "domain" | "code" | "adapter" | "auxiliary" | "external" | "utility" | "core_supplement" | "domain_update" | "extension" | "exchange" | "built_in" | "other" | undefined;

  type APINamespaceRef = {
    prefix: string,
    name: string,
    category: string, // TODO
    uri: string
  }

  type APINamespaceFull = {
    "@id": string,
    "@type": "Namespace",
    prefix: string,
    name: string,
    uri: string,
    definition: string,
    category: APINamespaceCategory,
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
    version: APIVersionRef,
    model: APIModelRef,
    steward: APIStewardRef
  }

  type APIPropertyCategory = "element" | "abstract_element" | "attribute";

  type APIPropertyRef = {
    route: string,
    prefix: string,
    qname: string,
    name: string,
    definition: string,
    category: APIPropertyCategory
  }

  type APIPropertyFull = {
    "@id": string,
    "@type": "Property",
    prefix: string,
    qname: string,
    name: string,
    definition: string,
    category: APIPropertyCategory
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
    type?: APITypeRef,
    group?: APIPropertyRef
    namespace: APINamespaceRef,
    version: APIVersionRef,
    model: APIModelRef,
    steward: APIStewardRef
  }

  type APITypeCategory = "complex_object" | "complex_value" | "simple_value" | undefined;

  type APITypeDerivation = "extension" | "restriction" | undefined;

  type APITypePattern = "object" | "adapter" | "association" | "augmentation" | "metadata" | "complex_value" | "simple_value" | "simple_list" | "simple_union" | undefined;

  type APITypeRef = {
    route: string,
    prefix: string,
    qname: string,
    name: string,
    definition: string,
    category: APITypeCategory
  }

  type APIType = {
    "@id": string,
    "@type": "Type",
    prefix: string,
    qname: string,
    name: string,
    definition: string,
    category: APITypeCategory,
    derivation: APITypeDerivation,
    pattern: APITypePattern,
    route: string,
    title: string,
    localIdentifier: string,
    terms: string[],
    isOriginal: boolean,
    isDeprecated: boolean,
    isSimple: boolean,
    isComplexContent: boolean,
    isSimpleContent: boolean,
    base: APITypeRef,
    namespace: APINamespaceRef,
    version: APIVersionRef,
    model: APIModelRef,
    steward: APIStewardRef
  }

}

export {}
