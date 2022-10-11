import { Link } from '@daren/ui-components'
import { Link as RemixLink, LinkProps } from '@remix-run/react'
import * as React from 'react'

function NavLink({ ...props }: { children: any } & LinkProps) {
  return <Link as={RemixLink} {...props} />
}

export { NavLink }
