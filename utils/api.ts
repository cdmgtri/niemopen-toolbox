import type { SelectMenuItem } from "@nuxt/ui";
import FileSaver from "file-saver";

export type APIMediaType = "json" | "xml" | "csv";

type ItemType = SelectMenuItem & {
  value: APIMediaType;
}

type StateType = { [key: string]: any };

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

  /**
   * Pre: Loads the form body from the given state and updates results to pending.
   * Request: Sends a post request to the given route.
   * Post: Updates results with basic status information about the response
   * (can be overwritten) and the elapsed time of the request.
   */
  static async post(route: string, state: StateType, results: APITypes.Results, downloadReport = false) {
    // Pre-request: Load body and set start time
    let body = ToolboxForm.formBody(state);
    API.updateResultsRequestSent(results);

    // Add media type to route if present in the state object
    let updatedRoute = route;
    if (state.mediaType) {
      updatedRoute += API.mediaTypeQueryString(state.mediaType);
    }

    // Request
    let response = await fetch(updatedRoute, {
      body,
      method: "post"
    });

    // Post request: Log runtime

    // Log basic information about the response
    if (response.ok) {
      // Success message
      results.status = "success";
      results.error = undefined;
      results.title = "";
    }
    else {
      // Error message
      results.status = "error";
      results.error = await response.json() || await response.text();
      results.title = `ERROR ${results.error?.status}: ${results.error?.error}`;
      results.message = results.error?.message.replaceAll(";", "\n\n") || "";
      console.error("Request failed");
    }

    if (downloadReport) {
    }

    results.time = API.computeTimeInSeconds(results.start as number);
    results.request = "returned";

    return response;

  }

  private static downloadFile(blob: Blob, filename: string) {
    FileSaver.saveAs(blob, filename);
  }

  static async downloadFileResults(response: Response, results: APITypes.Results) {
    if (!response.ok) return;

    if (!results.filename) {
      // Set the filename from the response header
      const header = response.headers.get("Content-Disposition");
      results.filename = header?.split("=")[1] || "results";
    }

    const data = await response.blob();
    API.downloadFile(data, results.filename);
    results.message = `Downloaded ${results.filename}`;
  }

  static async downloadReportResults(mediaType: APIMediaType, response: Response, results: APITypes.Results) {
    let blob: Blob;

    if (!results.filename) {
      // Default in case filename has not already been set
      results.filename = "validation-report." + mediaType ;
    }

    if (mediaType == "json") {
      results.report = await response.json() as APITypes.Report;
      const text = JSON.stringify(results.report, null, 2);
      blob = new Blob([text], { type: "application/json" });
    }
    else if (mediaType == "csv") {
      const text = await response.text();
      blob = new Blob([text], { type: "text/csv" });
      // TODO: Load CSV report
    }
    else {
      console.warn("Media type not supported.  Could not save file.");
      return;
    }

    results.status = API.reportColorClass(results.report);
    results.message = `Downloaded ${results.filename}.`;

    API.downloadFile(blob, results.filename);

  }

  /**
   * @param start - Send earlier recorded value from Date.now()
   */
  private static computeTimeInSeconds(start: number) {
    let end = Date.now();
    return ((end - start) / 1000).toFixed(2);
  }

  private static readonly allMediaTypeItems: ItemType[] = [
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

  static readonly reportMediaTypes = API.allMediaTypeItems.filter(item => ["json", "csv"].includes(item.value));

  static readonly dataMediaTypes = API.allMediaTypeItems.filter(item => ["json", "xml"].includes(item.value));

  static mediaTypeIcon(value: APIMediaType | undefined) {
    return API.allMediaTypeItems.find(item => item.value == value)?.icon;
  }

  /**
   * Returns "?mediaType=" and the given value if not "json" (default).
   */
  static mediaTypeQueryString(mediaType: APIMediaType | undefined) {
    return mediaType == "json" || mediaType == undefined ? "" : `?mediaType=${mediaType}`;
  }

  // TODO: Rename resultColorClass
  static resultColorClass(severity: APITypes.ResultSeverityCode | APITypes.ResultStatusCode) {
    switch (severity) {
      case "error": return "error";
      case "info": return "info";
      case "warning": return "warning";
      case 'passed': return "success";
    }
  }

  // TODO: Rename reportColorClass or remove
  /**
   * Returns success, warning, error color classes based on
   * whether or not the report contains errors or warnings.  Informational items are not included.
   */
  static reportColorClass(report: APITypes.Report | undefined) {
    if (!report) return "info";
    if (report.errors) return "error";
    if (report.warnings) return "warning";
    return "success";
  }

  /**
   * Initializes a new set of reactive results as request unsent and status undefined.
   */
  static initResults(): APITypes.Results {
    return reactive({
      request: "unsent",
      status: "pending"
    });
  }

  static updateResultsRequestSent(results: APITypes.Results) {
    results.start = Date.now();
    results.request = "pending";
    results.status = "pending";
    results.message = "Request sent...";
  }

}
