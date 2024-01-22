import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  devtools: { enabled: true },
  css: [
    '@/assets/css/style.scss',
    "@/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-37LSN28ET2'
    }, {
      children: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-37LSN28ET2');"
    },
    {
      src: "@/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      type: "text/javascript"
    }
  ],
  app: {
    head: {
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap", rel: "stylesheet"
        }
      ],
      // script: [
      //   // Bootstrap
      //   {
      //     src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js',
      //     body: true,
      //     integrity: "sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe",
      //     crossorigin: "anonymous"
      //   },
      // ]
    }
  }
})
