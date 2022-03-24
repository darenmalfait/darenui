import * as React from 'react'

import { Toggle } from '../lib'

export default {
  title: 'Toggle',
}

export function toggle() {
  return (
    <div>
      <Toggle id="unique-id" />
    </div>
  )
}
