
<template>
  <PageHeader :page="AppItems.releaseNotes"/>

  <UCard v-for="note in notes" :key="note.header" class="card">
    <template #header>
      <h2>{{ note.header }}</h2>
    </template>

    <div v-if="note.features">
      <h3>Features</h3>
      <ul class="ml-5">
        <li v-for="feature in note.features" class="bullets">
          <span class="feature-summary">{{ feature.summary }}</span>
          <p v-if="feature.description" class="feature-description">
            {{ feature.description }}
          </p>
        </li>
      </ul>
    </div>
  </UCard>
</template>

<script setup lang="ts">

type NoteType = {
  header: string,
  features?: {summary: string, description?: string}[]
  fixes?: string[]
}

const notes: NoteType[] = [
  {
    header: "Alpha 2.1: 2024-11-25",
    features: [
      {
        summary: "Updated validation reports",
        description: "Improved display for validation reports and added a custom report for NDR validation to group results across all files by rule number."
      },
      {
        summary: "Updated demo files",
        description: "Added demo files to the validation page.  Updated the way demo files are access in the transform page for better consistency across the application."
      }
    ]
  },
  {
    header: "Alpha 2: 2024-11-14",
    features: [
      // {
      //   summary: "Migrate NIEM subsets",
      //   description: "Migrate a NIEM subset in a CMF file to a more recent version of NIEM."
      // },
      {
        summary: "Validate NIEM XSD",
        description: "Validate NIEM XML schemas and check for NDR conformance."
      },
      {
        summary: "Validate NIEM XML",
        description: "Validate NIEM XML instances against their schemas."
      },
      {
        summary: "Validate NIEM message catalogs",
        description: "Validate NIEM IEPD / message catalog XML instances (defined by NIEM's MPD / IEPD specification)."
      },
      {
        summary: "Validate XML catalogs",
        description: "Validate XML catalogs (defined by OASIS), which can be used to override file location paths in XSD import statements."
      }
    ]
  },
  {
    header: "Alpha 1: 2023-03-31",
    features: [
      {
        summary: "Initial application",
        description: ""
      },
      {
        summary: "Transform NIEM models",
        description: "Transform NIEM models in CMF or XML Schemas to CMF, XML Schemas, JSON Schema, or OWL."
      }
    ]
  }
]

</script>

<style scoped lang="scss">

// TODO: Update styling

  .card {
    margin-bottom: 18px;
  }

  .card:hover {
    background-color: color-mix(in srgb, whitesmoke 50%, transparent);
  }

  .card > :first-child {
    background-color: whitesmoke;
  }

  .feature-description {
    font-weight: 300;
    font-size: smaller;
  }

  li {
    margin-bottom: 12px;
  }

</style>
