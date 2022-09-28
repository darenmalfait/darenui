import { CogIcon } from '@heroicons/react/24/solid'
import * as React from 'react'

import { NavigationList, getNavigationItemClassName } from '../lib'

export default {
  title: 'Components',
  component: NavigationList,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export function navigationList() {
  return (
    <div>
      <NavigationList>
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
          <div className="py-1">
            <NavigationList.Item
              title="Item 2"
              className={getNavigationItemClassName({
                textClassNames: 'text-gray-500 hover:text-indigo-400',
                backgroundClassNames: 'bg-transparent',
              })}
            />
          </div>
        </div>
      </NavigationList>
    </div>
  )
}
