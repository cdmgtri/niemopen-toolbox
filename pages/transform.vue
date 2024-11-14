
<template>
  <PageHeader :link="links.transform">
    <template #info>
      <p>
        Transform a NIEM subset, schema, IEPD schemas, or message model in either CMF or NIEM XML Schema to another supported format.
      </p>

      <p>
        This functionality leverages the <CustomLink :link="links.cmfTool"/> <UKbd>version 0.7-alpha.6</UKbd> which supports <CustomLink :link="links.cmf"/> <UKbd>version 0.8</UKbd>.
      </p>

      <p class="font-medium">Tips:</p>

      <ul class="bullets">
        <li>
          CMF inputs have to be the version supported by this tool.
        </li>
        <li>
          CMF version migration is not automated and must be done by hand.
        </li>
        <li>
          NIEM XSD inputs can be a single schema as a XSD file or multiple schemas in a zip file.
        </li>
        <li>
          Validation or conformance errors may lead to transform failure.
        </li>
      </ul>
      <br/>
    </template>

    <template #developer>
      <CustomCodePanel title="POST request" :code="code"/>
    </template>
  </PageHeader>

  <UCard>

    <UForm :state="state" :validate="validate" @submit.prevent="onSubmit" enctype="multipart/form-data">

      <!-- Input file -->
      <UFormField
      name="file" required :error="fileError"
      label="1. Select a model input file"
      help="Do not upload sensitive or distribution-restricted files."
      >
        <UButtonGroup>
          <CustomFileInput @change="onFileChange" class="w-[600px]">
            <template #trailing>(CMF | XSD | ZIP)</template>
          </CustomFileInput>
          <UButton color="neutral" variant="subtle" label="Demo"/>
          <UDropdownMenu :items="demoItems">
            <UButton color="neutral" variant="subtle" :icon="icons.down"/>
          </UDropdownMenu>
        </UButtonGroup>
      </UFormField>

      <!-- Select from -->
      <UFormField name="from" required label="2. Select input file format">
          <USelect v-model="state.from" :items="fromItems" :icon="fromIcon" class="w-64"/>
      </UFormField>

      <!-- Select to -->
      <UFormField name="to" required label="3. Select transformation format">
        <USelect v-model="state.to" :items="toItems" :icon="toIcon" class="w-64"/>
      </UFormField>

      <!-- TODO: Fix invisible background and text colors on button components without having to use ui-->
      <UButton type="submit" :ui="ui.button_default">Transform</UButton>

    </UForm>

  </UCard>

  <CustomResponseCard :results="results"/>
</template>

<script setup lang="ts">

import type { DropdownMenuItem } from "@nuxt/ui";
import FileSaver from "file-saver";

const results: APIResults = reactive({
  status: "unsent",
  category: "unsent",
  title: "",
  message: "",
  filename: "",
  time: ""
});

type StateType = {
  from?: "cmf" | "xsd" | undefined,
  to?: "cmf" | "xsd" | "json_schema" | "owl" | undefined,
  file?: File
}

const state: StateType = reactive({
  from: undefined,
  to: undefined,
  file: undefined
});


const fromItems = [
  {
    value: "cmf",
    label: "CMF XML",
    icon: icons.cmf
  },
  {
    value: "xsd",
    label: "NIEM XSD",
    icon: icons.xml
  }
];

const toItems = fromItems.concat([
  {
    value: "json_schema",
    label: "JSON Schema",
    icon: icons.json
  },
  {
    value: "owl",
    label: "OWL",
    icon: icons.owl
  }
]);

const fromIcon = computed(() => {
  return fromItems.find(item => item.value == state.from)?.icon;
});

const toIcon = computed(() => {
  return toItems.find(item => item.value === state.to)?.icon;
});


const code = computed(() => `curl -i -X POST -H "Content-Type: multipart/form-data" -F from=${ state.from } -F to=${ state.to } -F file=@${ state.file?.name } ${ api.transform }`);

const demoItems : DropdownMenuItem[] = [
  {
    label: "Crash Driver CMF",
    icon: icons.cmf,
    onSelect: useDemoCMFFile
  },
  {
    label: "Crash Driver XSD ZIP",
    icon: icons.xml,
    onSelect: useDemoXSDFile
  },
  {
    label: "Invalid Crash Driver CMF",
    icon: icons.error,
    onSelect: useDemoCMFInvalidFile
  },
]

const fileError = ref("");

function validate(state: StateType) {
  const errors = initFormErrors();

  validateRequiredFormField(errors, "file", state.file);
  validateRequiredFormField(errors, "from", state.from);
  validateRequiredFormField(errors, "to", state.to);

  return errors;
}

/**
 * Handle updates to the file input.
 *
 * 1. Update the file state since `v-model` doesn't work on file inputs.
 * 2. Set the `to` value based on the file input extension.
 */
function onFileChange(event: Event) {

  // Reset any existing file error message
  fileError.value = "";

  const target = event.target as HTMLInputElement;
  const files = target.files;

  if (!files || files.length == 0) {
    return;
  }

  state.file = files[0];
  const extension = state.file.name?.split(".")?.pop();

  switch (extension) {
    case undefined:
      return;

    case "cmf":
    case "xml":
      state.from = "cmf";
      break;

    case "xsd":
    case "zip":
      state.from = "xsd";
      break;

    default:
      state.from = undefined;
      fileError.value = "Please select a valid file (.xml, .cmf, .xsd, .zip)"
      break;
  }

}

let defaultResultsExtension = computed(() => {
  switch (state.to) {
    case "cmf": return "cmf.xml";
    case "xsd": return "zip";
    case "owl": return "ttl";
    case "json_schema": return "schema.json";
  }
});

async function onSubmit() {
  // Set up
  let start = Date.now();
  results.status = "pending";
  results.category = "pending";
  results.message = "Request sent...";
  console.log("Sending transform request", state.from, state.to, state.file);

  // API request
  const response = await fetch(api.transform, {
    body: getFormBody(state),
    method: "post"
  });

  results.time = elapsedSeconds(start);
  console.log(response);

  if (response.ok) {
    // Download results
    const data = await response.blob();
    const header = response.headers.get("Content-Disposition");
    results.filename = header?.split("=")[1] || "transform-results." + defaultResultsExtension;
    FileSaver.saveAs(data, results.filename);

    // Success message
    results.category = "success";
    results.error = undefined;
    results.title = "";
    results.message = `Downloaded ${results.filename}`;
    console.log("Request succeeded", results.filename);
  }
  else {
    // Error message
    results.category = "error";
    results.error = await response.json() || await response.text();
    results.title = `ERROR ${results.error?.status}: ${results.error?.error}`;
    results.message = results.error?.message.replaceAll(";", "\n\n") || "";
    console.error("Request failed");
  }

  results.status = "returned";

}

async function useDemoCMFFile() {
  useDemoFile("CrashDriver.cmf.xml", "cmf");
}

async function useDemoCMFInvalidFile() {
  useDemoFile("CrashDriver-0.6.cmf.xml", "cmf");
}

async function useDemoXSDFile() {
  useDemoFile("CrashDriver.zip", "xsd");
}

/**
 * Download a file from the public directory to use as form input.
 */
async function useDemoFile(path: string, from: typeof state.from) {
  const response = await fetch("demo/transform/" + path);
  const blob = await response.blob();
  const filename = path.split("/").pop() || "input.text";
  const file = new File([blob], filename);

  const container = new DataTransfer();
  container.items.add(file);

  // Add the downloaded file to the form and state.
  const inputFile = document.getElementById("file") as HTMLInputElement;
  inputFile.files = container.files;
  state.file = file;
  state.from = from;
}

</script>

<style scoped lang="scss">

// TODO: Fix invisible buttons
#submit  {
  background-color: var(--color-niem) !important;
  color: white !important;
}

</style>
