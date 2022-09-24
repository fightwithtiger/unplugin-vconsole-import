import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePlugin from '../../src/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePlugin({
      entry: resolve(__dirname, './src/main.ts'),
      enabled: false,
    }),
  ],
})
