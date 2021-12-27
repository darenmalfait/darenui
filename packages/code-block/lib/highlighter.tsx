import * as React from 'react';
import { getHighlighter, Highlighter, setCDN } from 'shiki';

setCDN('https://unpkg.com/shiki@0.9.12/');

const defaultToTokens = (code: string) => {
  const tokens = code
    .split('\n')
    .map(line => (!line ? [] : [{ content: line }]));
  return tokens;
};

interface HighlighterProps {
  code?: string;
  language?: string;
}

function useHighlighter({ code = '', language = 'tsx' }: HighlighterProps) {
  const [highlighter, setHighlighter] = React.useState<null | Highlighter>(
    null,
  );

  React.useEffect(() => {
    async function fetchHighlighter() {
      const highlighter = await getHighlighter({
        theme: 'css-variables',
      });

      setHighlighter(highlighter);
    }

    fetchHighlighter();
  }, []);

  const tokens = React.useMemo(
    () =>
      highlighter && language !== 'text'
        ? highlighter.codeToThemedTokens(code, language, undefined, {
            includeExplanation: false,
          })
        : defaultToTokens(code),
    [code, highlighter, language],
  );

  const getLineProps = React.useCallback(
    ({ key, className, style, line, ...rest }) => {
      const output = {
        ...rest,
        className: 'codeblock-line',
        style: undefined,
        key: undefined,
      };

      if (style !== undefined) {
        output.style =
          output.style !== undefined ? { ...output.style, ...style } : style;
      }

      if (key !== undefined) output.key = key;
      if (className) output.className += ` ${className}`;

      return output;
    },
    [],
  );

  const getTokenProps = React.useCallback(
    ({ key, className, style, token, ...rest }) => {
      const output = {
        ...rest,
        children: token.content,
        style: {
          ...token.style,
          color: token.color ? token.color : '',
        },
        key: undefined,
      };

      if (style !== undefined) {
        output.style =
          output.style !== undefined ? { ...output.style, ...style } : style;
      }

      if (key !== undefined) output.key = key;
      if (className) output.className += ` ${className}`;

      return output;
    },
    [],
  );

  return {
    tokens,
    className: `language-${language}`,
    getLineProps,
    getTokenProps,
  };
}

export { useHighlighter };
