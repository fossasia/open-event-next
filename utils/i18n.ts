import { i18n } from '@lingui/core'
import {
  en,
  hi,
  zh,
  ko,
  vi,
  th,
  ru,
  pl,
  ja,
  id,
  fr,
  es,
  de,
  bn,
} from 'make-plural/plurals'
import {
  detect,
  fromUrl,
  fromCookie,
  fromNavigator,
} from '@lingui/detect-locale'

i18n.loadLocaleData('en', { plurals: en })
i18n.loadLocaleData('hi', { plurals: hi })
i18n.loadLocaleData('zh', { plurals: zh })
i18n.loadLocaleData('ko', { plurals: ko })
i18n.loadLocaleData('vi', { plurals: vi })
i18n.loadLocaleData('th', { plurals: th })
i18n.loadLocaleData('ru', { plurals: ru })
i18n.loadLocaleData('pl', { plurals: pl })
i18n.loadLocaleData('ja', { plurals: ja })
i18n.loadLocaleData('id', { plurals: id })
i18n.loadLocaleData('fr', { plurals: fr })
i18n.loadLocaleData('es', { plurals: es })
i18n.loadLocaleData('de', { plurals: de })
i18n.loadLocaleData('bn', { plurals: bn })

// Supported locales
export const supportedLocales: { [key: string]: string } = {
  bn: 'বাংলা',
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  hi: 'हिंदी',
  id: 'Bahasa Indonesia',
  ja: '日本語',
  pl: 'Polski',
  ru: 'Русский',
  th: 'ไทย',
  vi: 'Tiếng Việt',
  zh_Hans: '中文（简体)',
  zh_Hant: '中文（繁體)',
  ko: '한국어',
}

export function isValidLocale(locale: string): boolean {
  return locale in supportedLocales
}

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
  let detectedLocale = detect(
    fromUrl('lang'),
    fromCookie('current_locale'),
    fromNavigator(),
    DEFAULT_FALLBACK
  )

  // because typeof null === object
  if (typeof detectedLocale !== 'object') {
    if (!isValidLocale(detectedLocale)) {
      detectedLocale = detectedLocale?.split('-')[0]
    }

    const locale = isValidLocale(detectedLocale)
      ? detectedLocale
      : DEFAULT_FALLBACK()
    await activateAndSetCookie(locale)
  }
}
