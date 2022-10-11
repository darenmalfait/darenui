import darenStyles from '@daren/theme/dist/darenui.css'
import {
  json,
  LinksFunction,
  LoaderArgs,
  MetaFunction,
  SerializeFrom,
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import clsx from 'clsx'

import { AppProviders } from './context/app-providers'
import { PreventFlashOnWrongTheme, useTheme } from './context/theme-provider'
import { Layout } from './layouts/layout'

import { getThemeSession } from './lib/services/theme.server'

import tailwindStylesheetUrl from './styles/tailwind.css'

export const meta: MetaFunction = () => {
  return { title: 'Darenui' }
}

const fonts = [
  '/fonts/inter/inter-regular.woff2',
  '/fonts/inter/inter-bold.woff2',
  '/fonts/inter/inter-black.woff2',
  '/fonts/lora/lora-regular.woff2',
]

export const links: LinksFunction = () => {
  return [
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'icon',
      href: '/favicon.ico',
      sizes: 'any',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
    ...fonts.map((href: string) => ({
      rel: 'preload',
      as: 'font',
      href,
      type: 'font/woff2',
      // this is giving an typescript error, but why?? Hence the as any
      crossOrigin: 'anonymous' as any,
    })),
    { rel: 'stylesheet', href: tailwindStylesheetUrl },
    { rel: 'stylesheet', href: darenStyles },
  ]
}

export async function loader({ request }: LoaderArgs) {
  const { getTheme } = await getThemeSession(request)

  return json({
    theme: getTheme(),
  })
}

function Document({
  children,
  theme: ssrTheme,
}: SerializeFrom<typeof loader> & { children: React.ReactNode }) {
  const [theme] = useTheme()

  return (
    <html lang="en" className={clsx(theme, 'h-full')}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(ssrTheme)} />
      </head>
      <body className="grid min-h-screen grid-cols-1 grid-rows-1 overflow-x-hidden bg-primary text-primary">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function App() {
  const loaderData = useLoaderData<typeof loader>()

  return (
    <AppProviders {...loaderData}>
      <Document {...loaderData}>
        <Layout>
          <Outlet />
        </Layout>
      </Document>
    </AppProviders>
  )
}
