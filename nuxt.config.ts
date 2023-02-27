import { logger, createResolver } from '@nuxt/kit'
import { version } from './package.json'

logger.success(`Using ArmoniK Docs Theme v${version}`)

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/armonik-docs-theme/' : '',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'favicon', content: '/favicon.ico' },
      ]
    }
  },

  extends: '@nuxt-themes/docus',

  plugins: [
    resolve('./plugins/mermaid.client.js')
  ],
})
