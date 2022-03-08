import * as React from 'react'

import { DropdownField, Field } from '../lib'

export default {
  title: 'Form Elements',
  component: Field,
  argTypes: {
    type: {
      options: ['text', 'textarea'],
      control: { type: 'radio' },
      defaultValue: 'text',
    },
    error: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
}

export function field({ type, error, description }: any) {
  return (
    <div>
      <Field
        name="formfield"
        label="form field"
        type={type}
        error={error}
        description={description}
      />
    </div>
  )
}

export function dropdownField({ error, description }: any) {
  const items = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
  ]

  return (
    <div>
      <DropdownField
        name="formfield"
        label="form field"
        items={items}
        error={error}
        description={description}
      />
    </div>
  )
}
