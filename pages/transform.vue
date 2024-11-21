
<template>
  <PageHeader :page="AppItems.transform">
    <template #user>
      <p>
        Transform a NIEM subset, schema, IEPD schemas, or message model in either CMF or NIEM XML Schema to another supported format.
      </p>

      <p>
        This functionality leverages the <CustomLink :link="AppItems.cmfToolRepo"/> <UKbd>version 0.7-alpha.6</UKbd> which supports <CustomLink :link="AppItems.cmfRepo"/> <UKbd>version 0.8</UKbd>.
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

    <UForm ref="form"
    :state="state"
    :validate="validate" :validate-on="['change']"
    @submit.prevent="onSubmit" enctype="multipart/form-data"
    >

      <!-- Input file -->
      <UFormField
      name="file" required :error="fileError"
      label="1. Select a model input file"
      :help="ToolboxForm.UPLOAD_WARNING"
      :validate-on-input-delay="800"
      >

        <!-- Upload file input -->
        <span v-if="inputMode=='upload'">
          <UInput type="file" @change="onFileChange" :accept="accept" :icon="icons.upload" :ui="ui.inputFileInGroup">
            <template #trailing>(CMF | XSD | ZIP)</template>
          </UInput>
        </span>

        <!-- Demo file input -->
        <span v-else>
          <USelect v-model="demoFileKey" :items="demoFileItems" :ui="ui.inputFileInGroup" :icon="demoFileItem?.icon || icons.magic" placeholder="Choose demo file"/>
        </span>

        <!-- Select upload file or demo file option -->
        <USelect v-model="inputMode" :items="inputModeItems" color="neutral" variant="subtle" :ui="ui.inputMode"/>

      </UFormField>

      <!-- Select from -->
      <UFormField name="from" required label="2. Select input file format">
        <USelect v-model="state.from" :items="fromItems" :icon="fromItem?.icon" class="w-64"/>
      </UFormField>

      <!-- Select to -->
      <UFormField name="to" required label="3. Select transformation format">
        <USelect v-model="state.to" :items="toItems" :icon="toItem?.icon" class="w-64"/>
      </UFormField>

      <!-- TODO: Fix invisible background and text colors on button components without having to use ui-->
      <UButton type="submit" :ui="ui.button_default">Transform</UButton>

    </UForm>

  </UCard>

  <CustomResponseCard :results="results"/>
</template>

<script setup lang="ts">
import type { Form } from '@nuxt/ui';
import type { ShallowRef, ShallowUnwrapRef } from 'vue';



// *** Input mode ***

// Allow user to choose between uploading file and using an available demo file
const inputMode = ref<"upload"|"demo">("upload");
const inputModeItems = ["upload", "demo"]

// Reset state when switching input modes
watch(inputMode, (newValue, oldValue) => {
  state.file = undefined;
  state.from = undefined;
  results.request = "unsent";
});


// *** Demo file support ***

// Allow user to pick between available demo file options
const demoFileKey = ref();

const demoFileItems: DemoFileItemType[] = [
  {
    label: "Valid examples",
    type: "label"
  },
  {
    value: "cmf",
    label: "CrashDriver.cmf.xml",
    icon: icons.cmf,
    from: "cmf",
    path: "demo/transform/CrashDriver.cmf.xml"
  },
  {
    value: "xsd",
    label: "CrashDriver.xsd.zip",
    icon: icons.xml,
    from: "xsd",
    path: "demo/transform/CrashDriver.zip"
  },
  {
    type: "separator"
  },
  {
    label: "Invalid examples",
    type: "label"
  },
  {
    value: "cmf-invalid",
    label: "CrashDriver-version-0.6.cmf.xml",
    icon: icons.error,
    from: "cmf",
    path: "demo/transform/CrashDriver-0.6.cmf.xml"
  },
  {
    value: "txt-invalid",
    label: "CrashDriver.txt",
    icon: icons.error,
    from: undefined,
    path: "demo/transform/CrashDriver.txt"
  }
]

const demoFileItem = computed(() => {
  return demoFileItems.find(item => item.value == demoFileKey.value);
})

// Update state.file when a demo file is selected
watch(demoFileKey, async (newKey, oldKey) => {
  if (demoFileItem.value && demoFileItem.value.path) {
    state.file = await ToolboxForm.loadPublicFile(demoFileItem.value.path)
  }
  else {
    state.file = undefined;
  }
  state.from = demoFileItem.value?.from;
  form.value?.setErrors([]);
  results.request = "unsent";
});


// *** State ***

type FromType = "cmf" | "xsd";
type ToType = FromType | "json_schema" | "owl";

type TransformStateType = {
  from: FromType,
  to: ToType,
  file: File
}

const state = reactive<Partial<TransformStateType>>({});

const fromItems = [
  {
    value: "cmf",
    label: "CMF XML",
    icon: icons.cmf,
    extensions: ["cmf.xml", "cmf", "xml"]
  },
  {
    value: "xsd",
    label: "NIEM XSD",
    icon: icons.xml,
    extensions: ["zip", "xsd"]
  }
];

const toItems = [
  ...fromItems,
  {
    value: "json_schema",
    label: "JSON Schema",
    icon: icons.json,
    extensions: ["schema.json", "jschema", "json"]

  },
  {
    value: "owl",
    label: "OWL",
    icon: icons.owl,
    extensions: ["ttl"]
  }
];

const fromItem = computed(() => {
  return fromItems.find(item => item.value == state.from);
});

const toItem = computed(() => {
  return toItems.find(item => item.value === state.to);
});

const extension = computed(() => {
  return ToolboxApp.extension(state.file?.name);
});

const fromExtensions = fromItems.flatMap(item => item.extensions);
const accept = fromExtensions.map(extension => "." + extension).join(", ");


// *** File change ***

/**
 * Update the file state since `v-model` doesn't work on file inputs.
 * Set the default state.from value
 */

async function onFileChange(event: Event) {
  fileError.value = "";
  state.file = ToolboxForm.fileInput(event);
  state.from = defaultFrom();
  results.request = "unsent"
  await form.value.validate({name: "", silent: true});
}

function defaultFrom() {
  switch (extension.value) {
    case "cmf":
    case "xml":
    case "cmf.xml":
      return "cmf";

    case "xsd":
    case "zip":
      return "xsd";

    default:
      return undefined;
  }
}


// *** Developer information panel ***

const code = computed(() => `curl -i -X POST -H "Content-Type: multipart/form-data" -F from=${ state.from } -F to=${ state.to } -F file=@${ state.file?.name } ${ API.routes.transform }`);


// *** Form validation ***

const form = useTemplateRef("form") as Readonly<ShallowRef<ShallowUnwrapRef<Form<TransformStateType>>>>;

const fileError: Ref<string | undefined> = ref();

let validationFinalPass = false;

function validate(state: Partial<TransformStateType>) {

  const errors = ToolboxForm.initFormErrors();
  fileError.value = undefined;

  // Skip validation until form submission
  if (validationFinalPass) {
    ToolboxForm.validateRequiredField(errors, "from", state.from);
    ToolboxForm.validateRequiredField(errors, "to", state.to);
    ToolboxForm.validateRequiredField(errors, "file", state.file);

    ToolboxForm.validateFileExtension(errors, "file", fromExtensions, extension.value);
  }

  return errors;
}


// *** Submit ***

const results = API.initResults();

async function onSubmit() {
  // Include file in final round of validation check
  validationFinalPass = true;
  let validateResults = await form.value?.validate({name: "", silent: true});
  if (validateResults == false) {
    validationFinalPass = false;
    return;
  }

  const response = await API.post(API.routes.transform, state, results);
  await API.downloadFileResults(response, results);

  // Reset validation checks
  validationFinalPass = false;
}

</script>

<style scoped lang="scss">

// TODO: Fix invisible buttons
#submit  {
  background-color: var(--color-niem) !important;
  color: white !important;
}

</style>
