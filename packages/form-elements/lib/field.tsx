import * as React from 'react'

import { Input } from './input'
import { Label } from './misc'

import { InputProps } from './types'

type FieldProps = {
  defaultValue?: string | null
  name: string
  label: string
  className?: string
  error?: string | null
  description?: React.ReactNode
  inputClass?: string
}

const Field = React.forwardRef<HTMLInputElement, FieldProps & InputProps>(
  function Field(
    {
      defaultValue,
      error,
      name,
      label,
      className,
      description,
      id,
      inputClass,
      ...props
    },
    ref,
  ) {
    const inputId = id ?? name
    const errorId = `${inputId}-error`
    const descriptionId = `${inputId}-description`

    return (
      <div className={className}>
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

        <Input
          hasError={!!error}
          className={inputClass}
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

export { Field }
