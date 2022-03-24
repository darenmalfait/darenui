import { Grid } from '@daren/grid'
import * as React from 'react'

import { Container } from '../lib'

export function Default() {
  return (
    <Grid>
      <Container size="default">content</Container>
    </Grid>
  )
}

export function small() {
  return (
    <Grid>
      <Container size="small">content</Container>
    </Grid>
  )
}

export function medium() {
  return (
    <Grid>
      <Container size="medium">content</Container>
    </Grid>
  )
}

export function full() {
  return (
    <Grid>
      <Container size="full">content</Container>
    </Grid>
  )
}
