import { cx } from '@daren/utils'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import * as React from 'react'

import { Label } from './misc'

import { InputProps } from './types'
import { getInputClassName } from './utils'

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref,
) {
  const { type, hasError, inputSize, icon: Icon, ...inputProps } = props

  const className = getInputClassName(props.className, hasError, inputSize)

  if (type === 'textarea') {
    return (
      <div className="relative flex-items-center">
        {Icon && (
          <Icon
            width="20px"
            height="20px"
            className={cx(
              'flex absolute top-0 left-5 z-10 justify-center items-center p-0 h-full',
              {
                'text-red-500': hasError,
              },
            )}
          />
        )}
        <textarea
          {...(inputProps as JSX.IntrinsicElements['textarea'])}
          aria-invalid={hasError}
          className={cx('h-36', className, { 'pl-14': !!Icon })}
        />
      </div>
    )
  }

  return (
    <div className="relative shadow-sm">
      <input
        type={type}
        {...(inputProps as JSX.IntrinsicElements['input'])}
        className={cx(className, { 'pr-14': !!Icon })}
        ref={ref}
      />
      {Icon && !hasError && (
        <Icon
          width="20px"
          height="20px"
          className={cx(
            'flex absolute top-0 right-5 z-10 justify-center items-center p-0 h-full',
            {
              'text-gray-300': !hasError,
              'text-red-500': hasError,
            },
          )}
        />
      )}
      {hasError && (
        <div className="flex absolute top-0 right-5 z-10 justify-center items-center p-0 h-full">
          <ExclamationCircleIcon
            className="w-5 h-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  )
})

interface InputErrorProps {
  id: string
  children?: string | null
}

function InputError({ children, id }: InputErrorProps) {
  if (!children) {
    return null
  }

  return (
    <p className=" mb-0 text-sm !text-red-500" role="alert" id={id}>
      {children}
    </p>
  )
}

type FieldProps = {
  defaultValue?: string | null
  name: string
  label?: string
  className?: string
  error?: string | null
  description?: React.ReactNode
}

const Field = React.forwardRef<HTMLInputElement, FieldProps & InputProps>(
  function Field(
    { defaultValue, error, name, label, className, description, id, ...props },
    ref,
  ) {
    const inputId = id ?? name
    const errorId = `${inputId}-error`
    const descriptionId = `${inputId}-description`

    return (
      <div className="w-full">
        {label && (
          <div className="flex justify-between">
            <Label htmlFor={inputId} className="mb-2">
              {label}
            </Label>
            {description && (
              <span className="text-sm text-slate-400" id={descriptionId}>
                {description}
              </span>
            )}
          </div>
        )}

        <Input
          hasError={!!error}
          {...(props as InputProps)}
          ref={ref}
          name={name}
          id={inputId}
          autoComplete={name}
          required
          defaultValue={defaultValue}
          aria-describedby={
            error ? errorId : description ? descriptionId : undefined
          }
        />

        {error && (
          <p className="mt-2 text-sm text-red-600" id={errorId}>
            {error}
          </p>
        )}
      </div>
    )
  },
)

export { Input, Field, InputError }
