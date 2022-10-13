import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description = 'Tabs is a container that can be used to group content.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Tabs',
    description,
  }
}

const tabsPropTypes = [
  {
    property: 'children',
    type: ['Tabs.Item[]'],
    default: '',
    values: [],
    description: 'Children of the Tabs',
  },
  {
    property: 'keys',
    type: ['string[]'],
    default: '',
    values: [],
    description: 'The values that will be used as the keys for the Tabs',
  },
]

const tabsItemPropTypes = [
  {
    property: 'children',
    type: ['React.ReactNode'],
    default: '',
    values: [],
    description: 'Children of the Tabs.Item',
  },
]

const propList = [
  {
    name: 'Tabs',
    value: 'tabs',
    propTypes: tabsPropTypes,
  },
  {
    name: 'Tabs.Item',
    value: 'tabsItem',
    propTypes: tabsItemPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<Tabs keys={['tab 1', 'tab 2', 'tab 3']}>
  <Tabs.Item>tab 1</Tabs.Item>
  <Tabs.Item>tab 2</Tabs.Item>
  <Tabs.Item>tab 3</Tabs.Item>
</Tabs>`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'Tabs',
  importer: `import { Tabs } from '@daren/ui-components'`,
  demoList,
  propList,
  description,
}

export default function TabsPage() {
  return <DocumentBuilder component={component} />
}
