import * as React from 'react'

import { Input } from '../lib'

export default {
  title: 'Form Elements',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'textarea'],
      control: { type: 'radio' },
      defaultValue: 'text',
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
}

export function input({ type, hasError }: any) {
  return (
    <div>
      <Input type={type} hasError={hasError} />
    </div>
  )
}
