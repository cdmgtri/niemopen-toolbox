
<template>
  <PageHeader :link="links.releaseNotes"/>

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

<script setup>

/**
  @type{{
    header: string,
    features?: {summary: string, description?: string}[],
    fixes?: string[]
  }[]}
*/
const notes = [
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
