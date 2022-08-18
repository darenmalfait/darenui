import { cx } from '@daren/utils'
import { CheckIcon } from '@heroicons/react/solid'
import * as React from 'react'

import { FieldProps } from './types'

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
      <span className="inline-block w-full h-full text-current rounded-full border-2 border-primary-100 peer-checked:border-transparent dark:border-primary-300 transition-all duration-300 peer-checked:animate-check cursor-pointer focus-ring" />
      <Icon
        className={cx(
          textClassName,
          'absolute inset-0 p-1 w-full h-full  opacity-0 transition-opacity peer-checked:animate-fade-in-up pointer-events-none',
        )}
      />
    </label>
  )
}

const CheckboxField = React.forwardRef<
  HTMLInputElement,
  FieldProps & CheckboxProps
>(function DropdownField(
  { error, name, label, id, className, defaultValue, ...props },
  ref,
) {
  const inputId = id ?? name
  const errorId = `${inputId}-error`

  return (
    <div className={cx(className, 'group w-full')}>
      <div className="flex relative items-start">
        <div className="flex items-center h-5">
          <Checkbox ref={ref} id={inputId} name={name} {...props} />
        </div>
        <div className="ml-3 text-base">
          <label htmlFor={inputId} className="text-primary">
            {label}
          </label>
        </div>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600" id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
})

export { Checkbox, CheckboxField }
export type { CheckboxProps }
