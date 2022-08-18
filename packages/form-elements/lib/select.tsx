import { cx } from '@daren/utils'
import { Combobox, Transition } from '@headlessui/react'
import {
  CheckIcon,
  ExclamationCircleIcon,
  SelectorIcon,
} from '@heroicons/react/solid'
import * as React from 'react'

import { Label } from './misc'
import { FieldProps } from './types'

import { getInputClassName, inputSize } from './utils'

type SelectItem = {
  id?: string
  label: string
  value: string
  [key: string]: any
}

interface SelectProps {
  id?: string
  name?: string
  items: SelectItem[]
  onChange?(value?: string): void
  value?: string
  hasError?: boolean
  icon?: React.ElementType
  className?: string
  defaultValue?: string
  inputSize?: inputSize
  disabled?: boolean
}

const Select = React.forwardRef<HTMLInputElement, SelectProps>(function Select(
  props,
  ref,
) {
  const {
    id,
    items,
    name,
    onChange,
    hasError,
    defaultValue,
    disabled,
    inputSize,
    icon: Icon = SelectorIcon,
    ...rest
  } = props
  const value = items.find(({ value: val }) => val === defaultValue)

  const [selected, setSelected] = React.useState(value)
  const [query, setQuery] = React.useState('')

  const filteredItems =
    query === ''
      ? items
      : items.filter(item =>
          item.label
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        )

  const handleChange = React.useCallback(
    (val: typeof value) => {
      setSelected(val)
      if (onChange) onChange(val?.value)
    },
    [onChange],
  )

  return (
    <div className="w-full">
      <Combobox value={selected} disabled={disabled} onChange={handleChange}>
        <input
          {...rest}
          disabled={disabled}
          type="hidden"
          ref={ref}
          name={name}
          value={selected?.value}
        />

        <div className="relative">
          <div className="relative">
            <Combobox.Input
              aria-disabled={disabled}
              disabled={disabled}
              className={getInputClassName(
                props.className,
                hasError,
                inputSize,
              )}
              displayValue={item => (item as any)?.label}
              onChange={event => setQuery(event.target.value)}
            />
            <Combobox.Button className="flex absolute inset-y-0 right-0 items-center pr-5">
              {hasError ? (
                <ExclamationCircleIcon
                  className="w-5 h-5 text-red-500"
                  aria-hidden="true"
                />
              ) : (
                <Icon
                  width="20px"
                  height="20px"
                  className="w-5 h-5 text-gray-300"
                  aria-hidden="true"
                />
              )}
            </Combobox.Button>
          </div>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="overflow-auto absolute z-20 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md focus:outline-none ring-1 ring-slate-200 shadow-lg sm:text-sm">
              {filteredItems.length === 0 && query !== '' ? (
                <div className="relative py-2 px-4 text-gray-700 cursor-default select-none">
                  Nothing found.
                </div>
              ) : (
                filteredItems.map(item => (
                  <Combobox.Option
                    key={item.id ?? item.value}
                    className={({ active }) =>
                      `cursor-default select-none relative py-2 pl-10 pr-4 ${
                        active
                          ? 'text-primary-500 bg-gray-100'
                          : 'text-primary-500'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item.label}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
})

const SelectField = React.forwardRef<
  HTMLInputElement,
  FieldProps & SelectProps
>(function SelectField(
  {
    error,
    name,
    label,
    description,
    id,
    className,
    defaultValue,
    items,
    ...props
  },
  ref,
) {
  const inputId = id ?? name
  const errorId = `${inputId}-error`
  const descriptionId = `${inputId}-description`

  return (
    <div className={cx(className, 'w-full')}>
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

      <Select
        hasError={!!error}
        {...(props as SelectProps)}
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

export { Select, SelectField }
export type { SelectProps, SelectItem }
