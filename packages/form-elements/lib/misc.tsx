import { cx } from '@daren/utils'
import * as React from 'react'

function Label({
  className,
  htmlFor,
  ...props
}: JSX.IntrinsicElements['label']) {
  return (
    <label
      htmlFor={htmlFor}
      className={cx('block text-sm font-medium text-secondary', className)}
      {...props}
    />
  )
}

function ButtonGroup({ className, ...props }: JSX.IntrinsicElements['div']) {
  return (
    <div
      className={cx(
        'flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4',
        className,
      )}
      {...props}
    />
  )
}

function FormHelperText({ className, ...props }: JSX.IntrinsicElements['div']) {
  return (
    <div className={cx('text-sm text-primary-400', className)} {...props} />
  )
}

export { Label, FormHelperText, ButtonGroup }
