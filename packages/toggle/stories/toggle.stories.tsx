import * as React from 'react'

import { Toggle } from '../lib'

export default {
  title: 'Toggle',
  component: Toggle,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: 'boolean',
    },
  },
}

export function toggle({
  disabled,
  activeColorClass,
  inactiveColorClass,
}: any) {
  return (
    <div>
      <Toggle
        id="unique-id"
        disabled={disabled}
        activeColorClass={activeColorClass}
        inactiveColorClass={inactiveColorClass}
      />
    </div>
  )
}
