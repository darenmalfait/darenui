import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description =
  'Field is a form control that allows users to enter text with a label and description.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Field',
    description,
  }
}

const inputPropTypes = [
  {
    property: 'type',
    type: [
      'text',
      'textarea',
      'password',
      'email',
      'number',
      'search',
      'tel',
      'url',
    ],
    default: 'text',
    values: [
      'text',
      'textarea',
      'password',
      'email',
      'number',
      'search',
      'tel',
      'url',
    ],
    description: 'Type of the input',
  },
  {
    property: 'inputSize',
    type: ['sm', 'md', 'lg'],
    default: 'md',
    values: ['sm', 'md', 'lg'],
    description: 'Size of the input',
  },
  {
    property: 'disabled',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Makes input disabled',
  },
  {
    property: 'hasError',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Makes input invalid',
  },
  {
    property: 'icon',
    type: ['React.ReactNode'],
    default: '',
    description: 'Icon to be displayed on the side of the input',
  },
]

const propList = [
  {
    name: 'Field',
    value: 'input',
    propTypes: inputPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <Field label="field label" description="description" name="basic"  />
</div>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'error',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <Field label="field with errors" error="this field has errors" />
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
  <Field label="disabled field" disabled />
</div>`,
        readOnly: false,
      },
    ],
  },
]

const component = {
  name: 'Field',
  importer: `import { Field } from '@daren/ui-components'`,
  packageName: 'form-elements',
  demoList,
  propList,
  description,
}

export default function FieldPage() {
  return <DocumentBuilder component={component} />
}
