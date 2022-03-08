import * as React from 'react'

import { Dropdown } from '../lib'

export default {
  title: 'Form Elements',
  component: Dropdown,
  argTypes: {
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
}

const items = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
]

export function dropdown({ hasError }: any) {
  return (
    <div>
      <Dropdown name="example" items={items} hasError={hasError} />
    </div>
  )
}
