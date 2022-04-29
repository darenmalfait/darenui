import * as React from 'react'

import { Grid } from '../lib'

export default {
  title: 'Layout Components / Grid',
  component: Grid,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export function grid() {
  return (
    <div>
      <Grid>
        <div className="col-span-full">col-span-full</div>
        <div className="col-span-4">col-span-4</div>
        <div className="col-span-4">col-span-4</div>
        <div className="col-span-4">col-span-4</div>
      </Grid>
    </div>
  )
}

export function nested() {
  return (
    <div>
      <Grid nested>
        <div className="col-span-full">col-span-full</div>
        <div className="col-span-4">col-span-4</div>
        <div className="col-span-4">col-span-4</div>
        <div className="col-span-4">col-span-4</div>
      </Grid>
    </div>
  )
}
