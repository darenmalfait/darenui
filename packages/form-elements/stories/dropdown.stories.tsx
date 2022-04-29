import * as React from 'react'

import { Dropdown } from '../lib'

export default {
  title: 'Form Elements/Dropdown',
  component: Dropdown,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

const items = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
]

export function dropdown() {
  return (
    <div>
      <Dropdown name="example" items={items} />
    </div>
  )
}

export function withError() {
  return (
    <div>
      <Dropdown hasError={true} name="example" items={items} />
    </div>
  )
}
