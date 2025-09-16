// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss({
      config: {
        theme: {
          extend: {},
        },
        prefix: 'tw-', // لو تحب تضيف بادئة للكلاسات
      }
    })
  ]
})
