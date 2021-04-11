import React from 'react'
import { AppProps } from 'next/app'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import '../styles/globals.css'
import theme from '../src/theme'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Component {...pageProps} />
      </StylesProvider>
    </ThemeProvider>
  )
}

export default MyApp
