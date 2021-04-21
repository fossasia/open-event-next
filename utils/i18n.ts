import { i18n } from '@lingui/core'
import { en, hi } from 'make-plural/plurals'
import {
  detect,
  fromUrl,
  fromCookie,
  fromNavigator,
} from '@lingui/detect-locale'

i18n.loadLocaleData('en', { plurals: en })
i18n.loadLocaleData('hi', { plurals: hi })

/**
 * Load messages for requested locale and activate it.
 * This function isn't part of the LinguiJS library because there're
 * many ways how to load messages — from REST API, from file, from cache, etc.
 */
export async function activate(locale: string): Promise<void> {
  const { messages } = await import(`../locale/${locale}/messages.js`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}

export async function activateAndSetCookie(locale: string): Promise<void> {
  await activate(locale)
  document.cookie = `current_locale=${locale}`
}

export async function detectAndSetLocale(): Promise<void> {
  const DEFAULT_FALLBACK = () => 'en'
  const locale = detect(
    fromUrl('lang'),
    fromCookie('current_locale'),
    fromNavigator(),
    DEFAULT_FALLBACK
  )
  await activateAndSetCookie(locale)
}
