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
      title: 'Desenvolvimento de Software :: OracuLabs',
      meta: [
        { hid: 'description', name: 'description', content: 'A OracuLabs é especializada em serviços de Desenvolvimento de Software para atender às necessidades específicas das empresas.' },
        { hid: 'keywords', name: 'keywords', content: 'Desenvolvimento de Software, Software Empresarial, Soluções Personalizadas, Desenvolvimento Web' },
        { hid: 'robots', name: 'robots', content: 'index,follow' },
        { hid: 'canonical', name: 'canonical', content: 'https://oraculabs.com.br/' },
        { hid: 'viewport', name: 'viewport', content: 'initial-scale=1.0' },
        { hid: 'google-site-verification', name: 'google-site-verification', content: 'QZnvLTah8xtIQAxp959VR6yx0rfH6WWsl5thLzi1IbI' },
        
        // ... outras metatags globais, como Open Graph (OG) e Twitter
      ],
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap", rel: "stylesheet"
        },
      ],
      script: [
        // Google Analytics
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-37LSN28ET2'
        }, {
          children: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-37LSN28ET2');"
        }
        // script: [
        //   // Bootstrap
        //   {
        //     src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js',
        //     body: true,
        //     integrity: "sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe",
        //     crossorigin: "anonymous"
        //   },
        // ]
      ]
    }
  }
})