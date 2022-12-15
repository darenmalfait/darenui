import {MetaFunction} from '@remix-run/node'
import * as React from 'react'

import {DocumentBuilder} from '../components/document-builder'

const description =
  'NavigationList is a list of navigation items that can be used to build a navigation menu.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui NavigationList',
    description,
  }
}

const navigationListPropTypes = [
  {
    property: 'children',
    type: ['React.ReactNode'],
    default: '',
    values: [],
    description: 'Children of the NavigationList',
  },
]

const navigationListItemPropTypes = [
  {
    property: 'title',
    type: ['string'],
    default: '',
    values: [],
    description: 'Title of the navigation item',
  },
  {
    property: 'href',
    type: ['string'],
    default: '',
    values: [],
    description: 'Href of the navigation item',
  },
  {
    property: 'icon',
    type: ['React.ReactNode'],
    default: '',
    values: [],
    description: 'Icon of the navigation item',
  },
]

const propList = [
  {
    name: 'NavigationList',
    value: 'navigationList',
    propTypes: navigationListPropTypes,
  },
  {
    name: 'NavigationList.Item',
    value: 'navigationList.Item',
    propTypes: navigationListItemPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<NavigationList>
  <div className="divide-y divide-gray-300">
    <div className="py-1">
      <NavigationList.Item icon={CogIcon} title="Item 1" />
      <NavigationList.Item icon={CogIcon} title="Item 2" />
      <NavigationList.Item icon={CogIcon} title="Item 3" />
      </div>
      <div className="py-1">
      <NavigationList.Item icon={CogIcon} title="Item 3" />
      <NavigationList.Item icon={CogIcon} title="Item 4" />
      <NavigationList.Item icon={CogIcon} title="Item 5" />
    </div>
  </div>
</NavigationList>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Advanced',
    files: [
      {
        name: 'index.tsx',
        code: `<NavigationList>
<div className="divide-y divide-gray-300">
    <div className="py-1">
      <NavigationList.Item icon={CogIcon} title="Item 1" />
      <NavigationList.Item
        href="/item-2"
        title="Item 2"
        className={getNavigationItemClassName()}
      />
      <NavigationList.Item title="Item 3" />
    </div>
  </div>
</NavigationList>`,
      },
    ],
    openEditor: false,
  },
]

const component = {
  name: 'NavigationList',
  importer: `import { NavigationList } from '@daren/ui-components'`,
  packageName: 'navigation-list',
  demoList,
  propList,
  description,
}

export default function NavigationListPage() {
  return <DocumentBuilder component={component} />
}
