import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve('src'),
    },
    dedupe: ['vue'],
    extensions: ['.ts', '.vue'],
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: resolve('src/auto-imports.d.ts'),
    }),
  ],
})
