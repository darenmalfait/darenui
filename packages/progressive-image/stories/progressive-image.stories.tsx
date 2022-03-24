import * as React from 'react'

import { ProgressiveImage } from '../lib'

export default {
  title: 'ProgressiveImage',
}

export function progressiveImage() {
  return (
    <div>
      <ProgressiveImage
        className="w-96"
        img={<img src="https://picsum.photos/3000/3000" alt="picsum" />}
        placeholder="https://picsum.photos/25/25"
      />
    </div>
  )
}
