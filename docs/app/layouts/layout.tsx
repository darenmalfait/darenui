import {
  Container,
  getNavigationItemClassName,
  Grid,
  NavigationList,
} from '@daren/ui-components'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import * as React from 'react'

import components from '~/components/components'
import { Wrapper } from '~/components/layout-components'
import { Logo } from '~/components/logo'
import { Search } from '~/components/search'
import { ThemeToggle } from '~/components/theme-toggle'

type NavContextType = {
  sidebarOpen?: boolean
  setSidebarOpen(open: boolean): void
}

const NavContext = React.createContext<NavContextType>({
  setSidebarOpen: () => {},
})

function useNav() {
  return React.useContext(NavContext)
}

// function BetaBadge() {
//   return (
//     <span className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-accent-100 py-1 px-2 text-[8px] text-white">
//       beta
//     </span>
//   )
// }

function SecondaryNavigation() {
  const { setSidebarOpen } = useNav()

  return (
    <Grid nested>
      <Container size="full">
        <div className="relative z-10 flex h-16 shrink-0 border-b border-gray-200 bg-primary dark:border-gray-800">
          <div className="flex flex-1 items-center justify-between space-x-3 pr-4 lg:pr-0">
            <div className="flex flex-1 items-center space-x-3">
              <Logo className="h-8 w-8" />
              <h2 className="ml-2 flex items-center space-x-2 text-lg font-semibold text-primary">
                Daren
                <span className="ml-1 rounded-md border border-black p-1 text-[8px] leading-snug dark:!border-white">
                  UI
                </span>
              </h2>
              <span className="sr-only">DarenUI</span>
            </div>
            <Search />
            <ThemeToggle />
          </div>
          <button
            type="button"
            className="focus:ring-primary -mr-4 border-l border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset dark:border-gray-800 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open navigation</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </Grid>
  )
}

function NavItems({ onClick }: { onClick: () => void }) {
  function getNavigationListItemClassName({ isActive }: { isActive: boolean }) {
    return getNavigationItemClassName({
      textClassNames: clsx(
        'font-normal capitalize',
        isActive ? 'text-success' : 'text-primary',
        'hover:text-success',
      ),
      backgroundClassNames: 'bg-primary',
      paddingClassNames: 'py-2 px-0',
    })
  }

  function handleClick() {
    onClick()
  }

  return (
    <div className="mt-8">
      <NavigationList>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          <div className="py-2">
            <div className="relative">
              <NavigationList.Item
                title="Global"
                className={clsx(
                  getNavigationListItemClassName,
                  'text-lg font-bold',
                )}
              />
            </div>
            <div className="relative">
              <NavigationList.Item
                as={NavLink}
                to="/getting-started"
                title="Getting started"
                className={getNavigationListItemClassName}
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="space-y-4 py-3">
            {components.map((comp, idx) => (
              <div key={idx}>
                <div className="relative">
                  <NavigationList.Item
                    title={comp.heading}
                    className={clsx(
                      getNavigationListItemClassName,
                      'text-lg font-bold',
                    )}
                  />
                </div>
                {comp.components.map(c => (
                  <div className="relative" key={c.key}>
                    <NavigationList.Item
                      as={NavLink}
                      to={`/${c.key}`}
                      title={c.title}
                      className={getNavigationListItemClassName}
                      onClick={handleClick}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </NavigationList>
    </div>
  )
}

function SidebarForDesktop({ onClick }: { onClick: () => void }) {
  return (
    <div className="hidden lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col overflow-y-auto pb-4">
        <NavItems onClick={onClick} />
      </div>
    </div>
  )
}

function SidebarForMobile() {
  const { sidebarOpen, setSidebarOpen } = useNav()

  return (
    <Transition.Root show={sidebarOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 flex justify-end lg:hidden"
        onClose={setSidebarOpen}
      >
        <div className="w-14 shrink-0" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
        <Transition.Child
          as={React.Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay
            className={clsx('bg-inverse fixed inset-0', {
              'opacity-75': sidebarOpen,
              'opacity-0': !sidebarOpen,
            })}
          />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="relative flex w-full max-w-xs flex-1 flex-col pb-4 bg-primary">
            <Transition.Child
              as={React.Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-4 right-3">
                <button
                  type="button"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close navigation</span>
                  <XMarkIcon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Transition.Child>
            <NavItems onClick={() => setSidebarOpen(false)} />
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className="min-h-full">
      <NavContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
        <SidebarForMobile />
        <Grid>
          <Container size="full">
            <SecondaryNavigation />

            <div className="flex lg:space-x-8">
              <SidebarForDesktop onClick={() => setSidebarOpen(false)} />
              <div className="flex w-full flex-col">
                <main className="mt-8 pb-8">
                  <Grid nested>
                    <Container size="full">
                      <Wrapper>{children}</Wrapper>
                    </Container>
                  </Grid>
                </main>
              </div>
            </div>
          </Container>
        </Grid>
      </NavContext.Provider>
    </div>
  )
}

export { Layout }
