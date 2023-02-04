import * as React from 'react'
import {cx} from '@daren/utils'
import {ExclamationCircleIcon} from '@heroicons/react/24/solid'

import {Label} from './misc'
import {InputProps} from './types'
import {getInputClassName} from './utils'

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref,
) {
  const {type, hasError, children, inputSize, icon: Icon, ...inputProps} = props

  const className = getInputClassName(props.className, hasError, inputSize)

  if (type === 'textarea') {
    return (
      <div className="relative flex w-full items-center space-x-2">
        {Icon ? (
          <Icon
            width="20px"
            height="20px"
            className={cx(
              'absolute top-0 right-5 z-10 flex h-full items-center justify-center p-0',
              {
                'text-red-500': hasError,
              },
            )}
          />
        ) : null}
        <textarea
          {...(inputProps as JSX.IntrinsicElements['textarea'])}
          aria-invalid={hasError}
          className={cx('h-36', className, {'pr-14': !!Icon})}
        />
        {children ? <div className="flex shrink-0">{children}</div> : null}
      </div>
    )
  }

  return (
    <div className="flex flex-nowrap items-center space-x-2">
      <div className="relative w-full shadow-sm">
        <input
          type={type}
          {...(inputProps as JSX.IntrinsicElements['input'])}
          className={cx(className, {'pr-14': !!Icon})}
          ref={ref}
        />
        {Icon && !hasError ? (
          <Icon
            width="20px"
            height="20px"
            className={cx(
              'absolute top-0 right-5 z-10 flex h-full items-center justify-center p-0',
              {
                'text-gray-300': !hasError,
                'text-red-500': hasError,
              },
            )}
          />
        ) : null}
        {hasError ? (
          <div className="absolute top-0 right-5 z-10 flex h-full items-center justify-center p-0">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        ) : null}
      </div>
      {children ? <div className="flex shrink-0">{children}</div> : null}
    </div>
  )
})

interface InputErrorProps {
  id: string
  children?: string | null
}

function InputError({children, id}: InputErrorProps) {
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
    {defaultValue, error, name, label, className, description, id, ...props},
    ref,
  ) {
    const inputId = id ?? name
    const errorId = `${inputId}-error`
    const descriptionId = `${inputId}-description`

    return (
      <div className="w-full">
        {label ? (
          <div className="flex justify-between">
            <Label htmlFor={inputId} className="mb-2">
              {label}
            </Label>
            {description ? (
              <span className="text-sm text-gray-400" id={descriptionId}>
                {description}
              </span>
            ) : null}
          </div>
        ) : null}

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

        {error ? (
          <p className="mt-2 text-left text-sm text-red-600" id={errorId}>
            {error}
          </p>
        ) : null}
      </div>
    )
  },
)

export {Input, Field, InputError}
