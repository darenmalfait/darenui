import {ThemeProvider as DarenThemeProvider} from '@daren/theme'
import {ExtractProps, ToastProvider} from '@daren/ui-components'
import {MDXProvider} from '@mdx-js/react'

import * as mdxComponents from '../components/mdx'
import {MobileNavProvider} from './mobile-nav-provider'
import {SectionProvider} from './section-provider'
import {ThemeProvider} from './theme-provider'

type AppProvidersProps = ExtractProps<typeof SectionProvider> & {
  children: React.ReactNode
}

function AppProviders({children, sections}: AppProvidersProps) {
  return (
    <ThemeProvider>
      <DarenThemeProvider>
        <MobileNavProvider>
          <ToastProvider>
            <MDXProvider components={mdxComponents as any}>
              <SectionProvider sections={sections}>{children}</SectionProvider>
            </MDXProvider>
          </ToastProvider>
        </MobileNavProvider>
      </DarenThemeProvider>
    </ThemeProvider>
  )
}

export {AppProviders}
