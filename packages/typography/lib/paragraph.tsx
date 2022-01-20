import { cx } from '@daren/utils'
import * as React from 'react'

type ParagraphProps = {
  className?: string
  prose?: boolean
  textColorClassName?: string
  as?: React.ElementType
} & (
  | { children: React.ReactNode }
  | { dangerouslySetInnerHTML: { __html: string } }
)

function Paragraph({
  className,
  prose = true,
  as = 'p',
  textColorClassName = 'text-primary-400',
  ...rest
}: ParagraphProps) {
  return React.createElement(as, {
    className: cx('max-w-full text-lg', textColorClassName, className, {
      'prose prose-light': prose,
    }),
    ...rest,
  })
}

export { Paragraph }
