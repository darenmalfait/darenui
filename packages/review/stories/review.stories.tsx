import * as React from 'react'

import { Review, ReviewGroup } from '../lib'

export default {
  title: 'Components/Review',
  component: Review,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export function review() {
  return (
    <div>
      <Review
        rating={4}
        title="this is a title"
        html="<p>this is the content in html</p>"
        author="auhor"
        date="jan 2020"
        datetime="2020-01-01T00:00:00.000Z"
      />
    </div>
  )
}

const reviews = [
  {
    id: 1,
    title: "Can't say enough good things",
    rating: 5,
    html: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
    author: 'Risako M',
    date: 'May 16, 2021',
    datetime: '2021-01-06',
  },
  {
    id: 2,
    title: "Can't say enough good things",
    rating: 4,
    html: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
    author: 'Risako M',
    date: 'May 16, 2021',
    datetime: '2021-01-06',
  },
]

export function reviewGroup() {
  return (
    <ReviewGroup
      title="Recent reviews"
      titleClass="text-lg font-medium text-primary"
    >
      {reviews.map(review => (
        <Review key={review.id} {...review} />
      ))}
    </ReviewGroup>
  )
}
