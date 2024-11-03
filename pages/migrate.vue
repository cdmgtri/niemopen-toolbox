<template>
  <NuxtLayout>
    <template #header>
      <PageHeader :link="links.migrate">
        <template #user>
          <p>Migrate a NIEM subset represented as a CMF file to a more recent version of NIEM.</p>
          <br/>
          <p>Use the <ULink to="/transform">Transform</ULink> feature to:</p>
          <ul>
            <li>Convert existing NIEM XML schemas to CMF if needed for the migration.</li>
            <li>Convert the migration output to NIEM XML schemas, JSON schema, or another supported output format.</li>
          </ul>
        </template>
      </PageHeader>
    </template>

    <UForm :state="state" enctype="multipart/form-data" class="space-y-6">
      <UFormField
        id="file"
        label="1. Select a CMF file with a NIEM subset"
        help="Only content in the NIEM API database with migration rules can support migration."
      >
        <!-- <UInput type="file" class="w-96" @change="processFile"/> -->
      </UFormField>

      <UFormField label="2. Select current version">
        <!-- <USelect :items="fromItems" v-model="from" :icon="fromIcon" id="from" class="w-48"/> -->
      </UFormField>

      <UFormField label="3. Select migration version">
        <!-- <USelect :items="toItems" v-model="to" :icon="toIcon" id="to" class="w-48"/> -->
      </UFormField>

      <!-- TODO: Submit button -->
      <UButton @click.prevent="migrate" id="btn-migrate">Migrate</UButton>
    </UForm>

    <!-- TODO: Error panel -->
    <!-- TODO: Reload file and input after download -->

  </NuxtLayout>
</template>

<script setup>

const state = reactive({


});

async function migrate() {

}

</script>

<style>

</style>