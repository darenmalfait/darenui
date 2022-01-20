import * as React from 'react'

import { Paragraph } from '../lib'

export default {
  title: 'Paragraph',
  component: Paragraph,
  argTypes: {
    prose: {
      defaultValue: false,
      control: 'boolean',
    },
  },
}

export function paragraph({ prose }: any) {
  return (
    <div className="flex flex-col space-y-4">
      <Paragraph prose={prose}>Title goes here.</Paragraph>
    </div>
  )
}
