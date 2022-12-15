import {Input} from '@daren/form-elements'
import {H4, Paragraph} from '@daren/typography'
import * as React from 'react'

import {Button} from './button'

function ConfirmButton({
  children,
  confirmString,
  title = 'Are you sure?',
  message = `If yes, type in the app name ${confirmString} below`,
  confirmButtonLabel = 'Yes, Delete it',
  cancelButtonLabel = 'Cancel',
  onConfirm,
  variant = 'danger',
  ...props
}: React.ComponentPropsWithRef<typeof Button> & {
  onConfirm: () => void
  confirmString: string
  message?: string
  title?: string
  confirmButtonLabel?: string
  cancelButtonLabel?: string
}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  function handleConfirm() {
    setOpen(false)
    onConfirm()
  }

  return (
    <>
      <Button variant={variant} {...props} onClick={() => setOpen(!open)}>
        {children}
      </Button>
      {open ? (
        <div className="mt-4 space-y-2 rounded-md border p-4">
          <H4>{title}</H4>
          <Paragraph
            dangerouslySetInnerHTML={{
              __html: message.replace(
                confirmString,
                `<strong>${confirmString}</strong>`,
              ),
            }}
          />
          <div className="flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <Input
              className="w-full"
              placeholder="App Name"
              onChange={e => setValue(e.target.value)}
            />
            <Button
              onClick={handleConfirm}
              variant={variant}
              disabled={value !== confirmString}
            >
              {confirmButtonLabel}
            </Button>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              {cancelButtonLabel}
            </Button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export {ConfirmButton}
