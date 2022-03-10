import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import StylesProvider from '@mui/styles/StylesProvider'
import '../styles/globals.scss'
import theme from '../src/theme'
import { CssBaseline } from '@mui/material'
import { init } from '../utils/sentry'
import Router from 'next/router'
import NProgress from 'nprogress'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import { activate, detectAndSetLocale } from '../utils/i18n'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache'
import Head from 'next/head'
import Layout from '../src/components/layout'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  err?: any
}

init()

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// Activate for static build
activate('en')

function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    err,
  } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
    // Activate translation on client side after locale detection
    // TODO: To be implemented
    detectAndSetLocale()
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <CssBaseline />
            <I18nProvider i18n={i18n}>
              <Layout>
                <Component {...pageProps} err={err} />
              </Layout>
            </I18nProvider>
          </StylesProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  )
}

export default MyApp
