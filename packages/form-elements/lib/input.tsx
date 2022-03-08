import { cx } from '@daren/utils'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import * as React from 'react'

import { InputProps } from './types'
import { getInputClassName } from './utils'

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref,
) {
  const { type, hasError, ...inputProps } = props

  const className = getInputClassName(props.className, hasError)

  if (type === 'textarea') {
    return (
      <textarea
        {...(inputProps as JSX.IntrinsicElements['textarea'])}
        className={cx('h-36', className)}
        aria-invalid={hasError}
      />
    )
  }

  return (
    <div className="relative shadow-sm">
      <input
        type={type}
        {...(inputProps as JSX.IntrinsicElements['input'])}
        className={className}
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
