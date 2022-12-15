import {MetaFunction} from '@remix-run/node'

import {DocumentBuilder} from '../components/document-builder'

const description =
  'Links look like buttons, but act like links. They are used to navigate to other pages in your app. They are a wrapper around the Link component.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Link',
    description,
  }
}

const linkPropTypes = [
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
    name: 'Link',
    value: 'link',
    propTypes: linkPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <Link href="https://www.github.com" external>Click me</Link>
</div>`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'Link',
  importer: `import { Link } from '@daren/ui-components'`,
  packageName: 'button',
  demoList,
  propList,
  description,
}

export default function LinkPage() {
  return <DocumentBuilder component={component} />
}
