import { cx } from '@daren/utils'
import * as React from 'react'

type NavigationItemProps = {
  className?: string | ((props: { isActive: boolean }) => string | undefined)
  title: string
  href?: string
  to?: string
  as?: React.ElementType
  icon?: React.ElementType
}

function getNavigationItemClassName({
  textClassNames = 'text-primary hover:text-slate-800',
  paddingClassNames = 'px-3 py-2',
  backgroundClassNames = 'bg-primary hover:bg-gray-50',
} = {}) {
  return cx(
    textClassNames,
    backgroundClassNames,
    paddingClassNames,
    'group flex items-center text-sm font-bold rounded-md',
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
      {Icon && <Icon className="mr-3 -ml-1 h-6 w-6 shrink-0" />}
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

export { NavigationList, getNavigationItemClassName }
