import * as React from 'react'
import {cx} from '@daren/utils'
import {Dialog, Transition} from '@headlessui/react'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'

interface ModalProps {
  type: 'danger' | 'warning' | 'success' | 'info' | 'neutral'
  title?: string
  description?: React.ReactNode
  className?: string
  open: boolean
  onClose(value: boolean): void
  initialFocus?: React.MutableRefObject<null>
  actions?: React.ReactNode
}

const IconMap: Record<ModalProps['type'], React.ElementType | undefined> = {
  danger: XCircleIcon,
  warning: ExclamationTriangleIcon,
  success: CheckCircleIcon,
  info: InformationCircleIcon,
  neutral: undefined,
}

function Modal({
  type = 'neutral',
  title,
  description,
  className,
  open,
  onClose,
  initialFocus,
  actions,
}: ModalProps) {
  const Icon = IconMap[type]

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-auto font-sans"
        initialFocus={initialFocus}
        onClose={onClose}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 dark:bg-white/25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={cx(
                  className,
                  'relative inline-block w-full rounded-lg px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all bg-primary sm:my-8 sm:w-full sm:max-w-xl sm:p-6 sm:align-middle',
                )}
              >
                <div className="sm:flex sm:items-start">
                  {Icon ? (
                    <div
                      className={cx(
                        'mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10',
                        {
                          'border border-orange-100 bg-orange-50 dark:border-orange-200 dark:border-orange-200/20 dark:bg-orange-500/10':
                            type === 'warning',
                          'border border-green-100 bg-green-50 dark:border-green-200 dark:border-green-200/20 dark:bg-green-500/10':
                            type === 'success',
                          'border border-blue-100 bg-blue-50 dark:border-blue-200 dark:border-blue-200/20 dark:bg-blue-500/10':
                            type === 'info',
                          'border border-red-100 bg-red-50 dark:border-red-200 dark:border-red-200/20 dark:bg-red-500/10':
                            type === 'danger',
                        },
                      )}
                    >
                      <Icon
                        className={cx('h-6 w-6', {
                          'text-orange-900 dark:text-orange-200':
                            type === 'warning',
                          'text-green-900 dark:text-green-200':
                            type === 'success',
                          'text-blue-900 dark:text-blue-200': type === 'info',
                          'text-red-900 dark:text-red-200': type === 'danger',
                        })}
                        aria-hidden="true"
                      />
                    </div>
                  ) : null}
                  <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className={cx('text-lg font-bold leading-6', {
                        'text-orange-900 dark:text-orange-200':
                          type === 'warning',
                        'text-green-900 dark:text-green-200':
                          type === 'success',
                        'text-blue-900 dark:text-blue-200': type === 'info',
                        'text-red-900 dark:text-red-200': type === 'danger',
                      })}
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-3">
                      <p className="text-sm text-secondary">{description}</p>
                    </div>
                  </div>
                </div>
                {actions ? (
                  <div className="mt-6 sm:mt-4 sm:ml-10 sm:flex sm:pl-4">
                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                      {actions}
                    </div>
                  </div>
                ) : null}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export {Modal}
