import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description =
  'ButtonLinks look like buttons, but act like links. They are used to navigate to other pages in your app. They are a wrapper around the Link component.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui ButtonLink',
    description,
  }
}

const buttonLinkPropTypes = [
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
  {
    property: 'size',
    type: ['small', 'medium', 'large'],
    default: 'medium',
    values: ['small', 'medium', 'large'],
    description: 'The size of the button.',
  },
  {
    property: 'variant',
    type: ['primary', 'secondary', 'danger', 'success'],
    default: 'primary',
    values: ['primary', 'secondary', 'danger', 'success'],
    description: 'The appearance of the button.',
  },
]

const propList = [
  {
    name: 'ButtonLink',
    value: 'buttonLink',
    propTypes: buttonLinkPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="p-8">
  <ButtonLink href="https://www.github.com" external>Click me</ButtonLink>
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
        code: `<div className="gap-2 flex flex-row p-8">
  <ButtonLink variant="primary" href="https://www.github.com">Click me</ButtonLink>
  <ButtonLink variant="secondary" href="https://www.github.com">Click me</ButtonLink>
  <ButtonLink variant="danger" href="https://www.github.com">Click me</ButtonLink>
  <ButtonLink variant="success" href="https://www.github.com">Click me</ButtonLink>
</div>`,
      },
    ],
    openEditor: false,
  },
  {
    name: 'Size',
    files: [
      {
        name: 'index.tsx',
        code: `<div className="space-x-2 flex flex-row p-8 items-center">
  <div><ButtonLink size="small" href="https://www.github.com">Click me</ButtonLink></div>
  <div><ButtonLink size="medium" href="https://www.github.com">Click me</ButtonLink></div>
  <div><ButtonLink size="large" href="https://www.github.com">Click me</ButtonLink></div>
</div>`,
      },
    ],
    openEditor: false,
  },
]

const component = {
  name: 'ButtonLink',
  importer: `import { ButtonLink } from '@daren/ui-components'`,
  demoList,
  propList,
  description,
}

export default function ButtonLinkPage() {
  return <DocumentBuilder component={component} />
}
