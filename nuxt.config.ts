// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({

  mode: "spa",
  ssr: true,

  modules: [
    // "@nuxtjs/robots",
    "@pinia/nuxt",
    "@vite-pwa/nuxt"
  ],

  app: {
    baseURL: "/niem-toolbox/"
  },

  publicRuntimeConfig: {
  },

  // @ts-ignore
  head: {
    htmlAttrs: {
      lang: "en-US"
    },
    bodyAttrs: {
      class: "d-flex flex-column h-100"
    },
    title: "NIEM Toolbox",
    meta: [
    ],
    link: [
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.6.3.slim.min.js" },
      { src: "~/assets/js/scripts.js" }
    ]
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/styles/variables.scss' as *;"
          // additionalData: "@import '@/assets/styles/variables.scss';"
        }
      }
    }
  },

  css: [
    "~/assets/styles/main.scss",
    // @ts-ignore
    { src: "bootstrap-icons/font/bootstrap-icons.scss", lang: "scss" }
  ],

  nitro: {
    output: {
      // dir: "public"
    }
  },

  // @ts-ignore
  pwa: {

  },

  // @ts-ignore
  robots: {

  }
});
