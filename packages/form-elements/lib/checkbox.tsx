import { cx } from '@daren/utils'
import { CheckIcon } from '@heroicons/react/solid'
import * as React from 'react'

type CheckboxProps = JSX.IntrinsicElements['input'] & {
  variant?: 'sm' | 'md' | 'lg'
  bgClassName?: string
  textClassName?: string
  icon?: React.ElementType
}

function Checkbox({
  className,
  variant = 'sm',
  bgClassName = 'text-success',
  textClassName = 'text-white',
  icon: Icon = CheckIcon,
  ...props
}: CheckboxProps) {
  return (
    <label
      className={cx(
        className,
        bgClassName,
        'flex relative justify-center items-center rounded-full focus:scale-75',
        {
          'w-6 h-6': variant === 'sm',
          'w-8 h-8': variant === 'md',
          'w-10 h-10': variant === 'lg',
        },
      )}
    >
      <input {...props} className="peer sr-only" type="checkbox" />
      <span className="inline-block w-full h-full rounded-full border-2 border-primary-100 peer-checked:border-transparent dark:border-primary-300 transition-all duration-300 peer-checked:animate-check cursor-pointer focus-ring set-colors-current" />
      <Icon
        className={cx(
          textClassName,
          'absolute inset-0 p-1 w-full h-full  opacity-0 transition-opacity peer-checked:animate-fade-in-up pointer-events-none',
        )}
      />
    </label>
  )
}

export { Checkbox }
export type { CheckboxProps }
