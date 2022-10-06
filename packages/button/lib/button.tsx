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
    'group relative inline-flex text-base font-semibold !no-underline opacity-100 transition focus:outline-none disabled:cursor-not-allowed active:scale-90 rounded-md',
    className,
  )
}

function ButtonInner({
  children,
  variant = 'primary',
  size = 'medium',
  disabled,
}: ButtonProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  function handleDrip(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (buttonRef.current) {
      onDripClickHandler(e)
    }
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    handleDrip(e)
  }

  const { onClick: onDripClickHandler, ...dripBindings } = useDrip(
    false,
    buttonRef,
  )

  return (
    <>
      <div
        className={cx(
          'absolute inset-0 rounded-full border-2 opacity-100 transition focus-ring set-colors-current',
          {
            'border-gray-200 text-gray-200 bg-gray-200 opacity-50': disabled,
            'bg-accent dark:bg-accent-100 text-accent dark:text-white':
              variant === 'primary' && !disabled,
            'bg-transparent text-gray-400 hover:!border-transparent':
              variant === 'secondary',
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
            '!text-white dark:!text-accent': variant === 'primary' && !disabled,
            '!text-gray-400': variant === 'secondary' && !disabled,
            '!text-red-700': variant === 'danger' && !disabled,
            '!text-green-700': variant === 'success' && !disabled,
            'h-9 space-x-3 py-2 px-4 text-sm': size === 'small',
            'h-12 space-x-3 py-4 px-6 text-sm': size === 'medium',
            'h-18 space-x-5 py-6 px-11': size === 'large',
          },
        )}
      >
        {children}
        <button
          className="absolute inset-0 overflow-hidden rounded-full"
          ref={buttonRef}
          onClick={handleClick}
        >
          <div className="relative">
            <Drip
              colorClass={cx({
                'fill-gray-400 dark:fill-black dark:opacity-80':
                  variant === 'primary' && !disabled,
                'fill-gray-200 dark:fill-white dark:opacity-80':
                  variant === 'secondary' && !disabled,
                'fill-red-400': variant === 'danger' && !disabled,
                'fill-green-400': variant === 'success' && !disabled,
              })}
              {...dripBindings}
            />
          </div>
        </button>
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
