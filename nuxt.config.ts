// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr : false,
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  devServer : {
    port : 5000
  },
  runtimeConfig : {
    public : {
      apiUrl : process.env.NUXT_PUBLIC_API_URL
    }
  }
});
