import { cx } from '@daren/utils';
import * as React from 'react';

import { useHighlighter } from './highlighter';

function getLanguage(language: string) {
  const map: any = {
    bash: 'text',
    tsx: 'tsx',
    jsx: 'tsx',
    js: 'tsx',
  };

  return map[language] || 'text';
}

interface CodeBlockProps {
  language?: string;
  code?: string;
  showLineNumbers?: boolean;
}

function CodeBlock({
  code = '',
  language: languageProp,
  showLineNumbers,
}: CodeBlockProps) {
  const language = getLanguage(languageProp || '');

  const { tokens, getLineProps, getTokenProps } = useHighlighter({
    code,
    language,
  });

  function pad(num: number | string, size = 2) {
    num = num.toString();
    while (num.length < size) num = `0${num}`;

    return num;
  }

  const preStyles = {
    '--shiki-color-text': 'var(--base05)',
    '--shiki-color-background': 'var(--base00)',
    '--shiki-token-constant': 'var(--base09)',
    '--shiki-token-string': 'var(--base0b)',
    '--shiki-token-comment': 'var(--base03)',
    '--shiki-token-keyword': 'var(--base0a)',
    '--shiki-token-parameter': 'var(--base08)',
    '--shiki-token-function': 'var(--base0d)',
    '--shiki-token-string-expression': 'var(--base0b)',
    '--shiki-token-punctuation': 'var(--base05)',
    '--shiki-token-link': 'var(--base05)',
    backgroundColor: 'var(--base00)',
  } as React.CSSProperties;

  return (
    <pre
      style={preStyles}
      className={cx(
        'pr-8 py-4 relative my-5 overflow-x-auto text-sm leading-relaxed rounded',
        {
          'pl-4': !showLineNumbers,
          'pl-16': showLineNumbers,
        },
      )}
    >
      <div className="relative w-full h-full group ">
        <code
          className={`relative  language-${language}`}
          style={{
            fontFamily: 'inherit',
            fontSize: 'inherit',
            whiteSpace: 'inherit',
            wordBreak: 'inherit',
            overflowWrap: 'inherit',
            lineHeight: 'inherit',
          }}
        >
          <div className="flex flex-col text-primary-400">
            {tokens.map((line: any, i: number) => {
              if (i === tokens.length - 1 && line.length === 0) return null;

              return (
                <span
                  key={i}
                  {...getLineProps({
                    line,
                    key: i,
                  })}
                >
                  {showLineNumbers && (
                    <span className="absolute grid place-items-center w-[40px] mr-[16px] flex-shrink-0 -left-14 text-primary-300">
                      {pad(i + 1)}
                    </span>
                  )}
                  {line.length === 0 && <span>&#8203;</span>}
                  {line.map((token: any, key: number) => (
                    <span
                      key={key}
                      {...getTokenProps({
                        token,
                        key,
                      })}
                    />
                  ))}
                </span>
              );
            })}
          </div>
        </code>
      </div>
      {languageProp && (
        <span className="sticky right-0 block w-full text-xs text-right">
          {languageProp}
        </span>
      )}
    </pre>
  );
}

export { CodeBlock };
