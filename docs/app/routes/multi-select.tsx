import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description =
  'MultiSelect is a form control that allows users to search and multiSelect multiple items from a list with a label, error and description.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui MultiSelect',
    description,
  }
}

const multiSelectPropTypes = [
  {
    property: 'title',
    type: ['string'],
    default: false,
    values: [],
    description: 'Select label',
  },
  {
    property: 'description',
    type: ['string'],
    default: false,
    values: [],
    description: 'Select description',
  },
  {
    property: 'disabled',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Makes multiSelect disabled',
  },
  {
    property: 'error',
    type: ['string'],
    default: false,
    values: [],
    description: 'Adds an error to the multiSelect',
  },
  {
    property: 'icon',
    type: ['React.ReactNode'],
    default: '',
    description: 'Icon to be displayed on the side of the multiSelect',
  },
]

const propList = [
  {
    name: 'MultiSelect',
    value: 'multiSelect',
    propTypes: multiSelectPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <MultiSelect
    name="multi-select-basic"
    label="Select label"
    description="Select description"
    items={[
      {label: 'Item 1', value: '1'},
      {label: 'Item 2', value: '2'},
    ]}
  />
</div>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Icon',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <MultiSelect
    label="Select label"
    name="multi-select-icon"
    icon={MagnifyingGlassIcon}
    items={[
      {label: 'Item 1', value: '1'},
      {label: 'Item 2', value: '2'},
    ]}
  />
</div>`,
      },
    ],
    openEditor: false,
  },
  {
    name: 'hasError',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <MultiSelect
    label="Select label"
    error="this multiSelect has an error"
    items={[
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
  ]} />
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
  <MultiSelect 
    label="Select label"
    disabled 
    items={[
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
  ]} />
</div>`,
        readOnly: false,
      },
    ],
  },
]

const component = {
  name: 'MultiSelect',
  importer: `import { MultiSelect } from '@daren/ui-components'`,
  packageName: 'form-elements',
  demoList,
  propList,
  description,
}

export default function MultiSelectPage() {
  return <DocumentBuilder component={component} />
}
