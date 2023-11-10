// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-bootstrap-icons"
  ],
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  script: [
    {
      src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      type: "text/javascript"
    }
  ],
  // css: [
  //   // '~/assets/scss/main.scss',
  //   // '~/node_modules/swiper/swiper.scss',
  // ],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "assets/scss/main.scss" as *;'
  //       }
  //     }
  //   },
  // },
  app: {
    head: {
      link: [
        // { rel: "stylesheet", type: "text/css", href: 'url.css }
        {
          rel: "preconnect", href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap", rel: "stylesheet"
        }
      ],
    }
  },
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      NUXT_BASE_URL: process.env.NUXT_BASE_URL,
    },
  }
})