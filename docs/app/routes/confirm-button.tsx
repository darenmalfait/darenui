import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description =
  'ConfirmButton is a button that requires confirmation before executing an action. It is a wrapper around the Button component.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui ConfirmButton',
    description,
  }
}

const buttonPropTypes = [
  {
    property: 'confirmString',
    type: ['string'],
    default: 'app-name',
    values: [],
    description: 'The string to display in the confirmation dialog.',
  },
  {
    property: 'onConfirm',
    type: ['function'],
    default: '',
    values: [],
    description: 'The function to call when the button is confirmed.',
  },
  {
    property: 'confirmButtonLabel',
    type: ['string'],
    default: 'Yes, Delete it',
    values: [],
    description: 'The label for the confirm button.',
  },
  {
    property: 'cancelButtonLabel',
    type: ['string'],
    default: 'Cancel',
    values: [],
    description: 'The label for the cancel button.',
  },
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
    name: 'ConfirmButton',
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
  <ConfirmButton confirmString="app-name">Click me</ConfirmButton>
</div>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Custom',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <ConfirmButton confirmString="app-name" confirmButtonLabel="custom confirm" cancelButtonLabel="custom cancel">Click me</ConfirmButton>
</div>`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'ConfirmButton',
  importer: `import { ConfirmButton } from '@daren/ui-components'`,
  packageName: 'button',
  demoList,
  propList,
  description,
}

export default function ConfirmButtonPage() {
  return <DocumentBuilder component={component} />
}
