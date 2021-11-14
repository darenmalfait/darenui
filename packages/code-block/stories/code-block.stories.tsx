import * as React from 'react';

import { CodeBlock } from '../lib';

export default {
  title: 'Code Block',
  component: CodeBlock,
  argTypes: {
    showLineNumbers: {
      defaultValue: false,
      control: 'boolean',
    },
    language: {
      defaultValue: 'tsx',
      control: 'text',
    },
  },
};

export function codeBlock({ showLineNumbers, language }: any) {
  return (
    <div>
      <CodeBlock
        showLineNumbers={showLineNumbers}
        language={language}
        code={`import { CodeBlock } from "@daren/ui-components";

<CodeBlock code=\`import { CodeBlock } from "@daren/ui-components";\` />`}
      />
    </div>
  );
}
