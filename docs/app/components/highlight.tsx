import Prism, { defaultProps } from 'prism-react-renderer'
import * as React from 'react'

import { ClipboardCopyButton } from './clipboard-copy-button'

import theme from '~/lib/utils/prism/prism-theme.json'

export function Highlight({
  code,
  language,
  showClipBoard,
}: {
  code?: string
  language?: string
  lineNumber?: boolean
  showClipBoard?: boolean
}) {
  return (
    <div className="group relative h-full w-full dark">
      <Prism
        {...defaultProps}
        theme={theme as any}
        code={code || ''}
        language={(language as any) || 'tsx'}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Prism>
      {showClipBoard && (
        <ClipboardCopyButton
          value={code || ''}
          className="absolute -top-1 -right-4 z-10 opacity-0 group-hover:opacity-100"
        />
      )}
    </div>
  )
}
