import {MetaFunction} from '@remix-run/node'
import * as React from 'react'

import {DocumentBuilder} from '../components/document-builder'

const description =
  'CheckboxField is a form control that allows users to an option together with a label and potentional error.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui CheckboxField',
    description,
  }
}

const checkboxFieldPropTypes = [
  {
    property: 'variant',
    type: ['sm', 'md', 'lg'],
    default: 'md',
    values: ['sm', 'md', 'lg'],
    description: 'Size of the checkboxField',
  },
  {
    property: 'disabled',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Makes checkboxField disabled',
  },
  {
    property: 'defaultChecked',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'The checkboxField will be initially checked',
  },
  {
    property: 'value',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'The checkboxField will be checked',
  },
  {
    property: 'id',
    type: ['string'],
    default: '',
    values: [],
    description: 'CheckboxField id',
  },
  {
    property: 'name',
    type: ['string'],
    default: '',
    values: [],
    description: 'CheckboxField name',
  },
  {
    property: 'error',
    type: ['string'],
    default: '',
    values: [],
    description: 'CheckboxField error',
  },
  {
    property: 'onChange',
    type: ['React.ChangeEventHandler<HTMLInputElement>'],
    default: '',
    values: [],
    description:
      'The callback invoked when the checked state of the `CheckboxField` changes..',
  },
]

const propList = [
  {
    name: 'CheckboxField',
    value: 'checkboxField',
    propTypes: checkboxFieldPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div label="checkbox label" className="p-8">
  <CheckboxField name="input-name" label="checkbox label" />
</div>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Variant',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="flex gap-2 items-center p-8">
    <CheckboxField name="input-lg" label="checkbox label" variant="lg" />
    <CheckboxField name="input-md" label="checkbox label" variant="md" />
    <CheckboxField name="input-sm" label="checkbox label" variant="sm" />
</div>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Classes',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="flex gap-2 items-center p-8">
    <CheckboxField name="input-default" label="checkbox label" defaultChecked />
    <CheckboxField name="input-red" label="checkbox label" defaultChecked bgClassName="text-red-500" />
    <CheckboxField name="input-yellow" label="checkbox label" defaultChecked bgClassName="text-yellow-400" textClassName="text-black" />
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
  <CheckboxField name="input-icon" label="checkbox label" defaultChecked icon={MagnifyingGlassIcon} />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: 'error',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <CheckboxField name="input-error" label="checkbox label" error="this checkbox has an error" />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: 'defaultChecked',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <CheckboxField name="input-default-checked" label="checkbox label" defaultChecked={true} />
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
  <CheckboxField name="input-disabled" label="checkbox label" disabled />
</div>`,
        readOnly: false,
      },
    ],
  },
]

const component = {
  name: 'CheckboxField',
  importer: `import { CheckboxField } from '@daren/ui-components'`,
  packageName: 'form-elements',
  demoList,
  propList,
  description,
}

export default function CheckboxFieldPage() {
  return <DocumentBuilder component={component} />
}
