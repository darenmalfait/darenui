import * as React from 'react'

import { Grid } from '../lib'

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    as: { control: 'text', defaultValue: 'div' },
    className: { control: 'text', defaultValue: '' },
    featured: { control: 'boolean', defaultValue: false },
    nested: { control: 'boolean', defaultValue: false },
    rowGap: { control: 'boolean', defaultValue: false },
  },
}

export function grid(args: any) {
  return (
    <div>
      <Grid {...args}>
        <div className="col-span-full">col-span-full</div>
        <div className="col-span-4">col-span-4</div>
        <div className="col-span-4">col-span-4</div>
        <div className="col-span-4">col-span-4</div>
      </Grid>
    </div>
  )
}
