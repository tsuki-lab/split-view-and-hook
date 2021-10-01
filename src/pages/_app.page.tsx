import Head from 'next/head'
import Link from 'next/link'
import type { AppProps } from 'next/app'
import { pagesPath } from '@/lib/$path'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="try page-extensions" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css" />
      </Head>
      <Link href={pagesPath.$url()}>
        <a>TOP</a>
      </Link>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
