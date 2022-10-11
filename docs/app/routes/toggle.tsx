import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description =
  'Toggle is a form control that allows users to toggle between two states.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Toggle',
    description,
  }
}

const togglePropTypes = [
  {
    property: 'label',
    type: ['string'],
    default: false,
    values: [],
    description: 'SR only label for the toggle',
  },
  {
    property: 'disabled',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Makes toggle disabled',
  },
  {
    property: 'onChange',
    type: ['(value: boolean) => void'],
    default: false,
    values: [],
    description: 'Callback function when toggle is changed',
  },
  {
    property: 'defaultValue',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Default value of the toggle',
  },
  {
    property: 'activeColorClass',
    type: ['string'],
    default: 'bg-green-500',
    values: [],
    description: 'Active color of the toggle',
  },
  {
    property: 'inactiveColorClass',
    type: ['string'],
    default: 'bg-gray-200',
    values: [],
    description: 'Inactive color of the toggle',
  },
]

const propList = [
  {
    name: 'Toggle',
    value: 'toggle',
    propTypes: togglePropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <Toggle name="toggle-basic" label="toggle label" />
</div>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Default Value',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <Toggle name="toggle-on" defaultValue={true} label="toggle label" />
</div>`,
      },
    ],
    openEditor: false,
  },
  {
    name: 'Colors',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8 flex flex-row gap-2">
  <Toggle activeColorClass="bg-danger" name="toggle-color-on" defaultValue={true} label="toggle label" />
  <Toggle inactiveColorClass="bg-blue-500" name="toggle-color-off" defaultValue={false} label="toggle label" />
</div>`,
      },
    ],
    openEditor: false,
  },
  {
    name: 'Disabled',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <Toggle disabled />
</div>`,
        readOnly: false,
      },
    ],
  },
]

const component = {
  name: 'Toggle',
  importer: `import { Toggle } from '@daren/ui-components'`,
  demoList,
  propList,
  description,
}

export default function TogglePage() {
  return <DocumentBuilder component={component} />
}
