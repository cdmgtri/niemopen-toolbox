
<template>
  <PageHeader :link="links.migrate">
    <template #info>
      <p>
        Migrate a NIEM subset to a more recent version of NIEM.
      </p>

      <p class="font-medium">Use the <ULink to="/transform">Transform</ULink> feature to:</p>

      <ul class="bullets">
        <li>Convert existing NIEM XML schemas to CMF if needed for the migration.</li>
        <li>Convert the migration output to NIEM XML schemas, JSON schema, or another supported output format.</li>
      </ul>

      <p>Note that multi-step migration is possible in a single request.  Any migration issues between versions will be aggregated into a single results file.</p>

      <br/>
    </template>

    <template #developer>
      <CustomCodePanel title="POST request" :code="code"/>
    </template>
  </PageHeader>

  <!-- TODO: Support migration of other models -->

  <UCard>

    <UForm :state="state" :validate="validate" @submit.prevent="onSubmit" enctype="multipart/form-data">

      <!-- Input file -->
      <UFormField
        name="file" required :error="fileError"
        label="1. Select a CMF file to migrate (NIEM subsets only)"
        help="Do not upload sensitive or distribution-restricted files."
      >
        <CustomFileInput @change="onFileChange" class="w-[600px]">
          <template #trailing>(CMF)</template>
        </CustomFileInput>
      </UFormField>

      <!-- Select from -->
      <UFormField name="from" required label="2. Select current version">
        <USelect v-model="state.from" :items="fromItems" :icon="icons.start" class="w-64"/>
      </UFormField>

      <!-- Select to -->
      <UFormField name="to" required label="3. Select migration version">
        <USelect v-model="state.to" :items="toItems" :icon="icons.end" class="w-64"/>
      </UFormField>

      <!-- TODO: Fix invisible background and text colors on button components without having to use ui-->
      <UButton type="submit" :ui="ui.button_default">Migrate</UButton>

    </UForm>

  </UCard>

  <CustomResponseCard :results="results"/>
</template>

<script setup lang="ts">

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
  from?: string,
  to?: string,
  file?: File
}

const state: StateType = reactive({
  from: undefined,
  to: undefined,
  file: undefined
});


const allItems = ["1.0", "2.0", "2.1", "3.0", "3.1", "3.2", "4.0", "4.1", "4.2", "5.0", "5.1", "5.2"];

const fromItems = ref(allItems.slice(0, -1));

const toItems = computed(() => {
  if (state.from != undefined) {
    // Extra declaration to avoid TS error in array filter lambda function
    let from = state.from;
    // Return more recent versions than the one selected
    return allItems.slice(1).filter(version => version > from || "");
  }
  else {
    // Return all but the first version by default
    return allItems.slice(1);
  }
});

const code = computed(() => `curl -i -X POST -H "Content-Type: multipart/form-data" -F from=${ state.from } -F to=${ state.to } -F file=@${ state.file?.name } ${ api.migrate }`);


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
    case "cmf":
    case "xml":
      // Valid extension
      break;

    default:
      fileError.value = "Please select a valid CMF file (.cmf or .cmf.xml)"
      break;
  }

}

async function onSubmit() {
  console.log("Sending migration request", state.from, state.to, state.file);
  let start = Date.now();

  const response = await fetch(api.migrate, {
    body: getFormBody(state),
    method: "post"
  });

  results.time = elapsedSeconds(start);


  if (response.ok) {
    const data = await response.blob();

    // TODO: Calculate default file response extension based on `to` value
    const header = response.headers.get("Content-Disposition");
    results.filename = header?.split("=")[1] || "migration-results.zip";
    FileSaver.saveAs(data, results.filename);

    results.category = "success";
    results.error = undefined;
    results.title = "";
    results.message = `Downloaded ${results.filename}`;
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

</script>

<style scoped lang="scss">


#submit  {
  background-color: var(--color-niem) !important;
  color: white !important;
}

</style>
