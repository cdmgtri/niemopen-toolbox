
<template>
  <div>
    <PageHeader id="transforms">
      <!-- User instructions -->
      <template #user>
        <div>
          <p>Steps:</p>
          <ol>
            <li>Select input format of your NIEM model</li>
            <li>Select output format for the transformation</li>
            <li>Upload file to transform</li>
            <!-- <li>Upload files or select option to use demo files (no upload required)</li> -->
            <!-- <li>Select transformation options</li> -->
          </ol>

          <p>Notes:</p>
          <ul>
            <li>Note: Hold down the <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> key to select multiple or de-select options</li>
          </ul>
        </div>
      </template>

      <!-- Developer tips -->
      <template #developer>
        <div>
          <ul>
            <li>This page makes a POST multipart/form-data request to the NIEM API to transform the user's input file.</li>
            <li>Curl example</li>
            <code>
              curl -v -F from=cmf -F to=owl -F file=@CrashDriver.cmf.xml https://tools.niem.gov/api/v2/transforms/models
            </code>
            <li>See <a href="https://tools.niem.gov/api/v2/swagger-ui/index.html#/Transforms/transformModel">OpenAPI documentation</a> for more about the request.</li>
          </ul>
          <pre>
          </pre>
        </div>
      </template>

      <template #preferences>
        <div>
          <form>
          </form>
        </div>
      </template>
    </PageHeader>

    <div class="container-fluid card">
      <form id="form-transform" action="javascript:void(0)" enctype="multipart/form-data" class="mb-2">
        <!-- Header row -->
        <div class="row my-3">
          <!-- Left: Input header -->
          <div class="col">
            <FormLegend label="Input" icon="file-earmark-arrow-up" />
            <p>Select the input format and file for the transformation.</p>
          </div>

          <!-- Right: Output header -->
          <div class="col">
            <FormLegend label="Output" icon="file-earmark-arrow-down" />
            <p>Select desired output format and run the transformation.</p>
          </div>
        </div>

        <!-- Model format row -->
        <div class="row my-3">
          <!-- Left: Input model format -->
          <div class="col">
            <FormGroupSelect
              control-id="from"
              label="Select a NIEM model format"
              :multiple="false"
              :size="modelInputs.length"
            >
              <option v-for="input in modelInputs" :key="input.key" :value="input.key" :disabled="input.disabled">
                {{ input.label }}
              </option>
            </FormGroupSelect>
          </div>

          <!-- Right: Output model format -->
          <div class="col">
            <FormGroupSelect
              control-id="to"
              label="Select NIEM model output formats"
              :multiple="false"
              :size="modelOutputs.length"
            >
              <option v-for="output in modelOutputs" :key="output.key" :value="output.key" :disabled="output.disabled">
                {{ output.label }}
              </option>
            </FormGroupSelect>
          </div>
        </div>
        <!-- note="Hold the Control/Command key to select multiple options" -->

        <div class="row">
          <!-- Left: File picker / demo -->
          <div class="col">
            <FormGroup
              control-id="div-select-input"
              label="Select input file"
            >
              <FormFilePicker
                accept="*"
                note="Do not upload sensitive or distribution-restricted files."
                :multiple="false"
              />
            </FormGroup>
          </div>

          <div class="col">
            <FormGroup
              control-id="output-run-transformation"
              label="Run the transformation"
            >
              <!-- Convert button -->
              <button id="btn-submit" :onclick="convert" class="btn btn-niem">
                <IconAny icon="play-btn" />
                <span>Submit</span>
              </button>
            </FormGroup>
          </div>
        </div>
      </form>

      <!-- Hidden alert displayed on API call error -->
      <div id="div-warning" class="alert alert-warning alert-dismissible fade show" style="display: none;" role="alert">
        <button type="button" class="btn-close" :onclick="hideWarning" aria-label="Close">
        </button>
        <h4>API call failed</h4>
        <pre><code id="text-warning" /></pre>
      </div>
    </div>
  </div>
</template>

<script setup>

import { onMounted } from "vue";

import niemAPI from "assets/js/niemAPI";

const modelInputs = [
  {
    key: "xsd",
    label: "XML Schemas",
    disabled: false,
    accept: ".xsd, .zip"
  },
  {
    key: "cmf",
    label: "CMF-XML",
    disabled: false,
    accept: ".cmf, .cmf.xml"
  }
  // {
  //   key: "cmf-json",
  //   label: "CMF-JSON",
  //   disabled: true,
  //   accept: ".cmf.json"
  // },
  // {
  //   key: "cmf-yaml",
  //   label: "CMF-YAML",
  //   disabled: true,
  //   accept: ".cmf.yml, .cmf.yaml"
  // },
  // {
  //   key: "csv",
  //   label: "NIEM CSVs",
  //   disabled: true,
  //   accept: ".csv"
  // }
];

const modelOutputs = [
  {
    key: "xsd",
    label: "XML Schemas",
    disabled: false
  },
  {
    key: "cmf",
    label: "CMF-XML",
    disabled: false
  },
  // {
  //   key: "cmf-json",
  //   label: "CMF-JSON",
  //   disabled: true
  // },
  // {
  //   key: "cmf-yaml",
  //   label: "CMF-YAML",
  //   disabled: true
  // },
  // {
  //   key: "csv",
  //   label: "NIEM CSVs",
  //   disabled: true
  // },
  {
    key: "json_schema",
    label: "JSON Schema",
    disabled: false
  },
  {
    key: "owl",
    label: "OWL",
    disabled: false
  }
  // {
  //   key: "doc-spread",
  //   label: "Documentation spreadsheet",
  //   disabled: true
  // }
];

let divWarning;
let warningElement;

async function convert() {
  // Prevent page refresh
  event.preventDefault();

  const form = document.getElementById("form-transform");
  const submitter = document.getElementById("btn-submit");
  const formData = new FormData(form, submitter);

  // Add input file
  const file = document.getElementById("file");
  formData.append("file", file.files[0]);

  const response = await niemAPI.transform(formData);

  if (response.ok) {
    const data = await response.blob();
    const header = response.headers.get("Content-Disposition");
    const filename = header.split("=")[1];
    download(data, filename);
  }
  else {
    const message = await response.json();
    showWarning(message);
  }
}

function download(blob, filename) {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function hideWarning() {
  divWarning.style.display = "none";
}

function showWarning(message) {
  warningElement.textContent = JSON.stringify(message, null, 2);
  divWarning.style.display = "block";
}

onMounted(() => {
  divWarning = document.getElementById("div-warning");
  warningElement = document.getElementById("text-warning");
});

</script>

<style scoped lang="scss">

#btn-submit {
  margin-top: 4px;
  width: 100%;
}

optgroup {
  color: $color-niem;
}

option {
  color: darkslategrey;
}

option:disabled {
  color: lightgray;
}

pre {
  white-space: pre-wrap;
}

</style>
