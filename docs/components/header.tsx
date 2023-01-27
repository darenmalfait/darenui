import * as React from 'react'
import Link from 'next/link'
import {cx} from '@daren/ui-components'
import {motion} from 'framer-motion'

import {useMobileNav} from '../context/mobile-nav-provider'
import {Logo} from './logo'
import {MobileNavigation} from './mobile-navigation'
import {ThemeToggle} from './theme-toggle'

function TopLevelNavItem({
  href,
  children,
  target,
}: Pick<JSX.IntrinsicElements['a'], 'children' | 'target'> & {
  href: string
}) {
  return (
    <li>
      <Link
        target={target}
        href={href}
        className="text-sm leading-5 transition text-secondary hover:text-primary-800  dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

const Header = React.forwardRef<any, any>(function Header({className}, ref) {
  const {isOpen} = useMobileNav()

  return (
    <motion.div
      ref={ref}
      className={cx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition shadow-outline sm:px-6 lg:z-30 lg:px-8',
        !isOpen && 'backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80',
      )}
    >
      <div className="flex w-full items-center gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <div className="flex items-center space-x-3">
            <Logo className="h-6" />
            <span className="ml-2 flex items-center space-x-2 text-lg font-semibold text-primary">
              Daren
              <span className="ml-1 rounded-md border border-black p-1 text-[8px] leading-snug dark:!border-white">
                UI
              </span>
            </span>
          </div>
        </Link>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <TopLevelNavItem href="/">Documentation</TopLevelNavItem>
            <TopLevelNavItem href="https://www.daren.be" target="_blank">
              Daren
            </TopLevelNavItem>
          </ul>
        </nav>
        <div className="md:dark:bg-white/15 md:bg-gray-900/10 hidden md:block md:h-5 md:w-px" />
        <div className="flex gap-4">
          <ThemeToggle />
        </div>
      </div>
    </motion.div>
  )
})

export {Header}
