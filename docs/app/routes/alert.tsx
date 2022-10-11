import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description = 'Alerts show information that need attention.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Alert',
    description,
  }
}

const alertPropTypes = [
  {
    property: 'type',
    type: ['danger', 'warning', 'success', 'info'],
    default: 'info',
    values: ['danger', 'warning', 'success', 'info'],
    description: 'Controls alert appearance',
  },
  {
    property: 'hideIcon',
    type: ['boolean'],
    default: false,
    description: 'Hides alert icon',
  },
  {
    property: 'title',
    type: ['string'],
    default: '',
    values: [],
    description: 'Alert title',
  },
  {
    property: 'description',
    type: ['React.ReactNode'],
    default: '',
    values: [],
    description: 'Alert description',
  },
]

const propList = [
  {
    name: 'Alert',
    value: 'alert',
    propTypes: alertPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<Alert title="example" description="example description" />`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Types',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="flex flex-col w-full space-y-4">
  <Alert title="example" description="example description" />
  <Alert type="danger" title="example" description="example description" />
  <Alert type="warning" title="example" description="example description" />
  <Alert type="success" title="example" description="example description" />
  <Alert type="info" title="example" description="example description" />
</div>`,
        readOnly: false,
      },
    ],
  },
]

const component = {
  name: 'Alert',
  importer: `import { Alert } from '@daren/ui-components'`,
  demoList,
  propList,
  description,
}

export default function AlertPage() {
  return <DocumentBuilder component={component} />
}
