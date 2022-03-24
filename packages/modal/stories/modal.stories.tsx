import * as React from 'react'

import { Modal } from '../lib'

export default {
  title: 'Modal',
}

export function Default() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal
        type="info"
        title="this is a title"
        description="this is a description"
        open={open}
        onClose={setOpen}
      />
    </div>
  )
}

export function WithActions() {
  const [open, setOpen] = React.useState(false)

  const cancelButtonRef = React.useRef(null)

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open modal with actions</button>
      <Modal
        open={open}
        type="info"
        title="this is a title"
        initialFocus={cancelButtonRef}
        description="this is a description"
        onClose={setOpen}
        actions={
          <>
            <button
              ref={cancelButtonRef}
              onClick={() => setOpen(false)}
              className="py-2 px-3 mr-2 rounded-md"
            >
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
