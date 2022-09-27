import { cx } from '@daren/utils'
import * as React from 'react'

import { Link } from './link'

type ButtonProps = {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'small' | 'medium' | 'large'
}

function getClassName(className?: string) {
  return cx(
    'group relative inline-flex text-base font-semibold !no-underline opacity-100 transition focus:outline-none disabled:opacity-50',
    className,
  )
}

function ButtonInner({
  children,
  variant = 'primary',
  size = 'medium',
}: ButtonProps) {
  return (
    <>
      <div
        className={cx(
          'absolute inset-0 rounded-md border-2 opacity-100 transition disabled:opacity-50',
          {
            'border-daren bg-daren group-hover:brightness-110 group-focus:brightness-90':
              variant === 'primary',
            'border-gray-400': variant === 'secondary',
            'border-red-400 bg-red-400 group-hover:border-red-500 group-focus:brightness-90':
              variant === 'danger',
            'border-green-500 bg-green-500 group-hover:bg-green-600 group-focus:brightness-90':
              variant === 'success',
          },
        )}
      />
      <div
        className={cx(
          'relative flex h-full w-full items-center justify-center whitespace-nowrap',
          {
            '!text-inverse': variant === 'primary',
            '!text-gray-600': variant === 'secondary',
            '!text-white': variant === 'danger' || variant === 'success',
            'h-9 space-x-3 py-2 px-4 text-sm': size === 'small',
            'h-12 space-x-3 py-4 px-6 text-sm': size === 'medium',
            'h-18 space-x-5 py-6 px-11': size === 'large',
          },
        )}
      >
        {children}
      </div>
    </>
  )
}

function Button({
  children,
  size,
  variant,
  className,
  ...props
}: ButtonProps & JSX.IntrinsicElements['button']) {
  return (
    <button {...props} className={getClassName(className)}>
      <ButtonInner variant={variant} size={size}>
        {children}
      </ButtonInner>
    </button>
  )
}

function LinkButton({
  className,
  underlined,
  ...buttonProps
}: { underlined?: boolean } & JSX.IntrinsicElements['button']) {
  return (
    <button
      {...buttonProps}
      className={cx(
        className,
        underlined
          ? 'underlined whitespace-nowrap focus:outline-none'
          : 'underline',
        'inline-block text-primary',
      )}
    />
  )
}

const ButtonLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithRef<typeof Link> & ButtonProps
>(function ButtonLink(
  { children, className, variant = 'primary', size, ...rest },
  ref,
) {
  return (
    <Link ref={ref} className={getClassName(className)} {...rest}>
      <ButtonInner variant={variant} size={size}>
        {children}
      </ButtonInner>
    </Link>
  )
})

export type { ButtonProps }
export { Button, ButtonLink, LinkButton }
