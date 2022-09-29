import { cx, Drip, useDrip } from '@daren/utils'
import * as React from 'react'

import { Link } from './link'

type ButtonProps = {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

function getClassName(className?: string) {
  return cx(
    'group relative overflow-hidden inline-flex text-base font-semibold !no-underline opacity-100 transition focus:outline-none disabled:cursor-not-allowed active:scale-95 rounded-md',
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
          'absolute inset-0 rounded-md border-2 opacity-100 transition focus-ring set-colors-current',
          {
            'border-gray-200 text-gray-200 bg-gray-200 opacity-50': disabled,
            'border-daren text-daren bg-daren group-hover:brightness-110':
              variant === 'primary' && !disabled,
            'border-gray-400 text-gray-400': variant === 'secondary',
            'border-red-200 text-red-200 bg-red-200 group-hover:border-red-300 group-hover:bg-red-300':
              variant === 'danger' && !disabled,
            'border-green-200 text-green-200 bg-green-200 group-hover:border-green-300 group-hover:bg-green-300':
              variant === 'success' && !disabled,
          },
        )}
      />
      <div
        className={cx(
          'relative flex h-full w-full items-center justify-center whitespace-nowrap',
          {
            'text-gray-800': disabled,
            '!text-white': variant === 'primary' && !disabled,
            '!text-gray-200': variant === 'secondary' && !disabled,
            '!text-red-700': variant === 'danger' && !disabled,
            '!text-green-700': variant === 'success' && !disabled,
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
  variant = 'primary',
  className,
  disabled,
  onClick,
  ...props
}: ButtonProps & JSX.IntrinsicElements['button']) {
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  function handleDrip(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (buttonRef.current) {
      onDripClickHandler(e)
    }
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    handleDrip(e)
    onClick?.(e)
  }

  const { onClick: onDripClickHandler, ...dripBindings } = useDrip(
    false,
    buttonRef,
  )

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      disabled={disabled}
      {...props}
      className={getClassName(className)}
    >
      <ButtonInner variant={variant} size={size} disabled={disabled}>
        {children}
      </ButtonInner>
      <Drip
        colorClass={cx({
          'fill-daren brightness-90': variant === 'primary' && !disabled,
          'fill-gray-400': variant === 'secondary' && !disabled,
          'fill-red-400': variant === 'danger' && !disabled,
          'fill-green-400': variant === 'success' && !disabled,
        })}
        {...dripBindings}
      />
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
  { children, className, variant = 'primary', size, disabled, ...rest },
  ref,
) {
  return (
    <Link ref={ref} className={getClassName(className)} {...rest}>
      <ButtonInner disabled={disabled} variant={variant} size={size}>
        {children}
      </ButtonInner>
    </Link>
  )
})

export type { ButtonProps }
export { Button, ButtonLink, LinkButton }
