import {MetaFunction} from '@remix-run/node'
import * as React from 'react'

import {DocumentBuilder} from '../components/document-builder'

const description = 'Title is a heading component.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Title',
    description,
  }
}

const titlePropTypes = [
  {
    property: 'variant',
    type: ['primary', 'secondary'],
    default: 'primary',
    values: ['primary', 'secondary'],
    description: 'Controls title appearance',
  },
  {
    property: 'children',
    type: ['React.ReactNode'],
    default: '',
    values: [],
    description: 'The content of the component.',
  },
]

const propList = [
  {
    name: 'Title',
    value: 'title',
    propTypes: titlePropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8 space-y-2">
  <H1>Heading 1</H1>
  <H2>Heading 2</H2>
  <H3>Heading 3</H3>
  <H4>Heading 4</H4>
  <H5>Heading 5</H5>
  <H6>Heading 6</H6>
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
        code: `<div className="p-8 space-y-2">
  <H2 variant="primary">Primary</H2>
  <H2 variant="secondary">Secondary</H2>
</div>`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'Title',
  importer: `import { H1, H2, H3, H4, H5, H6 } from '@daren/ui-components'`,
  packageName: 'typography',
  demoList,
  propList,
  description,
}

export default function TitlePage() {
  return <DocumentBuilder component={component} />
}
