import { cx, useControllableState } from '@daren/utils'
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import * as React from 'react'

interface OptionProps {
  value: any
  label: string
  description?: string
}

function Option({
  value,
  label,
  description,
  className,
  ...props
}: OptionProps & JSX.IntrinsicElements['div']) {
  return (
    <HeadlessRadioGroup.Option
      value={value}
      {...props}
      className={({ active, checked }) =>
        cx(
          className,
          checked ? 'border-transparent' : 'border-gray-300',
          active
            ? 'border-gray-black dark:border-white ring-2 ring-black dark:ring-white'
            : '',
          'relative block cursor-pointer rounded-lg border bg-primary px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between',
        )
      }
    >
      {({ active, checked }) => (
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <div className="text-sm">
              <HeadlessRadioGroup.Label
                as="p"
                className={`font-bold  ${
                  checked ? 'text-invserse' : 'text-primary'
                }`}
              >
                {label}
              </HeadlessRadioGroup.Label>
              {description && (
                <HeadlessRadioGroup.Description
                  as="span"
                  className={`inline ${
                    checked ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {description}
                </HeadlessRadioGroup.Description>
              )}
            </div>
          </div>
          {checked && (
            <div className="shrink-0 text-primary">
              <CheckCircleIcon className="h-6 w-6" />
            </div>
          )}
          <span
            className={cx(
              active ? 'border' : 'border-2',
              checked
                ? 'border-gray-800 dark:border-gray-200'
                : 'border-transparent',
              'pointer-events-none absolute -inset-px rounded-lg',
            )}
            aria-hidden="true"
          />
        </div>
      )}
    </HeadlessRadioGroup.Option>
  )
}

interface RadioGroupProps {
  name: string
  value?: any
  label?: string
  onChange?: (value: any) => void
  children?: React.ReactNode
}

function RadioGroup({
  name,
  value: valueProp,
  defaultValue,
  label,
  onChange,
  children,
  ...props
}: JSX.IntrinsicElements['input'] & RadioGroupProps) {
  const [value, setValue] = useControllableState(
    valueProp,
    defaultValue,
    onChange,
  )

  function handleChange(value: any) {
    setValue(value)
    onChange?.(value)
  }

  return (
    <HeadlessRadioGroup value={value} onChange={handleChange} {...props}>
      <input name={name} value={value} type="hidden" />
      {label && (
        <HeadlessRadioGroup.Label className="sr-only">
          {label}
        </HeadlessRadioGroup.Label>
      )}
      <div className="space-y-2">{children}</div>
    </HeadlessRadioGroup>
  )
}

RadioGroup.Option = Option

export { RadioGroup }
