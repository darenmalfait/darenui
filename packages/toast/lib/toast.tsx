'use client'

import * as React from 'react'
import {cx} from '@daren/utils'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'
import * as ToastPrimitive from '@radix-ui/react-toast'

type ToastProps = {
  type: 'danger' | 'warning' | 'success' | 'info' | 'default'
}

const IconMap: Record<ToastProps['type'], React.ElementType> = {
  default: InformationCircleIcon,
  danger: XCircleIcon,
  warning: ExclamationCircleIcon,
  success: CheckCircleIcon,
  info: InformationCircleIcon,
}

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Toast> & ToastProps,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Toast>
>(({className, title, children, open, type = 'success', ...props}, ref) => {
  const Icon = IconMap[type]

  return (
    <ToastPrimitive.Root
      {...props}
      className={cx(
        'pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg p-4 dark:bg-gray-900 bg-secondary shadow-lg not-prose data-[state=open]:animate-fade-in-up data-[state=closed]:animate-slide-right transform data-[swipe=move]:ml-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:ml-0 data-[swipe=end]:animate-slide-right',
        {
          'shadow-outline': type === 'default',
          'border border-orange-100 dark:border-orange-200 dark:border-orange-200/20':
            type === 'warning',
          'border border-green-100 dark:border-green-200 dark:border-green-200/20':
            type === 'success',
          'border border-blue-100 dark:border-blue-200 dark:border-blue-200/20':
            type === 'info',
          'border border-red-100 dark:border-red-200 dark:border-red-200/20':
            type === 'danger',
        },
        className,
      )}
      open={open}
      ref={ref}
    >
      <div
        className={cx('absolute inset-0 -z-10', {
          'bg-orange-50 dark:bg-orange-500/10': type === 'warning',
          'bg-green-50 dark:bg-green-500/10': type === 'success',
          'bg-blue-50 dark:bg-blue-500/10': type === 'info',
          'bg-red-50 dark:bg-red-500/10': type === 'danger',
        })}
      />
      <div className="flex items-start">
        <div className="shrink-0">
          {type !== 'default' ? (
            <Icon
              className={cx('h-6 w-6 text-primary', {
                'text-orange-900 dark:text-orange-200': type === 'warning',
                'text-green-900 dark:text-green-200': type === 'success',
                'text-blue-900 dark:text-blue-200': type === 'info',
                'text-red-900 dark:text-red-200': type === 'danger',
              })}
              aria-hidden="true"
            />
          ) : null}
        </div>
        <div className="ml-3 flex w-0 flex-1 flex-col pt-0.5">
          {title ? (
            <ToastPrimitive.Title
              className={cx('text-sm font-bold text-primary', {
                'text-orange-900 dark:text-orange-200': type === 'warning',
                'text-green-900 dark:text-green-200': type === 'success',
                'text-blue-900 dark:text-blue-200': type === 'info',
                'text-red-900 dark:text-red-200': type === 'danger',
              })}
            >
              {title}
            </ToastPrimitive.Title>
          ) : null}
          <ToastPrimitive.Description
            className={cx('text-sm text-primary', {
              'mt-2': title,
              'text-orange-900 dark:text-orange-200': type === 'warning',
              'text-green-900 dark:text-green-200': type === 'success',
              'text-blue-900 dark:text-blue-200': type === 'info',
              'text-red-900 dark:text-red-200': type === 'danger',
            })}
          >
            {children}
          </ToastPrimitive.Description>
        </div>
        <ToastPrimitive.Close className="!leading-none" aria-label="Close">
          <span aria-hidden>×</span>
        </ToastPrimitive.Close>
      </div>
    </ToastPrimitive.Root>
  )
})
Toast.displayName = ToastPrimitive.Toast.displayName

const ToastProvider = ToastPrimitive.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({className, title, children, ...props}, ref) => {
  return (
    <ToastPrimitive.ToastViewport
      {...props}
      className={cx(
        'fixed right-0 bottom-4 sm:right-4 flex flex-col gap-2 w-full max-w-sm m-0 list-none z-50 outline-none',
        className,
      )}
      ref={ref}
    />
  )
})
ToastViewport.displayName = ToastPrimitive.Viewport.displayName

export {Toast, ToastProvider, ToastViewport}
