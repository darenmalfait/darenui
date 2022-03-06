import * as React from 'react'

import { Modal } from '../lib'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    type: {
      options: ['info', 'danger', 'warning', 'success'],
      control: { type: 'radio' },
      defaultValue: 'info',
    },
    description: {
      control: { type: 'text' },
      defaultValue: 'This is a description',
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'This is a title',
    },
  },
}

export function Default({ type, title, description }: any) {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal
        open={open}
        type={type}
        title={title}
        description={description}
        onClose={setOpen}
      />
    </div>
  )
}

export function WithActions({ type, title, description }: any) {
  const [open, setOpen] = React.useState(false)

  const cancelButtonRef = React.useRef(null)

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal
        open={open}
        type={type}
        title={title}
        initialFocus={cancelButtonRef}
        description={description}
        onClose={setOpen}
        actions={
          <>
            <button ref={cancelButtonRef} className="py-2 px-3 mr-2 rounded-md">
              Cancel
            </button>
            <button className="py-2 px-3 mr-2 text-white bg-red-400 rounded-md">
              Delete
            </button>
          </>
        }
      />
    </div>
  )
}
