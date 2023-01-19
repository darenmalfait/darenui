import {cx} from '@daren/utils'
import * as React from 'react'

type NavigationItemProps = {
  className?: string | ((props: {isActive: boolean}) => string | undefined)
  title: string
  href?: string
  to?: string
  as?: React.ElementType
  icon?: React.ElementType
}

function getNavigationItemClassName({className}: {className?: string} = {}) {
  return cx(
    'flex w-full items-center gap-x-2 px-3 py-2 text-primary rounded-lg bg-black/0 transition hover:bg-black/5 dark:bg-white/0 dark:hover:bg-white/5',
    className,
  )
}

function Item<T>({
  as,
  className,
  title,
  href,
  to,
  icon: Icon,
  ...props
}: NavigationItemProps & T) {
  const Link = as ?? 'a'

  return (
    <Link
      href={href}
      to={to}
      className={className ?? getNavigationItemClassName({})}
      {...props}
    >
      {Icon ? <Icon className="mr-3 -ml-1 h-6 w-6 shrink-0" /> : null}
      <span className="truncate">{title}</span>
    </Link>
  )
}

function NavigationList({
  className,
  children,
  ...props
}: JSX.IntrinsicElements['nav']) {
  return (
    <nav {...props} className={className}>
      <div className="space-y-1">{children}</div>
    </nav>
  )
}

NavigationList.Item = Item

export {NavigationList, getNavigationItemClassName}
