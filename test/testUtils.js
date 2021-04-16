import { render } from '@testing-library/react'
// import { ThemeProvider } from "my-ui-lib"
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { en, hi } from 'make-plural/plurals'

import { messages } from '../locale/en/messages'

i18n.load({
  en: messages,
})
i18n.loadLocaleData({
  en: { plurals: en },
  hi: { plurals: hi },
})

const Providers = ({ children }) => {
  return (
    <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
      {children}
    </I18nProvider>
  )
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
