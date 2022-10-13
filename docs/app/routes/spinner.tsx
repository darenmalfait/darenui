import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description = 'Spinner is a loading indicator.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Spinner',
    description,
  }
}

const spinnerPropTypes = [
  {
    property: 'size',
    type: ['xs', 'sm', 'md', 'lg', 'xl'],
    default: '',
    values: ['xs', 'sm', 'md', 'lg', 'xl'],
    description: 'Size of the spinner',
  },
  {
    property: 'className',
    type: ['string'],
    default: '',
    values: [],
    description: 'Additional class name to apply to the spinner',
  },
]

const propList = [
  {
    name: 'Spinner',
    value: 'spinner',
    propTypes: spinnerPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="flex flex-wrap w-full p-8 space-x-2">
  <Spinner />
  <Spinner className="text-green-400" />
</div>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Size',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="flex flex-wrap w-full p-8 space-x-2">
  <Spinner size="xs" />
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
  <Spinner size="xl" />
</div>`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'Spinner',
  importer: `import { Spinner } from '@daren/ui-components'`,
  demoList,
  propList,
  description,
}

export default function SpinnerPage() {
  return <DocumentBuilder component={component} />
}
