import Head from 'next/head'
import '@ds-pack/components/src/reset.css'
import '../global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Title</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
