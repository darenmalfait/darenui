import * as React from 'react'
import {ExtractProps, cx} from '@daren/utils'

import {Link} from './link'

const variants = {
  default:
    'bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50 focus-ring',
  danger:
    'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600 focus-ring',
  success:
    'bg-green-500 text-white hover:bg-green-600 dark:hover:bg-green-600 focus-ring',
  outline:
    'bg-transparent border border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-100 focus-ring',
  subtle:
    'bg-gray-100 text-primary hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-200 focus-ring',
  ghost:
    'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100 dark:hover:text-gray-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
  link: 'bg-transparent hover:underline text-primary hover:bg-transparent dark:hover:bg-transparent',
}

const sizes = {
  default: 'h-10 py-2 px-4 text-sm',
  sm: 'h-9 px-3 text-xs',
  lg: 'h-11 px-8 text-sm',
}

function getButtonClassName({
  variant = 'default',
  size = 'default',
  className,
}: {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
}) {
  return cx(
    'group rounded-full no-underline font-title font-bold inline-flex space-x-2 items-center transition-transform active:scale-90',
    variants[variant],
    sizes[size],
    className,
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({variant, size, className, ...props}, ref) => {
    return (
      <button
        className={getButtonClassName({
          variant,
          size,
          className,
        })}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

const ButtonLink = React.forwardRef<
  HTMLAnchorElement,
  ExtractProps<typeof Link> & ButtonProps
>(function ButtonLink({className, variant, size, disabled, ...rest}, ref) {
  return (
    <Link
      ref={ref}
      className={getButtonClassName({
        variant,
        size,
        className,
      })}
      {...rest}
    />
  )
})

ButtonLink.displayName = 'ButtonLink'

export {Button, ButtonLink, type ButtonProps}
