import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description = 'Review is a simple component that render a review.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Review',
    description,
  }
}

const reviewPropTypes = [
  {
    property: 'rating',
    type: ['number'],
    default: '',
    values: [],
    description: 'Rating of the review',
  },
  {
    property: 'title',
    type: ['string'],
    default: '',
    values: [],
    description: 'Title of the review',
  },
  {
    property: 'author',
    type: ['string'],
    default: '',
    values: [],
    description: 'Author of the review',
  },
  {
    property: 'html',
    type: ['string'],
    default: '',
    values: [],
    description: 'HTML content of the review',
  },
  {
    property: 'date',
    type: ['string'],
    default: '',
    values: [],
    description: 'The visual date of the review',
  },
  {
    property: 'datetime',
    type: ['string'],
    default: '',
    values: [],
    description: 'The full date of the review',
  },
  {
    property: 'activeStarColorClass',
    type: ['string'],
    default: 'text-yellow-500',
    values: [],
    description: 'The color of the active star',
  },
  {
    property: 'inactiveStarColorClass',
    type: ['string'],
    default: 'text-gray-300',
    values: [],
    description: 'The color of the inactive star',
  },
]

const reviewGroupPropTypes = [
  {
    property: 'children',
    type: ['React.ReactNode'],
    default: '',
    values: [],
    description: 'List of reviews',
  },
  {
    property: 'title',
    type: ['string'],
    default: '',
    values: [],
    description: 'Title of the review group',
  },
  {
    property: 'titleClass',
    type: ['string'],
    default: '',
    values: [],
    description: 'Class of the title',
  },
]

const propList = [
  {
    name: 'Review',
    value: 'review',
    propTypes: reviewPropTypes,
  },
  {
    name: 'ReviewGroup',
    value: 'review-group',
    propTypes: reviewGroupPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <Review
    rating={4}
    title="this is a title"
    html="<p>this is the content in html</p>"
    author="auhor"
    date="jan 2020"
    datetime="2020-01-01T00:00:00.000Z"
  />        
</div>`,
      },
    ],
    openEditor: true,
  },

  {
    name: 'Group',
    files: [
      {
        name: 'index.tsx',
        code: `function App() {
          const reviews = [
            {
              id: 1,
              title: "Can't say enough good things",
              rating: 4,
              html: \`
    <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
    <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    \`,
              author: 'Risako M',
              date: 'May 16, 2021',
              datetime: '2021-01-06',
            },
            {
              id: 2,
              title: "Can't say enough good things",
              rating: 4,
              html: \`
    <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
    <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    \`,
              author: 'Risako M',
              date: 'May 16, 2021',
              datetime: '2021-01-06',
            },
          ]
          return (
            <div className="p-8">
              <ReviewGroup
               title="Recent reviews"
                titleClass="text-lg font-medium text-primary"
              >
                {reviews.map(review => (
                  <Review key={review.id} {...review} />
                ))}
              </ReviewGroup>
            </div>
          )
}`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'Review',
  importer: `import { Review, ReviewGroup } from '@daren/ui-components'`,
  packageName: 'review',
  demoList,
  propList,
  description,
}

export default function ReviewPage() {
  return <DocumentBuilder component={component} />
}
