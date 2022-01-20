import * as React from "react"
import { withPerformance } from "storybook-addon-performance"
import { ThemeProvider } from "@daren/ui-components"

import "./styles.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    stylePreview: true
  }

}

const withTheme = (StoryFn: Function) => {
  return (
    <ThemeProvider>
      <div
        className="space-y-4"
      >
        <StoryFn />
      </div>
    </ThemeProvider>
  )
}

export const decorators = [withTheme, withPerformance]
