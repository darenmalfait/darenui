import {MetaFunction} from '@remix-run/node'
import * as React from 'react'

import {DocumentBuilder} from '../components/document-builder'

const description =
  'TimePickerField is a form control that allows users to select a time.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui TimePickerField',
    description,
  }
}

const timepickerFieldPropTypes = [
  {
    property: 'label',
    type: ['string'],
    default: false,
    values: [],
    description: 'TimePicker label',
  },
  {
    property: 'description',
    type: ['string'],
    default: false,
    values: [],
    description: 'TimePicker description',
  },
  {
    property: 'error',
    type: ['string'],
    default: false,
    values: [],
    description: 'TimePicker error',
  },
  {
    property: 'icon',
    type: ['React.ReactNode'],
    default: false,
    values: [],
    description: 'Icon to be displayed in the input',
  },
  {
    property: 'disabled',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Makes timepicker-field disabled',
  },
  {
    property: 'onChange',
    type: ['(value: boolean) => void'],
    default: false,
    values: [],
    description: 'Callback function when timepicker-field is changed',
  },
  {
    property: 'defaultValue',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Default value of the timepicker-field',
  },
]

const propList = [
  {
    name: 'TimePickerField',
    value: 'timepicker-field',
    propTypes: timepickerFieldPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <TimePickerField label="timepicker label" description="timepicker description" name="timepicker-field-basic" />
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
  <TimePickerField label="timepicker label" name="timepicker-field-on" defaultValue={new Date()} />
</div>`,
      },
    ],
    openEditor: false,
  },
  {
    name: 'Error',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <TimePickerField label="timepicker label" name="timepicker-error" error="this timepicker has an error" />
</div>`,
      },
    ],
    openEditor: false,
  },
  {
    name: 'Icon',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <TimePickerField label="timepicker label" name="timepicker-field-icon" icon={MagnifyingGlassIcon} />
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
  <TimePickerField label="timepicker label" disabled />
</div>`,
        readOnly: false,
      },
    ],
  },
]

const component = {
  name: 'TimePickerField',
  importer: `import { TimePickerField } from '@daren/ui-components'`,
  packageName: 'form-elements',
  demoList,
  propList,
  description,
}

export default function TimePickerFieldPage() {
  return <DocumentBuilder component={component} />
}
