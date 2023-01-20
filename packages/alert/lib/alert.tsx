import {cx} from '@daren/utils'
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
      className={cx(className, 'rounded-lg p-4', {
        'border border-orange-100 bg-orange-50 dark:border-orange-200 dark:border-orange-200/20 dark:bg-orange-500/10':
          type === 'warning',
        'border border-green-100 bg-green-50 dark:border-green-200 dark:border-green-200/20 dark:bg-green-500/10':
          type === 'success',
        'border border-blue-100 bg-blue-50 dark:border-blue-200 dark:border-blue-200/20 dark:bg-blue-500/10':
          type === 'info',
        'border border-red-100 bg-red-50 dark:border-red-200 dark:border-red-200/20 dark:bg-red-500/10':
          type === 'danger',
      })}
    >
      <div className="flex">
        {hideIcon ? null : (
          <div className="shrink-0">
            <Icon
              className={cx('h-5 w-5', {
                'text-orange-900 dark:text-orange-200': type === 'warning',
                'text-green-900 dark:text-green-200': type === 'success',
                'text-blue-900 dark:text-blue-200': type === 'info',
                'text-red-900 dark:text-red-200': type === 'danger',
              })}
              aria-hidden="true"
            />
          </div>
        )}
        <div className="ml-3">
          {title ? (
            <h3
              className={cx('text-sm font-bold', {
                'text-orange-900 dark:text-orange-200': type === 'warning',
                'text-green-900 dark:text-green-200': type === 'success',
                'text-blue-900 dark:text-blue-200': type === 'info',
                'text-red-900 dark:text-red-200': type === 'danger',
              })}
            >
              {title}
            </h3>
          ) : null}
          {description ? (
            <div
              className={cx('text-sm', {
                'mt-2': title,
                'text-orange-900 dark:text-orange-200': type === 'warning',
                'text-green-900 dark:text-green-200': type === 'success',
                'text-blue-900 dark:text-blue-200': type === 'info',
                'text-red-900 dark:text-red-200': type === 'danger',
              })}
            >
              {description}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export {Alert}
