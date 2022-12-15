import {cx, useControllableState} from '@daren/utils'
import {RadioGroup as HeadlessRadioGroup} from '@headlessui/react'
import {CheckCircleIcon} from '@heroicons/react/24/solid'
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
      className={({active, checked}) =>
        cx(
          className,
          'relative block cursor-pointer rounded-lg px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between',
          {
            'bg-secondary': !checked,
            'bg-inverse': checked,
            'border-gray-black ring-2 ring-success dark:border-white dark:ring-success':
              active,
          },
        )
      }
    >
      {({checked}) => (
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <div className="text-sm">
              <HeadlessRadioGroup.Label
                as="p"
                className={cx(
                  'font-bold',
                  checked ? 'text-white dark:text-black' : 'text-primary',
                )}
              >
                {label}
              </HeadlessRadioGroup.Label>
              {description ? (
                <HeadlessRadioGroup.Description
                  as="span"
                  className={cx(
                    'inline',
                    checked ? 'text-inverse' : 'text-secondary',
                  )}
                >
                  {description}
                </HeadlessRadioGroup.Description>
              ) : null}
            </div>
          </div>
          {checked ? (
            <div className="shrink-0 text-inverse">
              <CheckCircleIcon className="h-6 w-6" />
            </div>
          ) : null}
          <span
            className={cx('pointer-events-none absolute -inset-px rounded-lg')}
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

  function handleChange(newValue: any) {
    setValue(newValue)
    onChange?.(newValue)
  }

  return (
    <HeadlessRadioGroup value={value} onChange={handleChange} {...props}>
      <input name={name} value={value} type="hidden" />
      {label ? (
        <HeadlessRadioGroup.Label className="sr-only">
          {label}
        </HeadlessRadioGroup.Label>
      ) : null}
      <div className="space-y-2">{children}</div>
    </HeadlessRadioGroup>
  )
}

RadioGroup.Option = Option

export {RadioGroup}
