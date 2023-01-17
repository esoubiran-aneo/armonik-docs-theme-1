import { logger } from '@nuxt/kit'
import { version } from './package.json'

logger.success(`Using ArmoniK Docs Theme v${version}`)

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus'
})
