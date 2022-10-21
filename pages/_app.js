import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>18572 Cull Canyon</title>
        </Head>
      <Component {...pageProps} />
      </>
  )
}
export default MyApp
