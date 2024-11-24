
<template>
  <header>
    <SiteHeader/>
  </header>

  <main>
    <div id="page-header"/>
    <div id="page-contents">
      <slot/>
    </div>
    <PageScrollTop />
  </main>

  <footer>
    <SiteFooter/>
  </footer>
</template>

<style scoped lang="scss">

  header, main, footer {
    max-width: 1048px;
    padding: 0 36px !important;
    width: 100%;
  }

  header, footer {
    left: 50%;
    position: fixed;
    transform: translateX(-50%);
    z-index: 10;
  }

  header {
    top: 0;
  }

  main {
    margin: 48px auto 100px auto;
  }

  #page-contents {
    margin-top: 24px;
    position: relative;
    z-index: 0;
  }

  footer {
    bottom: 0;
    background-color: white;
  }

</style>
