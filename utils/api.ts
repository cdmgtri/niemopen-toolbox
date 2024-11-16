import type { SelectMenuItem } from "@nuxt/ui";

export type APIMediaType = "json" | "xml" | "csv";

type ItemType = SelectMenuItem & {
  value: APIMediaType;
}

export class API {

  static readonly baseUrl = "https://tools.niem.gov/api/v2/";

  static readonly routes = {
    baseUrl: API.baseUrl,
    transform: API.baseUrl + "transforms/models",
    migrate: API.baseUrl + "migration/cmf",
    validate_xsd: API.baseUrl + "validation/schemas/xml",
    validate_ndr: API.baseUrl + "validation/schemas/ndr",
    validate_cmf: API.baseUrl + "validation/cmf/xml",
    validate_xml: API.baseUrl + "validation/instances/xml",
    validate_xml_catalog: API.baseUrl + "validation/xml-catalog",
    validate_message_catalog: API.baseUrl + "validation/message-catalog",
  }

  private static readonly items: ItemType[] = [
    {
      value: "json",
      label: "JSON",
      icon: icons.json
    },
    {
      value: "csv",
      label: "CSV",
      icon: icons.csv
    },
    {
      value: "xml",
      label: "XML",
      icon: icons.xml
    }
  ]

  static readonly reportMediaTypes = API.items.filter(item => ["json", "csv"].includes(item.value));

  static readonly dataMediaTypes = API.items.filter(item => ["json", "xml"].includes(item.value));

  /**
   * Returns "?mediaType=" and the given value if not "json" (default).
   */
  static mediaTypeQueryString(mediaType: APIMediaType | undefined) {
    return mediaType == "json" || mediaType == undefined ? "" : `?mediaType=${mediaType}`;
  }

}
