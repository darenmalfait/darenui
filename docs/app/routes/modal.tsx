import { MetaFunction } from '@remix-run/node'
import * as React from 'react'

import { DocumentBuilder } from '~/components/document-builder'

const description = 'Modal is a popup that can be used to display content.'

export const meta: MetaFunction = () => {
  return {
    title: 'Darenui Modal',
    description,
  }
}

const modalPropTypes = [
  {
    property: 'type',
    type: ['danger', 'warning', 'success', 'info'],
    default: 'info',
    values: ['danger', 'warning', 'success', 'info'],
    description: 'Type of the Modal',
  },
  {
    property: 'title',
    type: ['string'],
    default: '',
    values: [],
    description: 'Title of the Modal',
  },
  {
    property: 'description',
    type: ['string'],
    default: '',
    values: [],
    description: 'Description of the Modal',
  },
]

const propList = [
  {
    name: 'Modal',
    value: 'modal',
    propTypes: modalPropTypes,
  },
]

const demoList = [
  {
    name: 'Basic',
    files: [
      {
        name: 'index.tsx',
        code: `function ModalDemo() {
  const [open, setOpen] = React.useState(false)
  
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>
        Show Modal
      </Button>
      <Modal type="info" open={open} onClose={() => setOpen(false)} title="modal title" description="modal description" />
    </div>
  )
}`,
      },
    ],
    openEditor: true,
  },
]

const component = {
  name: 'Modal',
  importer: `import { Modal } from '@daren/ui-components'`,
  demoList,
  propList,
  description,
}

export default function ModalPage() {
  return <DocumentBuilder component={component} />
}
