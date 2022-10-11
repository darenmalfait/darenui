import { cx } from '@daren/utils'
import * as React from 'react'

type SizeValue = 'small' | 'default' | 'medium' | 'full'

interface ContainerProps {
  children: React.ReactNode
  size?: SizeValue
  as?: React.ElementType
  className?: string
}

function Container({
  size = 'default',
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cx(
        'col-span-full',
        {
          'lg:col-span-6 lg:col-start-4': size === 'small',
          'lg:col-span-8 lg:col-start-3': size === 'default',
          'lg:col-span-10 lg:col-start-2': size === 'medium',
          'lg:col-start-0 lg:col-span-12': size === 'full',
        },
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export { Container }
export type { SizeValue }
