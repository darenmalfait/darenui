import { ThemeProvider as DarenThemeProvider } from '@daren/theme'
import type { SerializeFrom } from '@remix-run/node'
import * as React from 'react'

import { ThemeProvider } from './theme-provider'

import { loader } from '../root'

import { NavigationProvider } from '~/components/navigation-provider'

interface AppProvidersProps
  extends Pick<SerializeFrom<typeof loader>, 'theme'> {
  children: React.ReactNode
}

function AppProviders({ theme, children }: AppProvidersProps) {
  return (
    <ThemeProvider specifiedTheme={theme}>
      <DarenThemeProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </DarenThemeProvider>
    </ThemeProvider>
  )
}

export { AppProviders }
