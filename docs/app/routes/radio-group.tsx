import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description =
  'RadioGroup is a group of radio buttons that can be used to select a single value.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui RadioGroup',
    description,
  }
}

const radioGroupPropTypes = [
  {
    property: 'children',
    type: ['React.ReactNode'],
    default: '',
    values: [],
    description: 'Children of the RadioGroup',
  },
]

const radioGroupItemPropTypes = [
  {
    property: 'value',
    type: ['string'],
    default: '',
    values: [],
    description: 'Value of the RadioGroup item',
  },
  {
    property: 'label',
    type: ['string'],
    default: '',
    values: [],
    description: 'Label of the RadioGroup item',
  },
  {
    property: 'description',
    type: ['string'],
    default: '',
    values: [],
    description: 'Description of the RadioGroup item',
  },
]

const propList = [
  {
    name: 'RadioGroup',
    value: 'radioGroup',
    propTypes: radioGroupPropTypes,
  },
  {
    name: 'RadioGroup.Item',
    value: 'radioGroup.Item',
    propTypes: radioGroupItemPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <RadioGroup name="radio-group-name">
    <RadioGroup.Option value="first" label="first option" description="Description of the first option" />
    <RadioGroup.Option value="second" label="second option" description="Description of the second option" />
    <RadioGroup.Option value="third" label="third option" description="Description of the third option" />
  </RadioGroup>
</div>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Without Description',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <RadioGroup name="radio-group-name-without-description">
    <RadioGroup.Option value="first" label="first option" />
    <RadioGroup.Option value="second" label="second option" />
    <RadioGroup.Option value="third" label="third option" />
  </RadioGroup>
</div>`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'RadioGroup',
  importer: `import { RadioGroup } from '@daren/ui-components'`,
  packageName: 'form-elements',
  demoList,
  propList,
  description,
}

export default function RadioGroupPage() {
  return <DocumentBuilder component={component} />
}
