
<template>
  <NuxtLayout>
    <template #header>
      <PageHeader :link="links.transform">
        <template #user>
          <p>Transform a NIEM subset, schema, IEPD schemas, or message model in either CMF or NIEM XML Schema to another supported format.</p>
          <br/>
          This functionality leverages <CustomExternalLink :to="links.cmfTool.to" label="CMF Tool"/> version <UKbd>0.7-alpha.6</UKbd>, which supports <CustomExternalLink :to="links.cmf.to" label="CMF"/> version <UKbd>0.8</UKbd>.
        </template>
      </PageHeader>
    </template>

    <UForm :state="state" :validate="validate" @submit.prevent="onSubmit" enctype="multipart/form-data" class="" :validate-on-input-delay="300" :validateOn="['change']">

      <!-- Input file -->
      <UFormField name="file" required :error="fileError"
        label="1. Select a model input file"
        help = "Do not upload sensitive or distribution-restricted files."
      >
        <CustomFileInput @change="onFileChange" class="w-[600px]">
          <template #trailing>(CMF | XSD | ZIP)</template>
        </CustomFileInput>
      </UFormField>

      <!-- Select from -->
      <UFormField name="from" required label="2. Select input file format">
         <USelect v-model="state.from" :items="fromItems" :icon="fromIcon" class="w-64"/>
      </UFormField>

      <!-- Select to -->
      <UFormField name="to" required label="3. Select transformation format">
        <USelect v-model="state.to" :items="toItems" :icon="toIcon" class="w-64"/>
      </UFormField>

      <UButton type="submit">Transform</UButton>
    </UForm>

    <UAlert
      v-if="requestErrorMessage"
      title="Transformation failed"
      :description="requestErrorMessage"
      :icon="icons.error"
      color="error"
      variant="subtle"
    />

    <CustomResponseCard title="Request returned successfully" category="success">
      THIS IS MY SUCCESS MESSAGE
    </CustomResponseCard>

    <CustomResponseCard title="Request returned successfully" category="success">
      THIS IS MY SUCCESS MESSAGE
    </CustomResponseCard>

    <CustomResponseCard title="Request returned with warning" category="warning">
      THIS IS MY WARNING MESSAGE
    </CustomResponseCard>

    <CustomResponseCard title="Request returned with error" category="error">
      THIS IS MY ERROR MESSAGE
    </CustomResponseCard>

    <CustomResponseCard title="Did you know..." category="info">
      THIS IS MY INFO MESSAGE
    </CustomResponseCard>

    <CustomAlert title="Request returned successfully" category="success">
      THIS IS MY SUCCESS MESSAGE
    </CustomAlert>

    <CustomAlert title="Request returned successfully" category="success">
      THIS IS MY SUCCESS MESSAGE
    </CustomAlert>

    <CustomAlert title="Request returned with warning" category="warning">
      THIS IS MY WARNING MESSAGE
    </CustomAlert>

    <CustomAlert title="Request returned with error" category="error">
      THIS IS MY ERROR MESSAGE
    </CustomAlert>

    <CustomAlert title="Did you know..." category="info">
      THIS IS MY INFO MESSAGE
    </CustomAlert>

    <!-- TODO: Error panel -->
    <!-- TODO: Success panel -->
    <!-- TODO: Fix file required validation error after input -->

  </NuxtLayout>
</template>

<script setup lang="ts">

  import type { FormSubmitEvent } from "#ui/types";
  import FileSaver from "file-saver";

  const requestErrorMessage = ref("");

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

  /** @type{{label: string, value: string, icon: string}[]} */
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
        state.from = "";
        fileError.value = "Please select a valid file (.xml, .cmf, .xsd, .zip)"
        break;
    }

  }

  // async function transform() {
  //   // Prevent page refresh
  //   event.preventDefault();

  //   const form = document.getElementsByName("form");
  //   const submitter = document.getElementById("btn-submit");
  //   const formData = new FormData(form, submitter);

  //   // Add input file
  //   formData.append("file", event.target.files[0]);

  //   const response = await fetch(api.transform, {
  //     body: formData,
  //     method: "post"
  //   });

  //   if (response.ok) {
  //     const data = await response.blob();
  //     const header = response.headers.get("Content-Disposition");
  //     const filename = header.split("=")[1];
  //     download(data, filename);
  //   }
  //   else {
  //     const message = await response.json();
  //     showWarning(message);
  //   }


  // }

  async function onSubmit(event: FormSubmitEvent<StateType>) {
    console.log(state.from, state.to, state.file);

    const response = await fetch(api.transform, {
      body: getFormBody(state),
      method: "post"
    });

    if (response.ok) {
      const data = await response.blob();
      const header = response.headers.get("Content-Disposition");
      const filename = header?.split("=")[1] || "transform-results.txt";
      console.log("SUCCESS", filename);
      FileSaver.saveAs(data, filename);
      requestErrorMessage.value = "This actually succeeded."
    }
    else {
      requestErrorMessage.value = await response.json();
    }

  }

</script>

<style>

</style>
