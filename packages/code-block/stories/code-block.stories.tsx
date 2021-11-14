import * as React from 'react';

import { CodeBlock } from '../lib';

export default {
  title: 'CodeBlock',
  component: CodeBlock,
  argTypes: {},
};

export function codeBlock(args: any) {
  return (
    <div>
      <CodeBlock {...args} />
    </div>
  );
}
