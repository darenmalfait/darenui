import * as React from 'react';

import { Paragraph } from '../lib';

export default {
  title: 'Paragraph',
  component: Paragraph,
};

export function paragraph() {
  return (
    <div className="flex flex-col space-y-4">
      <Paragraph>Title goes here.</Paragraph>
    </div>
  );
}
