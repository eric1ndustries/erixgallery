import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${figtree.className} flex min-h-screen flex-col items-center justify-between p-24`}>
      <Component {...pageProps} />
    </main>
  )
}
