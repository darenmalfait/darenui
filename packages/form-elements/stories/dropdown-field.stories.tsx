import * as React from 'react'

import { DropdownField } from '../lib'

export default {
  title: 'Form Elements / Dropdown / DropdownField',
  component: DropdownField,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
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
