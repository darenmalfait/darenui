import { cx } from '@daren/utils'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import github from 'prism-react-renderer/themes/github'
import * as React from 'react'

function pad(num: number | string, size = 2) {
  num = num.toString()
  while (num.length < size) num = `0${num}`

  return num
}

type CodeBlockLanguage = Language

function CodeBlock({
  code = ``,
  language = 'typescript',
  showLineNumbers,
}: {
  code?: string
  language?: Language
  showLineNumbers?: boolean
}) {
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={github}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cx(
            className,
            'pr-8 py-4 relative my-5 overflow-x-auto text-sm leading-relaxed rounded',
            {
              'pl-4': !showLineNumbers,
              'pl-16': showLineNumbers,
            },
          )}
          style={style}
        >
          {tokens.map((line, i) => {
            if (i === tokens.length - 1 && line.length === 0) return null

            return (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: i })}>
                {showLineNumbers && (
                  <span className="absolute grid place-items-center w-[40px] mr-[16px] flex-shrink-0 left-0 text-primary-300">
                    {pad(i + 1)}
                  </span>
                )}
                {line.length === 0 && <span>&#8203;</span>}
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
          {language && (
            <span className="sticky right-0 block w-full text-xs text-right">
              {language}
            </span>
          )}
        </pre>
      )}
    </Highlight>
  )
}

export { CodeBlock }
export type { CodeBlockLanguage }
