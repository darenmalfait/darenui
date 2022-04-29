import { DocumentTextIcon, SearchIcon } from '@heroicons/react/solid'
import * as React from 'react'

import { Input } from '../lib'

export default {
  title: 'Form Elements / Input',
  component: Input,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

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

export function withIcon() {
  return (
    <div>
      <Input icon={SearchIcon} />
    </div>
  )
}

export function textarea() {
  return (
    <div>
      <Input type="textarea" />
    </div>
  )
}

export function textareaWithIcon() {
  return (
    <div>
      <Input type="textarea" icon={DocumentTextIcon} />
    </div>
  )
}
