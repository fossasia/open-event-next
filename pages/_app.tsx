import { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import '../styles/globals.css'
import theme from '../src/theme'
import { CssBaseline } from '@mui/material'
import { init } from '../utils/sentry'
import Router from 'next/router'
import NProgress from 'nprogress'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache'
import { activate, detectAndSetLocale } from '../utils/i18n'

init()

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// Activate for static build
activate('en')

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  useEffect(() => {
    detectAndSetLocale()
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
