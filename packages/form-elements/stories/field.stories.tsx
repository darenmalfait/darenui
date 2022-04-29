import { SearchIcon } from '@heroicons/react/solid'
import * as React from 'react'

import { Field } from '../lib'

export default {
  title: 'Form Elements / Field',
  component: Field,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export function field() {
  return (
    <div>
      <Field name="formfield" label="form field" />
    </div>
  )
}

export function withIcon() {
  return (
    <div>
      <Field icon={SearchIcon} name="formfield" label="form field" />
    </div>
  )
}

export function withError() {
  return (
    <div>
      <Field
        error="this field has an error"
        name="formfield"
        label="form field"
      />
    </div>
  )
}

export function withIconAndError() {
  return (
    <div>
      <Field
        icon={SearchIcon}
        error="this field has an error"
        name="formfield"
        label="form field"
      />
    </div>
  )
}
