import * as React from 'react'

import { ProgressiveImage } from '../lib'

export default {
  title: 'ProgressiveImage',
  component: ProgressiveImage,
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'https://picsum.photos/200/300',
    },
  },
}

export function progressiveImage(args: any) {
  return (
    <div>
      <ProgressiveImage
        className="w-96"
        img={<img src="https://picsum.photos/3000/3000" alt="picsum" />}
        placeholder="https://picsum.photos/25/25"
        {...args}
      />
    </div>
  )
}
