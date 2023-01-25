import {cx} from '@daren/ui-components'
import {AnimatePresence, motion, useIsPresent} from 'framer-motion'
import Link from 'next/link'
import {useRouter} from 'next/router'
import * as React from 'react'

import {useMobileNav} from '../context/mobile-nav-provider'
import {useSections} from '../context/section-provider'
import {remToPx} from '../lib/utils/rem-to-px'

import {Tag} from './tag'

function TopLevelNavItem({
  href,
  children,
  target,
}: Pick<JSX.IntrinsicElements['a'], 'children' | 'target'> & {
  href: string
}) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        target={target}
        className="block py-1 text-sm transition text-primary hover:text-gray-900 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

function NavLink({
  href,
  tag,
  active,
  isAnchorLink = false,
  children,
}: {
  href: string
  tag?: string
  active?: boolean
  isAnchorLink?: boolean
  children: React.ReactNode
}) {
  const {close} = useMobileNav()

  return (
    <Link
      onClick={close}
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'text-primary dark:text-white'
          : 'text-secondary hover:text-primary',
      )}
    >
      <span className="truncate">{children}</span>
      {tag ? (
        <Tag variant="small" color="gray">
          {tag}
        </Tag>
      ) : null}
    </Link>
  )
}

function VisibleSectionHighlight({
  group,
  pathname,
}: {
  group: {
    links: Array<{href: string}>
  }
  pathname: string
}) {
  const {sections, visibleSections} = useSections()

  const isPresent = useIsPresent()
  const firstVisibleSectionIndex = Math.max(
    0,
    [{id: '_top'}, ...sections].findIndex(
      section => section.id === visibleSections[0],
    ),
  )
  const itemHeight = remToPx(2)
  const height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight

  const index = group.links.findIndex(link => link.href === pathname)
  const top = index * itemHeight + firstVisibleSectionIndex * itemHeight

  return (
    <motion.div
      layout
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 0.2}}}
      exit={{opacity: 0}}
      className="absolute inset-x-0 top-0 bg-black/5 will-change-transform dark:bg-white/10"
      style={{borderRadius: 8, height, top}}
    />
  )
}

function ActivePageMarker({
  group,
  pathname,
}: {
  group: {
    links: Array<{href: string}>
  }
  pathname: string
}) {
  const itemHeight = remToPx(2)
  const offset = remToPx(0.25)
  const activePageIndex = group.links.findIndex(link => link.href === pathname)
  const top = offset + activePageIndex * itemHeight

  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px bg-daren"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 0.2}}}
      exit={{opacity: 0}}
      style={{top}}
    />
  )
}

function NavigationGroup({
  group,
  className,
}: {
  group: {
    title: string
    links: Array<{href: string; tag?: string; title: string}>
  }
  className?: string
}) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  const {isOpen} = useMobileNav()
  const {sections} = useSections()
  const router = useRouter()

  const isActiveGroup =
    group.links.findIndex(link => link.href === router.pathname) !== -1

  return (
    <li className={cx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-gray-900 dark:text-white"
      >
        {group.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isOpen}>
          {isActiveGroup ? (
            <VisibleSectionHighlight group={group} pathname={router.pathname} />
          ) : null}
        </AnimatePresence>
        <motion.div
          layout
          className="bg-gray-900/10 absolute inset-y-0 left-2 w-px dark:bg-white/5"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup ? (
            <ActivePageMarker group={group} pathname={router.pathname} />
          ) : null}
        </AnimatePresence>
        <ul className="space-y-1 border-l border-transparent">
          {group.links.map(link => (
            <motion.li
              key={link.href}
              layout="position"
              className="relative space-y-1"
            >
              <NavLink href={link.href} active={link.href === router.pathname}>
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === router.pathname && sections.length > 0 ? (
                  <motion.ul
                    initial={{opacity: 0}}
                    animate={{
                      opacity: 1,
                      transition: {delay: 0.1},
                    }}
                    exit={{
                      opacity: 0,
                      transition: {duration: 0.15},
                    }}
                    className="space-y-1"
                  >
                    {sections.map(section => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          isAnchorLink
                        >
                          {section.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export const navigation = [
  {
    title: 'Global',
    links: [
      {title: 'Introduction', href: '/'},
      {title: 'Quickstart', href: '/quickstart'},
      {title: 'Utils', href: '/utils'},
      {title: 'Hooks', href: '/hooks'},
      {title: 'Typography', href: '/typography'},
    ],
  },
  {
    title: 'Layout',
    links: [
      {title: 'Container', href: '/container'},
      {title: 'Grid', href: '/grid'},
      {title: 'Section', href: '/section'},
    ],
  },
  {
    title: 'Form Elements',
    links: [
      {title: 'Input', href: '/input'},
      {title: 'Field', href: '/field'},
      {title: 'Checkbox', href: '/checkbox'},
      {title: 'CheckboxField', href: '/checkbox-field'},
      {title: 'Toggle', href: '/toggle'},
      {title: 'Select', href: '/select'},
      {title: 'SelectField', href: '/select-field'},
      {title: 'MultiSelect', href: '/multi-select'},
      {title: 'TimePickerField', href: '/timepicker-field'},
      {title: 'RadioGroup', href: '/radio-group'},
    ],
  },
  {
    title: 'Buttons',
    links: [
      {title: 'Button', href: '/button'},
      {title: 'ButtonLink', href: '/button-link'},
      {title: 'Link', href: '/link'},
      {title: 'LinkButton', href: '/link-button'},
      {title: 'DoubleLabelLink', href: '/double-label-link'},
    ],
  },
  {
    title: 'Other',
    links: [
      {title: 'Alert', href: '/alert'},
      {title: 'Modal', href: '/modal'},
      {title: 'NavigationList', href: '/navigation-list'},
      {title: 'Tabs', href: '/tabs'},
      {title: 'ProgressiveImage', href: '/progressive-image'},
      {title: 'Review', href: '/review'},
      {title: 'Spinner', href: '/spinner'},
    ],
  },
]

export function Navigation(props: JSX.IntrinsicElements['nav']) {
  return (
    <nav {...props}>
      <ul>
        <TopLevelNavItem href="/">Documentation</TopLevelNavItem>
        <TopLevelNavItem href="https://www.daren.be" target="_blank">
          Daren
        </TopLevelNavItem>
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 ? 'md:mt-0' : undefined}
          />
        ))}
      </ul>
    </nav>
  )
}
