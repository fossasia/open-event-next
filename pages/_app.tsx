import React from 'react'
import { AppProps } from 'next/app'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import '../styles/globals.css'
import theme from '../src/theme'
import { CssBaseline } from '@material-ui/core'
import { init } from '../utils/sentry'
import Router from 'next/router'
import NProgress from 'nprogress'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import { activate } from '../utils/i18n'

init()

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({
  Component,
  pageProps,
  err,
}: AppProps & { err: any }): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
    activate('en')
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <I18nProvider i18n={i18n}>
          <Component {...pageProps} err={err} />
        </I18nProvider>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default MyApp
