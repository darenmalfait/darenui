import {themes} from '@storybook/theming'
import * as React from 'react'

import {DocsContainer} from './docs-container'

import {ThemeProvider} from '../packages/theme'
import '../packages/theme/dist/darenui.css'

import '!style-loader!css-loader!postcss-loader!../styles/styles.output.css'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  viewMode: 'docs',
  docs: {
    // theme: themes.dark,
    container: DocsContainer,
  },
  darkMode: {
    // Set the initial theme
    stylePreview: true,
    current: 'light',
    dark: {...themes.dark},
    light: {...themes.light},
  },
}

const withDarenui = (StoryFn: any) => {
  return (
    <ThemeProvider>
      <StoryFn />
    </ThemeProvider>
  )
}

export const decorators = [withDarenui]
