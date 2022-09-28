import { cx } from '@daren/utils'
import {
  ExclamationCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid'
import * as React from 'react'

interface AlertProps {
  type: 'danger' | 'warning' | 'success' | 'info'
  hideIcon?: boolean
  title?: string
  description?: React.ReactNode
  className?: string
}

const IconMap: Record<AlertProps['type'], React.ElementType> = {
  danger: XCircleIcon,
  warning: ExclamationCircleIcon,
  success: CheckCircleIcon,
  info: InformationCircleIcon,
}

function Alert({
  type = 'info',
  title,
  hideIcon,
  description,
  className,
}: AlertProps) {
  const Icon = IconMap[type]

  return (
    <div
      className={cx(className, 'p-4 rounded-md', {
        'bg-yellow-50': type === 'warning',
        'bg-green-50': type === 'success',
        'bg-blue-50': type === 'info',
        'bg-red-50': type === 'danger',
      })}
    >
      <div className="flex">
        {!hideIcon && (
          <div className="shrink-0">
            <Icon
              className={cx('w-5 h-5', {
                'text-yellow-400': type === 'warning',
                'text-green-400': type === 'success',
                'text-blue-400': type === 'info',
                'text-red-400': type === 'danger',
              })}
              aria-hidden="true"
            />
          </div>
        )}
        <div className="ml-3">
          {title && (
            <h3
              className={cx('text-sm font-medium', {
                'text-yellow-800': type === 'warning',
                'text-green-800': type === 'success',
                'text-blue-800': type === 'info',
                'text-red-800': type === 'danger',
              })}
            >
              {title}
            </h3>
          )}
          {description && (
            <div
              className={cx('text-sm', {
                'mt-2': title,
                'text-yellow-700': type === 'warning',
                'text-green-700': type === 'success',
                'text-blue-700': type === 'info',
                'text-red-700': type === 'danger',
              })}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export { Alert }
