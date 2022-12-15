import {MetaFunction} from '@remix-run/node'
import * as React from 'react'

import {DocumentBuilder} from '../components/document-builder'

const description =
  'ProgressiveImage is a list of navigation items that can be used to build a navigation menu.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui ProgressiveImage',
    description,
  }
}

const progressiveImagePropTypes = [
  {
    property: 'img',
    type: ['string'],
    default: '',
    values: [],
    description: 'Image to be displayed',
  },
  {
    property: 'placeholder',
    type: ['string'],
    default: '',
    values: [],
    description: 'Placeholder image to be displayed',
  },
]

const propList = [
  {
    name: 'ProgressiveImage',
    value: 'progressiveImage',
    propTypes: progressiveImagePropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: ` <ProgressiveImage
  className="w-full"
  img={<img src="https://picsum.photos/3000/3000" alt="picsum" />}
  placeholder="https://picsum.photos/25/25"
/>`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'ProgressiveImage',
  importer: `import { ProgressiveImage } from '@daren/ui-components'`,
  packageName: 'progressive-image',
  demoList,
  propList,
  description,
}

export default function ProgressiveImagePage() {
  return <DocumentBuilder component={component} />
}
