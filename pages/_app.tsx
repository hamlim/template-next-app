import * as React from 'react'
import { ThemeProvider } from '@matthamlin/component-library'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Title</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
