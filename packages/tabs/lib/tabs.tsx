import { cx, ExtractProps } from '@daren/utils'
import { Tab } from '@headlessui/react'
import * as React from 'react'

function Tabs({
  keys,
  children,
}: JSX.IntrinsicElements['div'] & {
  keys: string[]
}) {
  return (
    <div className="w-full space-y-8">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl p-1 bg-secondary">
          {keys.map(key => (
            <Tab
              key={key}
              className={({ selected }) =>
                cx(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-opacity-60 focus:outline-none focus-ring',
                  selected
                    ? 'bg-gray-900 dark:bg-white shadow text-white dark:text-black'
                    : 'text-primary',
                )
              }
            >
              {key}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>{children}</Tab.Panels>
      </Tab.Group>
    </div>
  )
}

function Item({
  children,
  className,
  ...rest
}: ExtractProps<typeof Tab.Panel>) {
  return (
    <Tab.Panel className={cx('outline-none', className)} {...rest}>
      {children}
    </Tab.Panel>
  )
}

Tabs.Item = Item

export { Tabs, Item }
