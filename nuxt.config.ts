import { logger } from '@nuxt/kit'
import { version } from './package.json'

logger.success(`Using ArmoniK Docs Theme v${version}`)

export default defineNuxtConfig({
  app: { baseURL: process.env.NODE_ENV === 'production' ? '/armonik-docs-theme/' : '' },

  extends: '@nuxt-themes/docus'
})
