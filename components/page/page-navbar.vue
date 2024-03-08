
<template>
  <header>
    <div class="container fixed-top">
      <nav class="navbar navbar-expand bg-niem">
        <div class="d-flex container-fluid">
          <!-- Brand / Home -->
          <NuxtLink to="/" class="navbar-brand flex-grow-1 text-white">
            <i class="bi bi-wrench-adjustable-circle" aria-hidden="true" />
            <span id="navbar-text">NIEM Toolbox</span>
          </NuxtLink>

          <!-- Navbar toggler -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-collapse"
            aria-controls="navbar-collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Settings -->
          <div id="navbar-collapse" class="collapse navbar-collapse">
            <PageNavbarSettings />
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>

  .navbar {
    padding: 0;
  }

  .navbar-brand {
    font-weight: 700;
    margin-left: 4px;
  }

  #navbar-collapse {
    justify-content: flex-end;
  }

  #navbar-text {
    margin-left: -4px;
  }

</style>
