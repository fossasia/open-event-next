import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'
import { AppProps } from 'next/app'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import '../styles/globals.css'
import theme from '../src/theme'
import { CssBaseline } from '@material-ui/core'
import { init } from '../utils/sentry'

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
  }, [])
  return (
    <div>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Component {...pageProps} err={err} />
        </StylesProvider>
      </ThemeProvider>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <nav>
        <style jsx>{`
          a {
            margin: 0 10px 0 0;
          }
        `}</style>
        <Link href="/">
          <a></a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
