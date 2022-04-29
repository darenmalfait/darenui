import * as React from 'react'

import { Section } from '../lib'

export default {
  title: 'Layout components/Section',
  component: Section,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export function section() {
  return (
    <div>
      <Section>content</Section>
    </div>
  )
}
