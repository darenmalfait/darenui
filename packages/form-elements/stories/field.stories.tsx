import * as React from 'react'

import { Field } from '../lib'

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
