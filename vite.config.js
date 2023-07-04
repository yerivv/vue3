import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    open: true, //실행할때 오픈할고냐 말고냐 , 경로를 넣어도 됨. ex open: '/docs/index.html',
  },
  build: {
    outDir: './dist'
  }
})
