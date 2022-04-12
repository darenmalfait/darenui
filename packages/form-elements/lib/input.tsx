import { cx } from '@daren/utils'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import * as React from 'react'

import { InputProps } from './types'
import { getInputClassName } from './utils'

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref,
) {
  const { type, hasError, icon: Icon, ...inputProps } = props

  const className = getInputClassName(props.className, hasError)

  if (type === 'textarea') {
    return (
      <div className="relative flex-items-center">
        {Icon && (
          <Icon
            width="20px"
            height="20px"
            className={cx(
              'z-10 flex absolute top-0 left-5 justify-center items-center p-0 h-full',
              {
                'text-red-500': hasError,
              },
            )}
          />
        )}
        <textarea
          {...(inputProps as JSX.IntrinsicElements['textarea'])}
          className={cx('h-36', className, { 'pl-14': !!Icon })}
          aria-invalid={hasError}
        />
      </div>
    )
  }

  return (
    <div className="relative shadow-sm">
      {Icon && (
        <Icon
          width="20px"
          height="20px"
          className={cx(
            'z-10 flex absolute top-0 left-5 justify-center items-center p-0 h-full',
            {
              'text-red-500': hasError,
            },
          )}
        />
      )}
      <input
        type={type}
        {...(inputProps as JSX.IntrinsicElements['input'])}
        className={cx(className, { 'pl-14': !!Icon })}
        ref={ref}
        aria-invalid={hasError}
      />
      {hasError && (
        <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
          <ExclamationCircleIcon
            className="w-5 h-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  )
})

export { Input }
