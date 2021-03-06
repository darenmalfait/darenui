import { cx } from '@daren/utils'
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'
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
          'relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none group',
          checked ? 'bg-inverse text-inverse' : 'bg-secondary text-primary',
          {
            'ring-2 ring-offset-2 ring-inverse ring-inverse ring-opacity-60':
              active,
          },
        )
      }
    >
      {({ checked }) => (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <div className="text-sm">
              <HeadlessRadioGroup.Label
                as="p"
                className={`font-medium  ${
                  checked ? 'text-invserse' : 'text-primary'
                }`}
              >
                {label}
              </HeadlessRadioGroup.Label>
              {description && (
                <HeadlessRadioGroup.Description
                  as="span"
                  className={`inline ${
                    checked ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  {description}
                </HeadlessRadioGroup.Description>
              )}
            </div>
          </div>
          {checked && (
            <div className="shrink-0 text-inverse">
              <CheckCircleIcon className="w-6 h-6" />
            </div>
          )}
        </div>
      )}
    </HeadlessRadioGroup.Option>
  )
}

interface RadioGroupProps {
  name: string
  value?: any
  label?: string
  onChange: (value: any) => void
  children?: React.ReactNode
}

function RadioGroup({
  name,
  value,
  label,
  onChange,
  children,
}: RadioGroupProps) {
  return (
    <HeadlessRadioGroup value={value} onChange={onChange}>
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
