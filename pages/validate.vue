
<template>
  <PageHeader :link="links.validate">
    <template #info>
      <p>
        Validate NIEM artifacts and check NDR conformance.
      </p>

      <p class="font-semibold">Notes:</p>

      <ul class="bullets spaced-sm">
        <li>
          Use the <ULink to="/transform">Transform</ULink> feature to convert a CMF model to XSD to check NDR conformance.
        </li>
        <li>
          JSON instance and schema validation is not yet available.
        </li>
        <li>
          CSV results are download-only at this time and cannot be displayed.
        </li>
      </ul>

      <div v-for="[key, kinds] of Object.entries(groupedValidationItems)">
        <p class="font-semibold mb-3">{{ key }} validation options:</p>

        <ul class="bullets spaced-sm">
          <li v-for="kind in kinds">
            <span class="font-semibold">{{ kind.label }}</span> -
            <span>{{ kind.description }}</span>
            <span v-if="kind.note" class="font-light"><br/>{{ kind.note }}</span>
          </li>
        </ul>

        <br/>

      </div>

    </template>

    <!-- TODO: Add developer information -->
    <template #developer>
      <CustomCodePanel title="POST request" :code="code"/>
    </template>
  </PageHeader>

  <UCard>

    <UForm :state="state" :validate="validate" @submit.prevent="onSubmit" enctype="multipart/form-data">

      <!-- Select validation type -->
      <UFormField
        name="kind" required
        label="1. Select validation kind"
        :help="selectedKind?.description"
      >
        <USelect v-model="state.kind" :items="validationMenuItems" :icon="selectedKind?.icon" class="w-64"/>
      </UFormField>

      <!-- Select result format -->
      <UFormField
        name="mediaType" required
        label="2. Select results format"
      >
        <USelect v-model="state.mediaType" :items="mediaTypeItems" :icon="mediaTypeIcon"  class="w-64"/>
      </UFormField>

      <!-- Required first input file -->
      <UFormField
        name="file1" required
        label="3. Select a file to validate"
        :help="getFileHelp(selectedKind?.file1?.description)"
      >
        <UButtonGroup>
          <CustomFileInput @change="onFile1Change" class="w-[600px]" :icon="selectedKind?.file1?.icon" id="file1">
            <template #trailing>({{ selectedKind?.file1?.fileType }})</template>
          </CustomFileInput>

          <UButton color="neutral" variant="subtle" label="Demo"/>
          <UDropdownMenu :items="demoItems" :disabled="state.kind == undefined">
            <UButton color="neutral" variant="subtle" :icon="icons.down"/>
          </UDropdownMenu>
        </UButtonGroup>
      </UFormField>

      <!-- Optional second input file -->
      <UFormField
        v-if="selectedKind?.file2"
        name="file2"
        label="4. Select supporting file for validation"
        :help="selectedKind?.file2.description + ' | ' + FILE_UPLOAD_WARNING"
      >
        <CustomFileInput @change="onFile2Change" class="w-[600px]" :icon="selectedKind?.file2?.icon" id="file2">
          <template #trailing>({{ selectedKind.file2?.fileType }})</template>
        </CustomFileInput>
      </UFormField>

      <!-- TODO: Fix invisible background and text colors on button components without having to use ui-->
      <UButton type="submit" :ui="ui.button_default">Validate</UButton>

    </UForm>

  </UCard>

  <CustomResponseCard :results="results" :validationResults="validationResults"/>

</template>

<script setup lang="ts">

import type { DropdownMenuItem, SelectItem } from "@nuxt/ui";
import FileSaver from "file-saver";

const results: APIResults = reactive({
  status: "unsent",
  category: "pending",
  title: "",
  message: "",
  filename: "",
  time: ""
});

type KindType = "ndr" | "xsd" | "xml" | "cmf" | "xml-catalog" | "message-catalog";

type StateType = {
  kind?: KindType | undefined,
  file1?: File
  file2?: File,
  mediaType?: "json" | "csv"
}

const state: StateType = reactive({
  kind: undefined,
  file1: undefined,
  file2: undefined,
  mediaType: "json"
});

type ValidationKindType = SelectItem & {
  value?: KindType | undefined,
  description?: string,
  note?: string,
  group: "display" | "XSD" | "XML",
  extensions?: string[],
  route?: string,
  file1?: {
    description: string,
    fileType: string,
    icon: string,
    paramName: string,
    file: File | undefined
  },
  file2?: {
    description: string,
    fileType: string,
    icon: string,
    paramName: string,
    file: File | undefined
  }
}

const validationMenuItems: ValidationKindType[] = [
  {
    label: "XML schemas",
    type: "label",
    group: "display",
  },
  {
    value: "ndr",
    label: "Validate NDR conformance",
    type: "item",
    description: "Check one or more NIEM XML schemas against the NIEM Naming and Design Rules (NDR)",
    extensions: ["xsd", "zip"],
    icon: icons.book,
    group: "XSD",
    route: api.validate_ndr,
    file1: {
      fileType: "XSD | ZIP",
      icon: icons.xml,
      description: "NIEM XSD",
      paramName: "file",
      file: undefined
    }
  },
  {
    value: "xsd",
    label: "Validate NIEM XSD",
    type: "item",
    description: "Validate one or more XML schemas to check that the basic syntax is correct.",
    extensions: ["xsd", "zip"],
    icon: icons.xml,
    group: "XSD",
    route: api.validate_xsd,
    file1: {
      fileType: "XSD | ZIP",
      icon: icons.xml,
      description: "NIEM XSD",
      paramName: "file",
      file: undefined
    }
  },
  {
    type: "separator",
    group: "display"
  },
  {
    label: "XML instances",
    type: "label",
    group: "display"
  },
  // TODO: Fix validate CMF call
  // {
  //   value: "cmf",
  //   label: "Validate CMF",
  //   type: "item",
  //   description: "Validate a CMF file (an XML instance file) against its NIEM CMF XML schema.",
  //   note: "Note that this does not check NDR conformance of the content.",
  //   extensions: ["xml", "cmf"],
  //   icon: icons.xml,
  //   group: "XML",
  //   route: api.validate_cmf,
  //   file1: {
  //     fileType: "CMF | XML",
  //     icon: icons.xml,
  //     description: "CMF",
  //     paramName: "file",
  //     file: undefined
  //   }
  // },
  {
    value: "xml",
    label: "Validate XML",
    type: "item",
    description: "Validate one or more XML instances against its user-provided XML schemas.",
    extensions: ["xml"],
    icon: icons.xml,
    group: "XML",
    route: api.validate_xml,
    file1: {
      fileType: "CMF | XML",
      icon: icons.xml,
      description: "XML instance",
      paramName: "xml",
      file: undefined

    },
    file2: {
      fileType: "ZIP",
      icon: icons.zip,
      description: "NIEM XSD",
      paramName: "xsd",
      file: undefined
    }
  },
  {
    value: "message-catalog",
    label: "Validate message catalog",
    type: "item",
    description: "Validate an IEPD or message catalog (an XML instance file) against its NIEM IEPD / message catalog schema.",
    extensions: ["xml"],
    icon: icons.xml,
    group: "XML",
    route: api.validate_message_catalog,
    file1: {
      fileType: "XML",
      icon: icons.xml,
      description: "message-catalog.xml or iepd-catalog.xml",
      paramName: "file",
      file: undefined
    }
  },
  {
    value: "xml-catalog",
    label: "Validate XML catalog",
    type: "item",
    description: "Validate an XML catalog (an XML instance file) against the OASIS schema specification for XML catalogs.",
    extensions: ["xml"],
    icon: icons.xml,
    group: "XML",
    route: api.validate_xml_catalog,
    file1: {
      fileType: "XML",
      icon: icons.xml,
      description: "xml-catalog.xml",
      paramName: "file",
      file: undefined
    }
  }
]

const validationItems = reactive(validationMenuItems.filter(item => item.type == "item"));

const groupedValidationItems = reactive({
  XSD: validationItems.filter(item => item.group == "XSD"),
  XML: validationItems.filter(item => item.group == "XML")
});

const selectedKind = computed(() => {
  return validationItems.find(item => item.value == state.kind);
})

// TODO: Make a reusable results format object and filter desired items per use
const mediaTypeItems: SelectItem[] = [
  {
    value: "json",
    label: "JSON",
    icon: icons.json
  },
  {
    value: "csv",
    label: "CSV",
    icon: icons.csv
  }
]

// TODO: Extract to a reusable result icon function
const mediaTypeIcon = computed(() => {
  if (state.mediaType != undefined) {
    return mediaTypeItems.find(item => item.value == state.mediaType)?.icon;
  }
})

const mediaType = computed(() => state.mediaType != "json" ? `?mediaType=${state.mediaType}` : "");

const validationResults = reactive<ValidationResults>({
  tests: [],
  comment: "",
  errors: -1,
  info: -1,
  passed: -1,
  warnings: -1
});

const demoItems : DropdownMenuItem[] = [
  {
    label: "Valid example",
    icon: icons.success,
    onSelect: useDemoValidFile
  },
  {
    label: "Invalid example",
    icon: icons.error,
    onSelect: useDemoInvalidFile
  }
]

async function useDemoValidFile() {
  useDemoFile(true);
}

async function useDemoInvalidFile() {
  useDemoFile(false);
}

async function useDemoFile(valid: boolean) {
  let fileName;
  switch (selectedKind.value?.value) {

    case "ndr":
      fileName = valid ? "CrashDriver-6.0.zip" : "Crash Driver IEPD-invalid.zip";
      return useDemoFileHandler("ndr/" + fileName, "file1");

    case "xsd":
      fileName = valid ? "person.xsd" : "person-invalid.xsd";
      return useDemoFileHandler("xml/single/" + fileName, "file1");

    case "xml":
      // File 1
      fileName = valid ? "person.xml" : "person-invalid.xml";
      useDemoFileHandler("xml/single/" + fileName, "file1");

      // File 2
      return useDemoFileHandler("xml/single/person.xsd", "file2");

    case "cmf":
      fileName = valid ? "CrashDriver.cmf.xml" : "CrashDriver-invalid.cmf.xml";
      return useDemoFileHandler("xml/cmf/" + fileName, "file1");

    case "message-catalog":
      fileName = valid ? "valid-5.0/iepd-catalog.xml" : "invalid-5.0/iepd-catalog.xml";
      return useDemoFileHandler("xml/message-catalog/" + fileName, "file1");

    case "xml-catalog":
      fileName = valid ? "xml-catalog-valid.xml" : "xml-catalog-invalid.xml";
      return useDemoFileHandler("xml/xml-catalog/" + fileName, "file1");
  }
}

async function useDemoFileHandler(path: string, stateFileID: "file1" | "file2") {
  const response = await fetch("demo/validate/" + path);
  const blob = await response.blob();
  const filename = path.split("/").pop() || "input.text";
  const file = new File([blob], filename);

  const container = new DataTransfer();
  container.items.add(file);

  // Add the downloaded file to the form and state.
  const inputFile = document.getElementById(stateFileID) as HTMLInputElement;
  inputFile.files = container.files;
  state[stateFileID] = file;
}

function getFileHelp(fileDescription?: string) {
  return `${fileDescription || "(pending)"} | ${FILE_UPLOAD_WARNING}`;
}

// Compute the second file parameter if applicable
const codeFileParam2 = computed(() => selectedKind.value?.file2 != undefined ? `-F ${selectedKind.value?.file2?.paramName}=@${ state.file2?.name }` : "");

// Compute the curl statement for the developer information panel
const code = computed(() => `curl -i -X POST -H "Content-Type: multipart/form-data" -F ${selectedKind.value?.file1?.paramName}=@${ state.file1?.name } ${codeFileParam2.value} ${ selectedKind.value?.route}${mediaType.value}`);


// TODO: Validate file extensions
const file1Error = ref("");
const file2Error = ref("");

/**
 * TODO: Check file extensions against kind of validation
 */
function validate(state: StateType) {
  const errors = initFormErrors();

  validateRequiredFormField(errors, "kind", state.kind);
  validateRequiredFormField(errors, "resultFormat", state.mediaType);
  validateRequiredFormField(errors, "file1", state.file1);

  if (selectedKind.value?.value == "xml") {
    validateRequiredFormField(errors, "file2", state.file2);
  }

  return errors;
}

/**
 * Handle updates to the file input.
 *
 * 1. Update the file state since `v-model` doesn't work on file inputs.
 * 2. Set the `to` value based on the file input extension.
 */
function onFile1Change(event: Event) {

  // Reset any existing file error message
  file1Error.value = "";

  const target = event.target as HTMLInputElement;
  const files = target.files;

  if (!files || files.length == 0) {
    return;
  }

  state.file1 = files[0];

  // TODO: Check file input extensions

}

function onFile2Change(event: Event) {

  // Reset any existing file error message
  file2Error.value = "";

  const target = event.target as HTMLInputElement;
  const files = target.files;

  if (!files || files.length == 0) {
    return;
  }

  state.file2 = files[0];

  // TODO: Check file input extensions

}

async function onSubmit() {

  if (!state.kind || !selectedKind.value?.route) {
    console.warn("Cancelled request for missing fields")
    return;
  }

  if (!state.file1) {
    console.warn("Cancelled request for missing first file")
    return;
  }

  const formData = new FormData();

  // Build form body manually to adjust for file parameter names
  if (selectedKind.value.value == "xml") {
    if (!state.file2) {
      console.log("Cancelled request for missing second file")
      return;
    }
    formData.append("xml", state.file1);
    formData.append("xsd", state.file2);
  }
  else {
    formData.append("file", state.file1);
  }

  console.log("Sending validation request", state.kind, state.file1, state.file2);
  let start = Date.now();

  const response = await fetch(selectedKind.value.route + mediaType.value, {
    body: formData,
    method: "post"
  });

  results.time = elapsedSeconds(start);

  if (response.ok) {
    // Download results
    let blob : Blob;

    // File name = {file1 base name}-validation-{validation type}
    results.filename = `${state.file1.name.split(".").slice(0, 1)}-validation-${selectedKind.value.value}`;

    if (state.mediaType == "json") {
      results.filename += ".json";
      const json : ValidationResults = await response.json();
      const text = JSON.stringify(json, null, 2);
      blob = new Blob([text], {type: "application/json"});

      validationResults.tests = json.tests;
      validationResults.comment = json.comment;
      validationResults.errors = json.errors;
      validationResults.info = json.info;
      validationResults.passed = json.passed;
      validationResults.warnings = json.warnings;
    }
    else if (state.mediaType == "csv") {
      results.filename += ".csv";
      const text = await response.text();
      blob = new Blob([text], {type: "text/csv"});
    }
    else {
      console.warn("Media type not supported.  Could not save file.");
      return;
    }

    FileSaver.saveAs(blob, results.filename);

    results.category = state.mediaType == "json" ? getSummaryColorClass() : "info";
    results.title = "";
    results.error = undefined;
    results.message = `Downloaded ${results.filename}.`;
    console.log("Request succeeded", results.filename);
  }
  else {
    results.category = "error";
    results.error = await response.json();
    results.title = `ERROR ${results.error?.status}: ${results.error?.error}`;
    results.message = results.error?.message.replaceAll(";", "\n\n") || "";
    console.log("Request failed");

  }

  results.status = "returned";

}

// TODO: Refactor
function getResultColorClass(severity: ValidationSeverityType | ValidationStatusType) {
  switch (severity) {
    case "error" : return "error";
    case "info": return "info";
    case "warning": return "warning";
    case 'passed': return "success";
  }
}

// TODO: Refactor
function getSummaryColorClass() {
  if (validationResults.errors) return "error";
  if (validationResults.warnings) return "warning";
  return "success";
}

</script>

<style scoped lang="scss">


#submit  {
  background-color: var(--color-niem) !important;
  color: white !important;
}

</style>
