import { cx, useControllableState } from '@daren/utils'
import { Switch } from '@headlessui/react'
import * as React from 'react'

interface ToggleProps {
  name: string
  disabled?: boolean
  onChange?(): void
  value?: boolean
  activeColorClass?: string
  inactiveColorClass?: string
  defaultValue?: boolean
  label?: string
}

function Toggle({
  disabled,
  name,
  onChange,
  value,
  activeColorClass = 'bg-green-500',
  inactiveColorClass = 'bg-gray-200',
  defaultValue,
  label,
  ...props
}: Omit<JSX.IntrinsicElements['input'], 'defaultValue'> & ToggleProps) {
  const [enabled, setEnabled] = useControllableState(
    value,
    defaultValue || false,
    onChange,
  )

  return (
    <button onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}>
      <input
        {...props}
        type="hidden"
        name={name}
        value={enabled ? 'true' : 'false'}
      />
      <Switch
        id={name}
        disabled={disabled}
        checked={enabled}
        onChange={setEnabled}
        className={cx(
          enabled ? activeColorClass : inactiveColorClass,
          'group focus:ring-primary relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent shadow-inner transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
        )}
      >
        <span className="sr-only">{label}</span>
        <span
          className={cx(
            enabled
              ? 'translate-x-5 group-active:translate-x-3'
              : 'translate-x-0',
            'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-all duration-200 ease-in-out group-active:w-7',
          )}
        >
          <span
            className={cx(
              enabled
                ? 'opacity-0 duration-100 ease-out'
                : 'opacity-100 duration-200 ease-in',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
            )}
            aria-hidden="true"
          >
            <svg
              className="w-3 h-3 text-gray-400"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={cx(
              enabled
                ? 'opacity-100 duration-200 ease-in'
                : 'opacity-0 duration-100 ease-out',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
            )}
            aria-hidden="true"
          >
            <svg
              className={cx('h-3 w-3 text-primary')}
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            </svg>
          </span>
        </span>
      </Switch>
    </button>
  )
}

export { Toggle }
