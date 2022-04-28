import { cx } from '@daren/utils'
import * as React from 'react'

import { Checkbox, CheckboxProps } from './checkbox'
import { Dropdown, DropdownProps } from './dropdown'

import { Input } from './input'
import { Label } from './misc'

import { InputProps, FieldProps } from './types'

function FieldWrapper({
  children,
  className,
  description,
  descriptionId,
  error,
  errorId,
  inputId,
  label,
}: Omit<FieldProps, 'name'> & {
  children: React.ReactNode
  inputId: string
  descriptionId: string
  errorId: string
}) {
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

      {children}

      {error && (
        <p className="mt-2 text-sm text-red-600" id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
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
      <FieldWrapper
        descriptionId={descriptionId}
        errorId={errorId}
        inputId={inputId}
        className={className}
        label={label}
        error={error}
        description={description}
      >
        <Input
          hasError={!!error}
          className={inputClass}
          {...(props as InputProps)}
          ref={ref}
          name={name}
          id={inputId}
          autoComplete={name}
          defaultValue={defaultValue}
          aria-describedby={
            error ? errorId : description ? descriptionId : undefined
          }
        />
      </FieldWrapper>
    )
  },
)

const DropdownField = React.forwardRef<
  HTMLInputElement,
  FieldProps & DropdownProps
>(function DropdownField(
  {
    error,
    name,
    label,
    description,
    id,
    className,
    defaultValue,
    items,
    inputClass,
    ...props
  },
  ref,
) {
  const inputId = id ?? name
  const errorId = `${inputId}-error`
  const descriptionId = `${inputId}-description`

  return (
    <div className={cx(className, 'w-full')}>
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

      <Dropdown
        hasError={!!error}
        className={inputClass}
        {...(props as DropdownProps)}
        ref={ref}
        name={name}
        id={inputId}
        defaultValue={defaultValue}
        items={items}
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
})

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
    <div className={cx(className, 'w-full group')}>
      <div className="flex relative items-start">
        <div className="flex items-center h-5">
          <Checkbox ref={ref} id={inputId} name={name} {...props} />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={inputId} className="font-medium text-primary">
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

export { Field, DropdownField, CheckboxField }
