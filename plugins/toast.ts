import Toast from 'vue-toastification'
import type { PluginOptions } from 'vue-toastification'
import { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const options: PluginOptions = {
    position: POSITION.TOP_RIGHT, 
    timeout: 1000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  }

  nuxtApp.vueApp.use(Toast, options)
  nuxtApp.provide('toast', Toast)
})
