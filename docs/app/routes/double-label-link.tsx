import {MetaFunction} from '@remix-run/node'

import {DocumentBuilder} from '../components/document-builder'

const description =
  'DoubleLabelLink are used to navigate to other pages in your app. They are a wrapper around the Link component.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui DoubleLabelLink',
    description,
  }
}

const doubleLabelLinkPropTypes = [
  {
    property: 'as',
    type: ['a', 'button', 'section', 'main', 'article', 'header', 'footer'],
    default: 'a',
    values: ['a', 'button', 'section', 'main', 'article', 'header', 'footer'],
    description: 'The HTML element to render.',
  },
  {
    property: 'href',
    type: ['string'],
    default: '',
    values: [],
    description: 'The URL to link to.',
  },
  {
    property: 'external',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Whether the link should open in a new tab.',
  },
]

const propList = [
  {
    name: 'DoubleLabelLink',
    value: 'doubleLabelLink',
    propTypes: doubleLabelLinkPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <DoubleLabelLink href="https://www.github.com" description="second label" external>Click me</DoubleLabelLink>
</div>`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'DoubleLabelLink',
  importer: `import { DoubleLabelLink } from '@daren/ui-components'`,
  packageName: 'button',
  demoList,
  propList,
  description,
}

export default function DoubleLabelLinkPage() {
  return <DocumentBuilder component={component} />
}
