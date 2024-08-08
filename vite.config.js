import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import postcssPresetEnv from 'postcss-preset-env'



export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': true
          }
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@':'/src'
    }
  },
  server: {
    port: 3000,
  }
})
