
<template>
  <PageHeader :page="AppItems.browse"/>
  <UCard>
    <ListStewards :stewards="stewards"/>
  </UCard>
</template>

<script setup lang="ts">

const stewards = await Data.stewards();

</script>
