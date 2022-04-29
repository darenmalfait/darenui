import * as React from 'react'

import { Alert } from '../lib'

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export function Info() {
  return (
    <div>
      <Alert
        type="info"
        title="this is a title"
        description="this is a description"
      />
    </div>
  )
}

export function Danger() {
  return (
    <div>
      <Alert
        type="danger"
        title="this is a title"
        description="this is a description"
      />
    </div>
  )
}

export function Success() {
  return (
    <div>
      <Alert
        type="success"
        title="this is a title"
        description="this is a description"
      />
    </div>
  )
}

export function Warning() {
  return (
    <div>
      <Alert
        type="warning"
        title="this is a title"
        description="this is a description"
      />
    </div>
  )
}

export function WithoutIcon() {
  return (
    <div>
      <Alert
        hideIcon
        type="warning"
        title="this is a title"
        description="this is a description"
      />
    </div>
  )
}
