import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description =
  'Buttons trigger an action such as submitting a form or showing/hiding an interface component.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Button',
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
  {
    property: 'variant',
    type: ['primary', 'secondary', 'success', 'danger'],
    default: 'primary',
    values: ['primary', 'secondary', 'success', 'danger'],
    description: 'Controls button appearance',
  },
  {
    property: 'size',
    type: ['small', 'medium', 'large'],
    default: 'medium',
    values: ['small', 'medium', 'large'],
    description: 'The size of the button.',
  },
  {
    property: 'disabled',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Makes button disabled ',
  },
]

const propList = [
  {
    name: 'Button',
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
  <Button>Click me</Button>
</div>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Variants',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="flex flex-wrap w-full p-8 gap-2">
  <Button>Button</Button>
  <Button variant="primary">Button</Button>
  <Button variant="secondary">Button</Button>
  <Button variant="success">Button</Button>
  <Button variant="danger">Button</Button>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: 'Disabled',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <Button disabled>Button</Button>
</div>`,
        readOnly: false,
      },
    ],
  },
]

const component = {
  name: 'Button',
  importer: `import { Button } from '@daren/ui-components'`,
  demoList,
  propList,
  description,
}

export default function ButtonPage() {
  return <DocumentBuilder component={component} />
}
