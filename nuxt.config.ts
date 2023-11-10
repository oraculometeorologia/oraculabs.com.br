// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  script: [
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
      ]
    }
  }
})
