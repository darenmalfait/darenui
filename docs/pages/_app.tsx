import {Inter as interFont} from '@next/font/google'

import {LazyMotion, domAnimation} from 'framer-motion'
import type {AppProps} from 'next/app'

import {Layout} from '../components/layout'
import {AppProviders} from '../context/app-providers'

import '@daren/theme/dist/darenui.css'

import '../styles/styles.css'

export const inter = interFont({
  variable: '--font-inter',
  subsets: ['latin'],
})

const App = ({
  Component,
  pageProps,
}: AppProps<{
  sections?: {id: string; title: string}[]
  description?: string
  title?: string
  pkg?: string
  metaTitle?: string
}>) => {
  return (
    <AppProviders sections={pageProps.sections ?? []}>
      <LazyMotion features={domAnimation}>
        <main className={`${inter.variable} font-sans`}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </main>
      </LazyMotion>
    </AppProviders>
  )
}

export default App
