import * as React from 'react'

import { Input } from '../lib'

export function input() {
  return (
    <div>
      <Input />
    </div>
  )
}

export function withError() {
  return (
    <div>
      <Input hasError={true} />
    </div>
  )
}
