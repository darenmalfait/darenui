import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from '@storybook/addon-docs/blocks'
import { themes } from '@storybook/theming'
import * as React from 'react'
import { useDarkMode } from 'storybook-dark-mode'

function DocsContainer({
  children,
  context,
}: DocsContainerProps & { children: React.ReactNode }) {
  const dark = useDarkMode()

  return (
    // @ts-ignore functioncomponent does not automatically accept children, but we need it
    <BaseContainer
      context={{
        ...context,
        storyById: id => {
          const storyContext = context.storyById(id)
          return {
            ...storyContext,
            parameters: {
              ...storyContext.parameters,
              docs: {
                ...storyContext.parameters.docs,
                theme: dark ? themes.dark : themes.light,
              },
            },
          }
        },
      }}
    >
      {children}
    </BaseContainer>
  )
}

export { DocsContainer }
