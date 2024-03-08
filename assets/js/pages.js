
const pages = [
  {
    id: "home",
    icon: "house",
    title: "Home",
    description: "Use the provided utilities to help manage NIEM data models or to see working demos of NIEM API 2.0 functionality.",
    group: "index",
    link: "#"
  },
  {
    id: "search",
    icon: "search",
    title: "Discover NIEM and community content",
    description: "Search on specific terms or browse available content.",
    group: "home",
    draft: "Alpha 3",
    schedule: "MAY",
    status: "future",
    link: null
  },
  {
    id: "build",
    icon: "pencil",
    title: "Work on NIEM models",
    description: "Build a subset and create extensions.  Reuse components from NIEM and other published models.",
    group: "home",
    draft: "Alpha 5",
    schedule: "JUL",
    status: "future",
    link: null
  },
  {
    id: "transforms",
    icon: "arrow-down-up",
    title: "Transform models",
    description: "Convert NIEM models in CMF or NIEM XML Schema into supported formats, including NIEM JSON.",
    group: "home",
    draft: "Alpha 1",
    schedule: "MAR",
    status: "completed",
    link: "/transforms"
  },
  {
    id: "validate",
    icon: "check-circle",
    title: "Validate models and artifacts",
    description: "Check NIEM schemas, sample instances, catalog files, and IEPDs / message specifications.",
    group: "home",
    draft: "Alpha 4",
    schedule: "JUN",
    status: "future",
    link: null
  },
  {
    id: "publish",
    icon: "cloud-arrow-up",
    title: "Publish a model",
    description: "Import a NIEM community model or IEPD / message specification to make available to others.",
    group: "home",
    draft: "Alpha 5",
    schedule: "JUL",
    status: "future",
    link: null
  },
  {
    id: "migrate",
    icon: "bar-chart",
    title: "Migrate a model",
    description: "Update an IEPD or message specification to a newer NIEM version.",
    group: "home",
    draft: "Alpha 6",
    schedule: "AUG",
    status: "future",
    link: null
  },
  {
    id: "login",
    icon: "person",
    title: "Log in",
    description: "",
    group: "navbar-settings",
    link: null
  },
  {
    id: "preferences",
    icon: "sliders",
    title: "Preferences",
    description: "",
    group: "navbar-settings",
    link: null
  },
  {
    id: "release-notes",
    icon: "file-diff",
    title: "Release notes",
    description: "This website is currently under development.  Monthly alpha releases with new features are scheduled through September.",
    group: "navbar-settings",
    link: "/release-notes"
  },
  {
    id: "help",
    icon: "question-circle",
    title: "Help",
    description: "",
    group: "navbar-settings",
    link: null
  }
];

/**
 * Returns information for each of the pages that match the given group.
 * @param {string} group - Name of group to filter the full list of pages
 * @returns Array of page information
 */
export function getPages(group) {
  return pages.filter(page => page.group === group);
}

/**
 * Returns information for the page with the given id.
 * @param {String} id - Unique identifier of a page
 * @returns Information about a single page
 */
export function getPage(id) {
  return pages.find(page => page.id === id);
}
