import { Transition } from '@headlessui/react'
import { Squares2X2Icon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import * as React from 'react'

import components from './components'
import { NavLink } from './nav-link'
import { useNavigation } from './navigation-provider'

export const mainNavigation = [
  {
    icon: Squares2X2Icon,
    title: 'Getting Started',
    path: '/',
  },
  {
    icon: Squares2X2Icon,
    title: 'Getting Started',
    path: '/getting-started',
    hidden: true,
  },
]

export function Navigation() {
  const { open, slideMode, setOpen, navRef } = useNavigation()

  return (
    <nav ref={navRef} className="min-h-full">
      <Transition.Root show={open} as={React.Fragment}>
        <div
          className={clsx(
            'fixed inset-y-0 left-0 z-30 h-full min-h-full w-64 px-3 py-5 bg-secondary text-primary lg:static lg:block',
          )}
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative h-full">
            {slideMode && (
              <div className="absolute top-0 right-0 -mr-8 flex pt-0 pl-2 sm:-mr-10 sm:pl-4">
                <button
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
            <div className="flex h-full flex-col overflow-hidden">
              <div className="flex flex-1 flex-col overflow-auto px-2 py-4">
                <div className="mb-6 space-y-1">
                  {mainNavigation.map((link, idx) => {
                    if (link.hidden) return null

                    return (
                      <NavLink
                        key={idx}
                        to={link.path}
                        className={clsx(
                          'cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1.5 text-sm font-medium transition-colors duration-150 ease-in-out',
                        )}
                        onClick={() => slideMode && setOpen(false)}
                      >
                        <div className="mr-2 h-5 w-5 text-primary-500" />
                        <span>{link.title}</span>
                      </NavLink>
                    )
                  })}
                </div>

                <div className="flex flex-col space-y-4">
                  {components.map((comp, idx) => (
                    <div key={idx}>
                      <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-white">
                        {comp.heading}
                      </p>
                      <div className="flex flex-col space-y-0">
                        {comp.components.map(c => (
                          <NavLink
                            key={c.key}
                            to={`/${c.key}`}
                            className={clsx(
                              'cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1 text-sm',
                            )}
                            onClick={() => slideMode && setOpen(false)}
                          >
                            <span>{c.title}</span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition.Root>
    </nav>
  )
}
