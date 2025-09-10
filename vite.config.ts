import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import tailwindcss from '@tailwindcss/vite'
import Vue from '@vitejs/plugin-vue'
import ViteImages from 'vite-plugin-vue-images'

export default defineConfig({
  plugins: [
    vue(),
   tailwindcss(),
    vuetify({ autoImport: true }),
      ViteImages(),
  ],
})
