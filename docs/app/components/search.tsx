import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import * as React from 'react'

import components from './components'

import { filterComponents } from '~/lib/utils/components'

function Search() {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')

  const allComponents = React.useMemo(() => {
    return components.reduce(
      (acc, curr) => {
        return [
          ...acc,
          ...curr.components.map(c => ({ ...c, category: curr.heading })),
        ]
      },
      [] as {
        key: string
        title: string
        category: string
        keywords: string[]
        package: string
      }[],
    )
  }, [])

  const filteredComponents = React.useMemo(() => {
    return filterComponents(allComponents, query)
  }, [allComponents, query])

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function handleKeyDown(event: KeyboardEvent) {
    if (event.metaKey && event.key === 'k') {
      event.preventDefault()
      setOpen(true)
    }
  }

  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center rounded-full p-2 focus-ring"
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon className="w-5" />
        <div className="sr-only">Search</div>
      </button>
      <Transition.Root
        show={open}
        as={React.Fragment}
        afterLeave={() => setQuery('')}
        appear
      >
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(false)}
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
            <div
              className={clsx('fixed inset-0 bg-black transition-opacity ', {
                'opacity-25 dark:opacity-70': open,
                'opacity-0': !open,
              })}
            />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="group mx-auto max-w-xl rounded-xl shadow-2xl transition-all bg-secondary">
                <Combobox
                  value=""
                  onChange={(component: any) =>
                    (window.location =
                      `/${component.key}` as unknown as Location)
                  }
                >
                  <div className="relative">
                    <Combobox.Input
                      className="h-12 w-full rounded-lg border-0 bg-primary-600 pr-11 pl-4 font-bold text-black outline-none placeholder:text-gray-500 focus:ring-0 sm:text-sm"
                      placeholder="Search components..."
                      onChange={event => setQuery(event.target.value)}
                    />
                    <MagnifyingGlassIcon
                      className="pointer-events-none absolute top-3.5 right-4 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>

                  {filteredComponents.length > 0 && query != '' && (
                    <Combobox.Options
                      static
                      className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-primary"
                    >
                      {filteredComponents.map(component => (
                        <Combobox.Option
                          key={component.key}
                          value={component}
                          className={({ active }) =>
                            clsx(
                              'flex items-center justify-between p-4',
                              active && 'bg-primary',
                            )
                          }
                        >
                          <span className="whitespace-nowrap font-semibold text-primary">
                            {component.title}
                          </span>
                          <span className="ml-4 text-right text-xs text-secondary">
                            {component.category}
                          </span>
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}

                  {query !== '' && filteredComponents.length === 0 && (
                    <p className="p-4 text-sm text-gray-500">
                      No components found.
                    </p>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export { Search }
