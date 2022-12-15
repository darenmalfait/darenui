import {MetaFunction} from '@remix-run/node'
import * as React from 'react'

import {DocumentBuilder} from '../components/document-builder'

const description = 'Section is a container that can be used to group content.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Section',
    description,
  }
}

const sectionPropTypes = [
  {
    property: 'children',
    type: ['React.ReactNode'],
    default: '',
    values: [],
    description: 'Children of the Section',
  },
]

const propList = [
  {
    name: 'Section',
    value: 'section',
    propTypes: sectionPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<Section>
  <div>Hello world</div>
  <div>Hello world</div>
</Section>`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'Section',
  importer: `import { Section } from '@daren/ui-components'`,
  packageName: 'layout-components',
  demoList,
  propList,
  description,
}

export default function SectionPage() {
  return <DocumentBuilder component={component} />
}
