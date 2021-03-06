/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react'

import { RadioGroup } from '../lib'

export default {
  title: 'Form Elements / RadioGroup',
  component: RadioGroup,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export function radioGroup() {
  const [selected, setSelected] = React.useState<string | null>(null)

  const onChange = React.useCallback((val: string) => {
    setSelected(val)
  }, [])

  return (
    <div>
      <RadioGroup name="example-group" value={selected} onChange={onChange}>
        <RadioGroup.Option
          value="1"
          label="Option 1"
          description="example description"
        />
        <RadioGroup.Option value="2" label="Option 2" />
        <RadioGroup.Option value="3" label="Option 3" />
        <RadioGroup.Option value="4" label="Option 4" />
      </RadioGroup>
    </div>
  )
}
