import * as React from 'react'

import { Dropdown, DropdownField } from '../lib'

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

export function dropdownField() {
  const items = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
  ]

  return (
    <div>
      <DropdownField name="formfield" label="form field" items={items} />
    </div>
  )
}
