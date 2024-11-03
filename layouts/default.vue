
<template>
  <header>
    <PageNavbar/>
  </header>
  <main>
    <slot name="header"/>
    <div id="contents">
      <slot/>
    </div>
    <!-- TODO: Replace scroll top component -->
    <!-- <PageFooterScrollTop /> -->
  </main>
  <footer>
    <PageFooter/>
  </footer>
</template>

<style scoped lang="scss">

  header, main, footer {
    padding: 0 36px !important;
    width: 100%;
  }

  header, footer {
    position: fixed;
    z-index: 10;
  }

  header {
    top: 0;
  }

  main {
    margin-top: 48px;
    margin-bottom: 60px;
  }

  #contents {
    position: relative;
    z-index: 0;

  }

  footer {
    bottom: 0;
    background-color: white;
  }

</style>
