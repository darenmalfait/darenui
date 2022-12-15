import {MetaFunction} from '@remix-run/node'
import * as React from 'react'

import {DocumentBuilder} from '../components/document-builder'

const description =
  'Container is a container that can be used to group content. Works best as a child of Grid.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Container',
    description,
  }
}

const containerPropTypes = [
  {
    property: 'children',
    type: ['React.ReactNode'],
    default: '',
    values: [],
    description: 'Children of the Container',
  },
  {
    property: 'size',
    type: ['small', 'default', 'medium', 'full'],
    default: 'default',
    values: ['small', 'default', 'medium', 'full'],
    description: 'Size of the Container',
  },
]

const propList = [
  {
    name: 'Container',
    value: 'container',
    propTypes: containerPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<Grid nested>
  <Container>
    <div>Hello world</div>
    <div>Hello world</div>
  </Container>
</Grid>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Size',
    files: [
      {
        name: 'index.tsx',
        code: `<Grid nested>
  <Container size="small">
    <div>Hello world</div>
    <div>Hello world</div>
  </Container>
  <Container size="default">
    <div>Hello world</div>
    <div>Hello world</div>
  </Container>
  <Container size="medium">
    <div>Hello world</div>
    <div>Hello world</div>
  </Container>
  <Container size="fill">
    <div>Hello world</div>
    <div>Hello world</div>
  </Container>
</Grid>`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'Container',
  importer: `import { Container } from '@daren/ui-components'`,
  packageName: 'layout-components',
  demoList,
  propList,
  description,
}

export default function ContainerPage() {
  return <DocumentBuilder component={component} />
}
