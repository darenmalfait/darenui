import localFont from '@next/font/local'

import {LazyMotion, domAnimation} from 'framer-motion'
import type {AppProps} from 'next/app'

import {Layout} from '../components/layout'
import {AppProviders} from '../context/app-providers'

import '@daren/theme/dist/darenui.css'

import '../styles/styles.css'

const cal = localFont({
  src: '../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-cal',
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
        <main className={`${cal.variable} font-sans`}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </main>
      </LazyMotion>
    </AppProviders>
  )
}

export default App
