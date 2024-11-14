
const apiBaseUrl = "https://tools.niem.gov/api/v2/";

const niemToolboxBaseUrl = "https://github.com/niemopen/niem-toolbox/";

export const api = {
  baseUrl: apiBaseUrl,
  transform: apiBaseUrl + "transforms/models",
  migrate: apiBaseUrl + "migration/cmf",
  validate_xsd: apiBaseUrl + "validation/schemas/xml",
  validate_ndr: apiBaseUrl + "validation/schemas/ndr",
  validate_cmf: apiBaseUrl + "validation/cmf/xml",
  validate_xml: apiBaseUrl + "validation/instances/xml",
  validate_xml_catalog: apiBaseUrl + "validation/xml-catalog",
  validate_message_catalog: apiBaseUrl + "validation/message-catalog",
};

/**
 * Page groups
 */
export const groups = {
  brand: "NIEM Toolbox brand",
  home: "Home page",
  tools: "NIEM Toolbox functions",
  siteSettings: "Site navbar settings",
  footerLeft: "Left footer links",
  footerRight: "Right footer links"
}

/**
 * Internal page links and external urls.
 * */
export const links = {
  brand: {
    to: "/",
    label: "NIEM Toolbox",
    icon: "hugeicons:code",
    group: groups.brand
  },
  home: {
    to: "/",
    label: "Home",
    icon: "bi:house",
    description: "Use the provided utilities to help manage NIEM data models or to see working demos of NIEM API 2.0 functionality.",
    group: groups.home
  },
  browse: {
    to: null,
    label: "Browse NIEM and community content",
    icon: "mdi:walk",
    description: "Browse NIEM and published models top-down.  Look at highlighted NIEM components.",
    group: groups.tools
  },
  search: {
    to: null,
    label: "Search NIEM and community content",
    icon: "heroicons:magnifying-glass",
    description: "Search on specific terms, filter results by namespaces, types, and other options.",
    group: groups.tools
  },
  build: {
    to: null,
    label: "Work on models",
    icon: "heroicons:pencil",
    description: "Build a subset and create extensions.  Reuse components from NIEM and other published models.",
    group: groups.tools
  },
  validate: {
    to: "/validate",
    label: "Validate models and artifacts",
    icon: "heroicons:check-circle",
    description: "Check NIEM schemas, sample instances, catalog files, and IEPDs / message specifications.",
    group: groups.tools
  },
  transform: {
    to: "/transform",
    label: "Transform models",
    icon: "heroicons:arrows-right-left",
    description: "Convert NIEM models in CMF or NIEM XML Schema into supported formats, including NIEM JSON.",
    group: groups.tools
  },
  publish: {
    to: null,
    label: "Publish a model",
    icon: "heroicons:cloud-arrow-up",
    description: "Import a NIEM community model or IEPD / message specification to make available to others.",
    group: groups.tools
  },
  migrate: {
    // to: "/migrate",
    to: null,
    label: "Migrate a model",
    icon: "heroicons:chevron-double-right",
    description: "Update a NIEM subset to a more recent version.",
    // description: "Update an IEPD or message specification to a newer NIEM version.",
    group: groups.tools
  },
  login: {
    to: null,
    label: "Log in",
    icon: icons.user,
    description: "",
    disabled: true,
    group: groups.siteSettings
  },
  preferences: {
    to: null,
    label: "Site preferences",
    icon: icons.preferences,
    // icon: "heroicons:adjustments-horizontal",
    description: "",
    disabled: true,
    group: groups.siteSettings
  },
  releaseNotes: {
    to: "/release-notes",
    label: "Release notes",
    icon: "octicon:diff",
    group: groups.siteSettings
  },
  help: {
    to: null,
    label: "Help",
    icon: icons.help,
    description: "",
    disabled: true,
    group: groups.siteSettings
  },
  toolboxRepo: {
    to: niemToolboxBaseUrl,
    label: "NIEM Toolbox",
    icon: icons.github,
    target: "_blank",
    group: groups.footerLeft
  },
  niemOpen: {
    to: "https://niemopen.org",
    label: "NIEMOpen",
    icon: icons.niemopen,
    target: "_blank",
    group: groups.footerRight
  },
  apiRepo: {
    to: "https://github.com/niemopen/niem-api/",
    label: "NIEM API 2.0",
    icon: icons.github,
    target: "_blank",
    group: groups.footerRight
  },
  apiUI: {
    to: Config.baseURL + "/swagger-ui/index.html",
    label: "NIEM API 2.0 REST documentation",
    target: "_blank",
    icon: icons.swagger
  },
  cmfTool: {
    to: "https://github.com/niemopen/cmftool",
    label: "CMF Tool",
    icon: icons.github,
    target: "_blank",
    group: groups.footerRight
  },
  techHub: {
    to: "https://niem.github.io",
    label: "niem.github.io",
    icon: icons.book,
    target: "_blank",
    group: groups.footerRight
  },
  trainingVideos: {
    to: "https://www.youtube.com/watch?v=LJABuw42EnY&list=PLWEnz1sVMlkqxUzx7mCFSRdOLZhyM4DiV",
    label: "Training",
    icon: icons.youtube,
    target: "_blank",
    group: groups.footerRight
  },
  contact: {
    to: "https://www.niemopen.org/contact/",
    label: "Contact Us",
    icon: icons.help,
    target: "_blank",
    group: groups.footerRight
  },
  cmf: {
    to: "https://github.com/niemopen/common-model-format",
    label: "CMF",
    icon: icons.cmf,
    target: "_blank"
  },
  issues: {
    to: niemToolboxBaseUrl + "issues/",
    label: "Issues",
    icon: icons.issue,
    target: "_blank"
  }
};

/**
 * Returns an array of link objects for each link that matches the given group.
 * @param {string} group - Name of group to filter the full list of pages
 */
export function getLinks(group) {
  /** @type{LinkType[]} */
  let results = [];

  for(let [key, link] of Object.entries(links)) {
    if (link.group == group) {
      results.push(link);
    }
  }

  return results;
}

/**
 * Return a single link object with the given id.
 * @param {String} id
 * @return {LinkType}
 */
export function getLink(id) {
  return links[id];
}

/**
 * @type {string} label
 * @type {string} icon
 * @type {string} group
 * @return {LinkType}
 */
export function getMenuItem(label, icon, childrenGroup) {
  return {
    label,
    icon,
    children: getLinks(childrenGroup)
  }
}
