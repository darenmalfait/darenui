import * as React from 'react'

import { GithubIcon } from '../icons/github-icon'

function ButtonLink({ children, href }: JSX.IntrinsicElements['area']) {
  return (
    <a
      className="flex items-center p-2 space-x-2 text-sm rounded-md border border-primary-200 transition-transform hover:-translate-y-1 text-primary"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

function Actions({ packageName }: { packageName: string }) {
  const source = `https://github.com/darenmalfait/darenui/tree/main/packages/${packageName}`

  return (
    <div className="flex flex-col mb-8 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <ButtonLink href={source}>
        <GithubIcon className="w-4 h-4" />
        <span>View source</span>
      </ButtonLink>
    </div>
  )
}

export { Actions }
