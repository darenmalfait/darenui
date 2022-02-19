import * as React from 'react'

import { Review, ReviewGroup } from '../lib'

export default {
  title: 'Review',
  component: Review,
  argTypes: {
    rating: {
      defaultValue: 4,
      control: 'number',
    },
    title: {
      defaultValue: "I'm a title",
      control: 'string',
    },
    html: {
      defaultValue: "I'm a description",
      control: 'string',
    },
    author: {
      defaultValue: "I'm an author",
      control: 'string',
    },
    date: {
      defaultValue: 'May 16, 2021',
      control: 'string',
    },
    datetime: {
      defaultValue: '2021-01-06',
      control: 'string',
    },
  },
}

export function review({
  rating,
  title,
  html,
  author,
  date,
  datetime,
  className,
}: any) {
  return (
    <div>
      <Review
        rating={rating}
        title={title}
        html={html}
        author={author}
        date={date}
        datetime={datetime}
        className={className}
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
