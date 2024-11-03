// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  app: {
    baseURL: "/niem-toolbox/",
    head: {
      htmlAttrs: {
        lang: "en-US"
      },
      title: "NIEM Toolbox"
    }
  },
  compatibilityDate: '2024-04-03',
  css: [
    "~/assets/styles/main.scss"
  ],
  devtools: {
    enabled: true
  },
  icon: {
    provider: "server",
    customCollections: [
      {
        prefix: "app",
        dir: "./assets/icons"
      }
    ]
  },
  modules: [
    '@nuxt/ui',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    "@vueuse/nuxt",
  ],
  nitro: {
    prerender: {
      // failOnError: false
    }
  },
  pwa: {
    // registerType: "autoUpdate",
    manifest: {
      name: "NIEM Toolbox",
      short_name: "niem-toolbox",
    },
    client: {
      // installPrompt: true
    }
  },
  ssr: false,
  // ui: {
  //   theme: {
  //     colors: ["primary", "secondary", "success", "warning", "error", "info", "neutral"]
  //   }
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '~/assets/styles/variables.scss' as *;",
          api: "modern-compiler"
        }
      }
    }
  }
});
