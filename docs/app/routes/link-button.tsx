import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description =
  'LinkButtons look like links, but act like buttons. They are used to trigger actions in your app. They are a wrapper around the Button component.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui LinkButton',
    description,
  }
}

const buttonPropTypes = [
  {
    property: 'onClick',
    type: ['function'],
    default: '',
    values: [],
    description: 'The function to call when the button is clicked.',
  },
]

const propList = [
  {
    name: 'LinkButton',
    value: 'button',
    propTypes: buttonPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <LinkButton>Click me</LinkButton>
</div>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Disabled',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <LinkButton disabled>LinkButton</LinkButton>
</div>`,
        readOnly: false,
      },
    ],
  },
]

const component = {
  name: 'LinkButton',
  importer: `import { LinkButton } from '@daren/ui-components'`,
  demoList,
  propList,
  description,
}

export default function LinkButtonPage() {
  return <DocumentBuilder component={component} />
}
