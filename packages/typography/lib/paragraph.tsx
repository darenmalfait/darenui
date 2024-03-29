'use client'

import * as React from 'react'
import {cx} from '@daren/utils'

type ParagraphProps = {
  className?: string
  prose?: boolean
  textColorClassName?: string
  as?: React.ElementType
} & ({children: React.ReactNode} | {dangerouslySetInnerHTML: {__html: string}})

function Paragraph({
  className,
  prose = true,
  as = 'p',
  textColorClassName = 'text-secondary',
  ...rest
}: ParagraphProps) {
  return React.createElement(as, {
    className: cx('max-w-full leading-7 mt-6 first:mt-0', className, {
      'prose prose-light dark:prose-invert': prose,
      [textColorClassName]: !prose,
    }),
    ...rest,
  })
}

export {Paragraph}
