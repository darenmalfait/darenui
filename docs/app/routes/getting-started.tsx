import {H1, H2, Paragraph} from '@daren/ui-components'
import {MetaFunction} from '@remix-run/node'

import {CodeBlock} from '../components/code-block'
import {Ide} from '../components/ide'
import {Section} from '../components/layout-components'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Getting Started',
    description: 'Getting started with Darenui',
  }
}

const configFiles = [
  {
    name: 'tailwind.config.js',
    code: `module.exports = {
  mode: 'jit',
  content: [
    // ... paths that use tailwind
    './node_modules/@daren/**/*.{js,ts,jsx,tsx}', // path to daren
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@daren/ui-core')], 
}`,
  },
  {
    name: 'postcss.config.js',
    code: `module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
}`,
  },
]

export default function GettingStartedPage() {
  return (
    <>
      <Section>
        <H1>Getting started</H1>
        <Paragraph>
          To install the component-library run the following within your project
          directory.
        </Paragraph>
        <CodeBlock showClipBoard>
          <code className="language-bash">
            npm i @daren/ui-core @daren/ui-components postcss tailwindcss
            @tailwindcss/typography @heroicons/react@2
          </code>
        </CodeBlock>
      </Section>
      <Section>
        <H2>Configuration</H2>
        <Paragraph>
          The theme of this library depends on the @tailwindcss/typography
          plugin. To use it, follow the steps on the plugin source page.
          https://github.com/tailwindlabs/tailwindcss-typography
        </Paragraph>
        <Ide codeBlock={true} files={configFiles} openEditor={true} />
        <Paragraph>
          Then you need a global css file which you import at the root of the
          project
        </Paragraph>
        <CodeBlock showClipBoard>
          <code className="language-css">
            {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
          </code>
        </CodeBlock>
      </Section>
      <Section>
        <H2>Quick Start</H2>
        <CodeBlock>
          <code className="language-tsx">
            {`import * as React from 'react'
import {ThemeProvider, H1} from '@daren/ui-components'
import '@daren/theme/dist/darenui.css'

function App() {
  return (
    <ThemeProvider>
      <H1>Hello Daren</H1>
    </ThemeProvider>
  )
}`}
          </code>
        </CodeBlock>
      </Section>
    </>
  )
}
