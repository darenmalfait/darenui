import { cx } from '@daren/utils'
import * as React from 'react'

interface NavigationItemProps {
  className?: string | ((props: { isActive: boolean }) => string | undefined)
  title: string
  href?: string
  to?: string
  as?: React.ElementType
  icon?: React.ElementType
}

function getNavigationItemClassName({
  textClassNames = 'text-primary',
  paddingClassNames = 'px-3 py-2',
  backgroundClassNames = 'bg-primary hover:bg-gray-50',
} = {}) {
  return cx(
    'group flex items-center text-sm font-bold rounded-md',
    textClassNames,
    backgroundClassNames,
    paddingClassNames,
  )
}

function Item<T extends NavigationItemProps>({
  as,
  className,
  title,
  href,
  to,
  icon: Icon,
  ...props
}: T) {
  const Link = as ?? 'a'

  return (
    <Link
      href={href}
      to={to}
      className={className ?? getNavigationItemClassName({})}
      {...props}
    >
      {Icon && <Icon className="shrink-0 mr-3 -ml-1 w-6 h-6" />}
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
