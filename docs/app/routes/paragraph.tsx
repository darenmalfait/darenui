import {MetaFunction} from '@remix-run/node'
import * as React from 'react'

import {DocumentBuilder} from '../components/document-builder'

const description = 'Paragraph is a text element.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Paragraph',
    description,
  }
}

const titlePropTypes = [
  {
    property: 'variant',
    type: ['primary', 'secondary'],
    default: 'primary',
    values: ['primary', 'secondary'],
    description: 'Controls paragraph appearance',
  },
  {
    property: 'children',
    type: ['React.ReactNode'],
    default: '',
    values: [],
    description: 'The content of the component.',
  },
]

const propList = [
  {
    name: 'Paragraph',
    value: 'title',
    propTypes: titlePropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8 space-y-2">
  <Paragraph>
    Attack feet behind the couch destroy couch flop over give attitude hide
    when guests come over hopped up on goofballs hunt anything that moves
    sweet beast under the bed intently stare at the same spot intently sniff
    hand , why must they do that chase imaginary bugs intrigued by the shower
    rub face on everything bag stretch need to chase tail make muffins swat at
    dog lick butt chase mice, destroy couch intrigued by the shower sweet
    beast under the bed swat at dog give attitude make muffins bag stretch rub
    face on everything.
  </Paragraph>
</div>`,
      },
    ],
    openEditor: true,
  },
  {
    name: 'Variant',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8 space-y-2">
  <Paragraph variant="primary">Primary</Paragraph>
  <Paragraph variant="secondary">Secondary</Paragraph>
</div>`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'Paragraph',
  importer: `import { Paragraph } from '@daren/ui-components'`,
  packageName: 'typography',
  demoList,
  propList,
  description,
}

export default function ParagraphPage() {
  return <DocumentBuilder component={component} />
}
