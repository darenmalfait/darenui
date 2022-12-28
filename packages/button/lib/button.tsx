import {cx} from '@daren/utils'
import * as React from 'react'

import {Link, LinkFn, LinkProps} from './link'

type ButtonProps = {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

function getClassName(className?: string) {
  return cx(
    'group relative inline-flex text-base outline-none !no-underline opacity-100 transition focus:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 active:scale-90 rounded-md',
    className,
  )
}

function ButtonInner({
  children,
  variant = 'primary',
  size = 'medium',
  disabled,
}: ButtonProps) {
  return (
    <>
      <div
        className={cx(
          'absolute inset-0 rounded-full border-0 opacity-100 outline-none transition focus-ring set-colors-current',
          {
            'bg-accent text-accent dark:bg-accent-100 dark:text-white':
              variant === 'primary',
            'bg-gray-200 text-primary dark:bg-gray-800':
              variant === 'secondary',
            'bg-red-200 text-red-500 ': variant === 'danger',
            'bg-green-200 text-green-500 ': variant === 'success',
          },
        )}
      />
      <div
        className={cx(
          'relative flex h-full w-full items-center justify-center whitespace-nowrap',
          {
            'cursor-not-allowed text-gray-100 opacity-50': disabled,
            '!text-white dark:!text-accent': variant === 'primary',
            '!text-black dark:!text-white': variant === 'secondary',
            '!text-red-700': variant === 'danger',
            '!text-green-700': variant === 'success',
            'space-x-3 py-2 px-4 text-sm': size === 'small',
            'space-x-3 py-3 px-6': size === 'medium',
            'space-x-5 py-4 px-8': size === 'large',
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
  variant = 'primary',
  className,
  disabled,
  ...props
}: ButtonProps & JSX.IntrinsicElements['button']) {
  return (
    <button disabled={disabled} {...props} className={getClassName(className)}>
      <ButtonInner variant={variant} size={size} disabled={disabled}>
        {children}
      </ButtonInner>
    </button>
  )
}

function LinkButton({
  className,
  underlined,
  ...buttonProps
}: {underlined?: boolean} & JSX.IntrinsicElements['button']) {
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
  LinkProps<any> & ButtonProps
>(function ButtonLink(
  {children, className, variant = 'primary', size, disabled, ...rest},
  ref,
) {
  return (
    <Link ref={ref} className={getClassName(className)} {...rest}>
      <ButtonInner disabled={disabled} variant={variant} size={size}>
        {children}
      </ButtonInner>
    </Link>
  )
}) as typeof LinkFn

export type {ButtonProps}
export {Button, ButtonLink, LinkButton}
