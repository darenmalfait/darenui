import * as React from 'react'
import {cx} from '@daren/utils'
import {CheckIcon} from '@heroicons/react/24/solid'

import {FieldProps} from './types'

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
        'relative flex items-center justify-center rounded-full focus:scale-75',
        {
          'h-6 w-6': variant === 'sm',
          'h-8 w-8': variant === 'md',
          'h-10 w-10': variant === 'lg',
        },
      )}
    >
      <input {...props} className="peer sr-only" type="checkbox" />
      <span className="inline-block h-full w-full cursor-pointer rounded-full border-2 border-primary-100 text-current transition-all duration-300 focus-ring peer-checked:animate-check peer-checked:border-transparent dark:border-primary-300" />
      <span className="absolute inset-0 hidden peer-checked:block">
        <Icon
          className={cx(textClassName, 'pointer-events-none h-full w-full p-1')}
        />
      </span>
    </label>
  )
}

const CheckboxField = React.forwardRef<
  HTMLInputElement,
  FieldProps & CheckboxProps
>(function DropdownField(
  {error, name, label, id, className, defaultValue, ...props},
  ref,
) {
  const inputId = id ?? name
  const errorId = `${inputId}-error`

  return (
    <div className={cx(className, 'group w-full')}>
      <div className="relative flex items-center">
        <div className="flex h-5 items-center">
          <Checkbox ref={ref} id={inputId} name={name} {...props} />
        </div>
        <div className="ml-3 text-base">
          <label htmlFor={inputId} className="text-primary">
            {label}
          </label>
        </div>
      </div>

      {error ? (
        <p className="mt-2 text-left text-sm text-red-600" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  )
})

export {Checkbox, CheckboxField}
export type {CheckboxProps}
