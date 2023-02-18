'use client'

import * as React from 'react'
import {cx} from '@daren/utils'

interface SectionProps {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
}

function Section({as: Tag = 'section', className, ...props}: SectionProps) {
  return (
    <Tag
      className={cx('box-border w-full items-center', className)}
      {...props}
    />
  )
}

export {Section}
