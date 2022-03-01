import { Grid } from '@daren/grid'
import * as React from 'react'

import { Container } from '../lib'

export default {
  title: 'Layout Components',
  component: Container,
  argTypes: {
    as: {
      control: 'text',
      defaultValue: 'div',
    },
    size: {
      options: ['small', 'default', 'medium', 'full'],
      control: { type: 'radio' },
      defaultValue: 'text',
    },
  },
}

export function container({ as, size }: any) {
  return (
    <Grid>
      <Container size={size} as={as}>
        content
      </Container>
    </Grid>
  )
}
