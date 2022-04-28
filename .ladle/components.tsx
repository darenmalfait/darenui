import { ThemeProvider } from '@daren/ui-components'
import { GlobalState } from '@ladle/react/lib/shared/types'
import * as React from 'react'

import '../packages/theme/dist/darenui.css'
import '../styles/styles.output.css'

export const Provider = ({ children, globalState }: {
  children: React.ReactNode
  globalState: GlobalState
}) => (
  <ThemeProvider>
    <div className={globalState.theme}>
      <div className="text-primary">{children}</div>
    </div>
  </ThemeProvider>
)
