'use client'

import * as React from 'react'
import {cx} from '@daren/utils'
import {Combobox, Transition} from '@headlessui/react'
import {
  ChevronUpDownIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid'

import {Label} from './misc'
import {FieldProps} from './types'
import {InputSize, getInputClassName} from './utils'

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
  inputSize?: InputSize
  disabled?: boolean
  clearOnSelect?: boolean
}

const Select = React.forwardRef<HTMLInputElement, SelectProps>(function Select(
  props,
  ref,
) {
  const {
    id,
    items,
    name,
    hasError,
    clearOnSelect,
    // Not sure why this is throwing an error on OnChange
    // eslint-disable-next-line @typescript-eslint/unbound-method
    onChange,
    defaultValue,
    disabled,
    inputSize,
    icon: Icon = ChevronUpDownIcon,
    ...rest
  } = props

  const value = items.find(({value: val}) => val === defaultValue)

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
      if (clearOnSelect) {
        setQuery('')
        setSelected(undefined)
      }
    },
    [clearOnSelect, onChange],
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
              className={getInputClassName(
                props.className,
                hasError,
                inputSize,
              )}
              displayValue={item => (clearOnSelect ? '' : (item as any)?.label)}
              onChange={event => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-5">
              {hasError ? (
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              ) : (
                <Icon
                  width="20px"
                  height="20px"
                  className="h-5 w-5 text-gray-300"
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
            <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray-200 focus:outline-none sm:text-sm">
              {filteredItems.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredItems.map(item => (
                  <Combobox.Option
                    key={item.id ?? item.value}
                    className={({active}) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({selected: isSelected}) => (
                      <span
                        className={`block truncate ${
                          isSelected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.label}
                      </span>
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

      {error ? (
        <p className="mt-2 text-left text-sm text-red-600" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  )
})

export {Select, SelectField}
export type {SelectProps, SelectItem}
