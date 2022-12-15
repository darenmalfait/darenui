import {ChevronUpIcon} from '@heroicons/react/24/outline'
import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'
import * as React from 'react'
import {LiveProvider, LiveContext, LiveError} from 'react-live'

import {Code} from './code'

import {File} from './document-builder'
import {Preview} from './preview'
import {scope} from './scope'

interface IDEProps {
  files: File[]
  lineNumber?: boolean
  showTab?: boolean
  codeBlock?: boolean
  openEditor?: boolean
}

function Ide({
  files = [],
  lineNumber = true,
  showTab = true,
  codeBlock = false,
  openEditor = false,
}: IDEProps) {
  const Provider = codeBlock ? 'div' : LiveProvider

  return (
    <Provider code={files[0]?.code} scope={scope}>
      <div className="rounded-lg border border-gray-200 dark:border-gray-800">
        {codeBlock ? null : <Preview />}
        <Editor
          files={files}
          lineNumber={lineNumber}
          showTab={showTab}
          openEditor={codeBlock ? true : openEditor}
        />
      </div>
      <LiveError className="mt-2 block whitespace-pre-wrap rounded-md bg-red-50 p-4 text-left font-mono text-sm font-medium text-red-700" />
    </Provider>
  )
}

interface EditorProps {
  files: File[]
  lineNumber?: boolean
  showTab?: boolean
  openEditor?: boolean
}

function Editor({
  files,
  lineNumber,
  showTab,
  openEditor: _openEditor,
}: EditorProps) {
  const [openEditor, setOpenEditor] = React.useState(_openEditor)
  const [tabKey, setTabKey] = React.useState(files[0].name)

  const handleTabsChange = (name: string) => {
    setTabKey(name)
  }
  const {onChange} = React.useContext(LiveContext) as any
  const currentFile = files.find((file: File) => file.name === tabKey) as File

  return (
    <div
      className="rounded-b-lg"
      style={{
        background: '#0F111A',
        color: '#FFFFFF',
      }}
    >
      {showTab ? (
        <Tabs.Root
          value={tabKey}
          onValueChange={handleTabsChange}
          className={clsx('relative', openEditor ? '' : 'rounded-b-lg')}
        >
          <Tabs.List
            onClick={e => {
              if (
                (e.target as HTMLDivElement).getAttribute('role') ===
                  'tablist' ||
                !openEditor
              ) {
                setOpenEditor(prev => !prev)
              }
            }}
            tabIndex={0}
            className={clsx(
              'hide-scroll relative flex items-center rounded-tr-lg',
              openEditor ? '' : 'rounded-b-lg',
            )}
          >
            {files.map((file: File) => (
              <Tabs.Trigger
                key={file.name}
                value={file.name}
                className={clsx(
                  'cursor-base !my-0 -mb-px flex h-full items-center justify-center border-b-2 border-transparent px-5 py-3 text-sm font-medium text-gray-300',
                  openEditor ? 'selected:border-primary-500' : 'rounded-b-lg',
                )}
              >
                {file.name}
              </Tabs.Trigger>
            ))}

            <span
              role="tablist"
              className={clsx(
                'absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full text-primary-600',
                openEditor ? 'bg-primary-200 bg-opacity/15' : 'bg-transparent',
              )}
            >
              <ChevronUpIcon
                role="tablist"
                className={clsx('h-4 w-4', openEditor ? 'rotate-180' : '')}
              />
            </span>
          </Tabs.List>
        </Tabs.Root>
      ) : null}

      {openEditor ? (
        <div className="max-h-96 overflow-auto">
          <Code
            onChange={(editor: any) => {
              if (currentFile.readOnly) return
              onChange?.(editor.getValue())
            }}
            value={currentFile.code || ''}
            readOnly={currentFile.readOnly}
            className="rounded-b-lg bg-gray-900"
            lineNumber={lineNumber}
            showClipBoard={true}
            style={{
              background: '#0F111A',
              color: '#FFFFFF',
              caretColor: '#ffcb6b',
            }}
          />
        </div>
      ) : null}
    </div>
  )
}

export {Ide}
