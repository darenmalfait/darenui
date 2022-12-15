import clsx from 'clsx'
import * as React from 'react'

import Editor from '../lib/utils/react-codex'

import {Highlight} from './highlight'

export function Code({className, ...rest}: any) {
  return (
    <Editor
      tabSize={2}
      highlight={(props: any) => <Highlight {...props} />}
      language="tsx"
      className={clsx(
        'group overflow-hidden font-mono text-sm leading-6 dark',
        className,
      )}
      lineWrap={false}
      lineNumber
      {...rest}
    />
  )
}
