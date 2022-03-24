import * as React from 'react'

import { H1, H2, H3, H4, H5, H6 } from '../lib'

export default {
  title: 'Title',
  component: H1,
}

export function title() {
  return (
    <div className="flex flex-col space-y-4">
      <H1>Title goes here.</H1>
      <H2>Title goes here.</H2>
      <H3>Title goes here.</H3>
      <H4>Title goes here.</H4>
      <H5>Title goes here.</H5>
      <H6>Title goes here.</H6>
    </div>
  )
}

export function secondary() {
  return (
    <div className="flex flex-col space-y-4">
      <H1 variant="secondary">Title goes here.</H1>
      <H2 variant="secondary">Title goes here.</H2>
      <H3 variant="secondary">Title goes here.</H3>
      <H4 variant="secondary">Title goes here.</H4>
      <H5 variant="secondary">Title goes here.</H5>
      <H6 variant="secondary">Title goes here.</H6>
    </div>
  )
}
