import { ThemeProvider } from '@daren/ui-components'
import type { GlobalProvider } from '@ladle/react'
import * as React from 'react'

import '../packages/theme/dist/darenui.css'
import '../styles/styles.output.css'

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <ThemeProvider>
    <div className={globalState.theme}>
      <div className="text-primary">{children}</div>
    </div>
  </ThemeProvider>
)
