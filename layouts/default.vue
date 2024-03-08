
<template>
  <div class="container d-flex flex-column">
    <PageNavbar />
    <main class="container-fluid">
      <div>
        <slot />
        <PageFooterScrollTop />
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<style scoped lang="scss">

main {
  min-height: calc(100vh - $height-navbar - $height-footer);
  max-height: calc(100vh - $height-navbar);
  padding: 0;
  position: relative;
  top: 40px;
  width: 100%;
}

</style>
