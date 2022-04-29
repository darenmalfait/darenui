import * as React from 'react'

import { Checkbox, CheckboxField } from '../lib'

export default {
  title: 'Form Elements/Checkbox/CheckboxField',
  component: Checkbox,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export function checkboxField() {
  return (
    <div>
      <CheckboxField name="example" label="This is a label" />
    </div>
  )
}

export function withError() {
  return (
    <div>
      <CheckboxField
        error="this is an error"
        name="example"
        label="This is a label"
      />
    </div>
  )
}
