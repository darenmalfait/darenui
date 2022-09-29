import type { ExtractProps } from '@daren/utils'
import { PlusIcon } from '@heroicons/react/24/solid'
import * as React from 'react'

import { Label } from './misc'

import { Select, SelectField, SelectItem } from './select'

function PillButton({
  item,
  onDelete,
}: {
  item: {
    value: string
    label: string
  }
  onDelete?(item: { value: string; label: string }): void
}) {
  return (
    <span
      key={item.label}
      className="m-1 inline-flex items-center rounded-md bg-green-100 py-1 pr-2 pl-3 text-sm font-bold text-[#008A4E]"
    >
      <span>{item.label}</span>
      {onDelete && (
        <button
          onClick={() => onDelete(item)}
          type="button"
          className="ml-1 inline-flex h-5 w-5 shrink-0 rounded-full p-0.5 text-green-700 hover:bg-white"
        >
          <span className="sr-only">remove {item.label}</span>
          <PlusIcon className="h-full w-full rotate-45 " />
        </button>
      )}
    </span>
  )
}

function ActiveItems({
  name,
  items,
  onItemToggle,
  disabled,
}: {
  disabled?: boolean
  name: string
  items: SelectItem[]
  onItemToggle?: (item: SelectItem) => void
}) {
  return (
    <div className="-m-1 flex flex-wrap items-center">
      {items.map(item => (
        <>
          <input type="hidden" name={name} value={JSON.stringify(item)} />
          <PillButton
            key={item.value}
            item={item}
            onDelete={!disabled ? onItemToggle : undefined}
          />
        </>
      ))}
    </div>
  )
}

interface MultiSelectProps
  extends Omit<
    ExtractProps<typeof SelectField>,
    'items' | 'onChange' | 'defaultValue'
  > {
  items: SelectItem[]
  onChange?(value?: SelectItem[]): void
  defaultValue?: SelectItem[]
}

function MultiSelect({
  defaultValue,
  value,
  onChange,
  items,
  name,
  disabled,
  label,
  error,
  id,
  description,
  icon = PlusIcon,
  ...props
}: MultiSelectProps) {
  const [selected, setSelected] = React.useState<SelectItem[]>(
    defaultValue || [],
  )

  function handleAdd(value: string) {
    if (disabled) return
    const selectedItem = items.find(item => item.value === value)

    if (!selectedItem || selected.find(item => item.value === value)) return

    const newSelected = [...selected, selectedItem]
    setSelected(newSelected)

    if (onChange) onChange(newSelected)
  }

  function handleRemove(item: SelectItem) {
    if (disabled) return
    const newSelected = selected.filter(({ value }) => item.value !== value)
    setSelected(newSelected)

    if (onChange) onChange(newSelected)
  }

  const availableItems = items.filter(
    item => !selected.find(selectedItem => selectedItem.value === item.value),
  )

  const inputId = id ?? name
  const errorId = `${inputId}-error`
  const descriptionId = `${inputId}-description`

  return (
    <div className="flex flex-col">
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
      <div className="flex flex-col space-y-2">
        {selected.length > 0 && (
          <ActiveItems
            disabled={disabled}
            name={name}
            onItemToggle={handleRemove}
            items={selected}
          />
        )}
        {!disabled && (
          <Select
            name=""
            items={availableItems}
            icon={icon}
            onChange={handleAdd}
            disabled={disabled}
            hasError={!!error}
            {...props}
          />
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
}

export { MultiSelect }
