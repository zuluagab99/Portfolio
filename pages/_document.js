import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'
import Script from 'next/script'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript">
          </Script>
        </Head>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
