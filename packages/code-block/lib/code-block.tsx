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

  return (
    <pre
      className={cx(
        'pr-8 py-4 relative my-5 overflow-x-auto text-sm leading-relaxed rounded bg-[#0F111A]',
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
          <div className="flex flex-col text-primary-200">
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
                    <span className="absolute grid place-items-center w-[40px] mr-[16px] flex-shrink-0 -left-14 border-r-primary-500 border-r text-primary-300">
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
    </pre>
  );
}

export { CodeBlock };
