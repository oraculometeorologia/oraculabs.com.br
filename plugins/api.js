import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig();


  const instance = axios.create({
    baseURL: runtimeConfig.public.NUXT_API_URL,
    headers: {
      'Accept': 'application/json',
    },
    proxy: {
      host: 'http://localhost',
      port: 8000,
      changeOrigin: true
    }
  })



  return { provide: { instance } }
})