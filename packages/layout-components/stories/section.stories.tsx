import * as React from 'react'

import { Section } from '../lib'

export default {
  title: 'Layout Components',
  component: Section,
  argTypes: {
    as: {
      control: 'text',
      defaultValue: 'section',
    },
  },
}

export function section({ as }: any) {
  return (
    <div>
      <Section as={as}>content</Section>
    </div>
  )
}
