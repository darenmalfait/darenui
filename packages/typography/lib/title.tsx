'use client'

import * as React from 'react'
import {cx} from '@daren/utils'

type TitleProps = {
  variant?: 'primary' | 'secondary' | 'special'
  as?: React.ElementType
  className?: string
  id?: string
} & (
  | {children: React.ReactNode}
  | {
      dangerouslySetInnerHTML: {
        __html: string
      }
    }
) &
  JSX.IntrinsicElements['h1']

const fontSize = {
  // Keep this the same to the prose styles in styles.css
  h1: 'scroll-m-20 font-title text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]',
  h2: 'mt-10 first:mt-0 scroll-m-20 font-title text-3xl font-extrabold tracking-tight lg:text-4xl',
  h3: 'mt-8 first:mt-0 scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'mt-8 first:mt-0 scroll-m-20 text-xl font-semibold tracking-tight',
  h5: 'mt-8 first:mt-0 text-lg font-bold md:text-xl',
  h6: 'mt-8 first:mt-0 text-lg font-bold',
}

const titleColors = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  special: 'text-transparent',
}

const specialClassName =
  'relative bg-gradient-to-r from-[var(--colors-daren-100)] via-[var(--colors-daren-500)] to-[var(--colors-daren-900)] bg-clip-text'

function Title({
  size,
  as,
  className,
  variant = size === 'h1' || size === 'h2' ? 'special' : 'primary',
  children,
  ...rest
}: TitleProps & {size: keyof typeof fontSize}) {
  const Tag = as ?? size
  return (
    <Tag className={cx(fontSize[size], titleColors[variant])} {...rest}>
      <span
        className={cx(variant === 'special' && specialClassName, className)}
      >
        {children}
      </span>
    </Tag>
  )
}

function H1(props: TitleProps) {
  return <Title {...props} size="h1" />
}

function H2(props: TitleProps) {
  return <Title {...props} size="h2" />
}

function H3(props: TitleProps) {
  return <Title {...props} size="h3" />
}

function H4(props: TitleProps) {
  return <Title {...props} size="h4" />
}

function H5(props: TitleProps) {
  return <Title {...props} size="h5" />
}

function H6(props: TitleProps) {
  return <Title {...props} size="h6" />
}

function TitleWithActions({
  children,
  actions,
  size = 'h2',
  className,
  variant = size === 'h1' || size === 'h2' ? 'special' : 'primary',
  ...rest
}: TitleProps & {
  children: React.ReactNode
  size?: keyof typeof fontSize
  actions?: React.ReactNode
}) {
  return (
    <Title
      size={size}
      variant={variant}
      className={cx(
        className,
        'flex flex-col space-y-1 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:space-x-3',
      )}
      {...rest}
    >
      <div className="flex-1">
        <span
          className={cx(className, variant === 'special' && specialClassName)}
        >
          {children}
        </span>
      </div>
      {actions ? (
        <div className="flex flex-initial flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          {actions}
        </div>
      ) : null}
    </Title>
  )
}

export {H1, H2, H3, H4, H5, H6, TitleWithActions}
