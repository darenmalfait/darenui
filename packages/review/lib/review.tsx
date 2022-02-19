import { H2, H4, Paragraph } from '@daren/typography'
import { cx } from '@daren/utils'
import { StarIcon } from '@heroicons/react/solid'
import * as React from 'react'

// date: 'May 16, 2021'
// datetime: '2021-01-06'

interface ReviewProps {
  rating?: 0 | 1 | 2 | 3 | 4 | number
  title?: string
  html?: string
  author?: string
  date?: string
  datetime?: string
  className?: string
  activeStarColorClass?: string
  inactiveStarColorClass?: string
}

function Review({
  className,
  rating,
  title,
  html,
  date,
  datetime,
  author,
  activeStarColorClass = 'text-yellow-400',
  inactiveStarColorClass = 'text-secondary',
}: ReviewProps) {
  return (
    <div className={cx(className, 'pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8')}>
      <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
        <div className="flex items-center xl:col-span-1">
          <div className="flex items-center">
            {rating &&
              [0, 1, 2, 3, 4].map(star => (
                <StarIcon
                  key={rating}
                  className={cx(
                    rating > star
                      ? activeStarColorClass
                      : inactiveStarColorClass,
                    'h-5 w-5 flex-shrink-0',
                  )}
                  aria-hidden="true"
                />
              ))}
          </div>
          <Paragraph className="ml-3 text-sm text-secondary">
            {rating}
            <span className="sr-only"> out of 5 stars</span>
          </Paragraph>
        </div>

        <div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
          <H4 as="h3" className="text-sm font-medium text-primary">
            {title}
          </H4>

          {html && (
            <div
              className="mt-3 space-y-6 text-sm prose-sm text-secondary"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3">
        <H4 as="h3" className="font-medium text-primary">
          {author}
        </H4>
        <time
          dateTime={datetime}
          className="ml-4 border-l border-secondary pl-4 text-secondary lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
        >
          {date}
        </time>
      </div>
    </div>
  )
}

interface ReviewGroupProps {
  children?: React.ReactNode
  className?: string
  title?: string
  titleClass?: string
}

function ReviewGroup({
  className,
  children,
  title,
  titleClass,
}: ReviewGroupProps) {
  return (
    <div
      className={cx(
        className,
        'max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8',
      )}
    >
      {title && <H2 className={titleClass}>{title}</H2>}
      <div className="mt-6 pb-10 border-t border-b border-secondary divide-y divide-gray-200 space-y-10">
        {children}
      </div>
    </div>
  )
}

export { Review, ReviewGroup }
