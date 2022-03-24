import * as React from 'react'

import { Field } from '../lib'

export function field() {
  return (
    <div>
      <Field name="formfield" label="form field" />
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
