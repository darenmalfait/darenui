import * as React from 'react'

import { Toggle } from '../lib'

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export function toggle() {
  return (
    <div>
      <Toggle id="unique-id" />
    </div>
  )
}
