import * as React from 'react'

import { Alert } from '../lib'

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    type: {
      options: ['info', 'danger', 'warning', 'success'],
      control: { type: 'radio' },
      defaultValue: 'info',
    },
    description: {
      control: { type: 'text' },
      defaultValue: 'This is a description',
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'This is a title',
    },
  },
}

export function alert({ type, title, description }: any) {
  return (
    <div>
      <Alert type={type} title={title} description={description} />
    </div>
  )
}
