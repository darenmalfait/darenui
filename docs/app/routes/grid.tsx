import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description = 'Grid is a container that can be used to group content.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Grid',
    description,
  }
}

const gridPropTypes = [
  {
    property: 'children',
    type: ['React.ReactNode'],
    default: '',
    values: [],
    description: 'Children of the Grid',
  },
  {
    property: 'nested',
    type: ['boolean'],
    default: 'false',
    values: ['true', 'false'],
    description: 'Whether the Grid is nested and takes the full width.',
  },
]

const propList = [
  {
    name: 'Grid',
    value: 'grid',
    propTypes: gridPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<Grid nested>
  <div className="col-span-full">col-span-full</div>
  <div className="col-span-4">col-span-4</div>
  <div className="col-span-4">col-span-4</div>
  <div className="col-span-4">col-span-4</div>
</Grid>`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'Grid',
  importer: `import { Grid } from '@daren/ui-components'`,
  demoList,
  propList,
  description,
}

export default function GridPage() {
  return <DocumentBuilder component={component} />
}
