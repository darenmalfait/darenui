/* eslint-disable react-hooks/rules-of-hooks */
import { PlusIcon } from '@heroicons/react/solid'
import * as React from 'react'

import { Checkbox } from '../lib'

export default {
  title: 'Form Elements/Checkbox',
  component: Checkbox,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export function checkbox() {
  return (
    <div>
      <Checkbox />
    </div>
  )
}

export function customColors() {
  return (
    <div>
      <Checkbox bgClassName="text-danger" />
    </div>
  )
}

export function customIcon() {
  return (
    <div>
      <Checkbox
        className="rotate-45"
        icon={PlusIcon}
        bgClassName="text-danger"
      />
    </div>
  )
}
