
declare namespace APITypes {

  type ResponseStatusCode = "success" | "error" | "warning" | "info" | "pending";

  type ErrorDetails = {
    timestamp: string,
    status: string,
    error: string,
    message: string,
    path: string
  }

  type Results = {
    request: "unsent" | "pending" | "returned",
    status: ResponseStatusCode,
    title?: string,
    message?: string,
    start?: number,
    time?: string,
    filename?: string,
    error?: ErrorDetails,
    report?: Report
  }

  type Report = {
    tests: Test[],
    comment: string,
    passed: number,
    errors: number,
    warnings: number,
    info: number
  }

  type ResultSeverityCode = "error" | "warning" | "info";
  type ResultStatusCode = "passed" | "error" | "warning";

  type Test = {
    status: ResultStatusCode,
    id: string,
    description: string,
    severity: ResultSeverityCode,
    category: string,
    comments: string,
    ran: boolean,
    runtime: number,
    results: TestResult[]
  }

  type TestResult = {
    testId: string,
    status: ResultStatusCode,
    entity: string,
    entityCategory: string,
    message: string,
    location: string,
    line: string,
    column: string,
    comment: string
  }

  type ValidationKindType = "ndr" | "xsd" | "xml" | "cmf" | "xml-catalog" | "message-catalog";

}