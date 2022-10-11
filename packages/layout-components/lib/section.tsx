import { cx } from '@daren/utils'
import * as React from 'react'

interface SectionProps {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
}

function Section({ as: Tag = 'section', className, ...props }: SectionProps) {
  return (
    <Tag
      className={cx('box-border w-full items-center', className)}
      {...props}
    />
  )
}

export { Section }
