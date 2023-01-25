import {
  cx,
  Button,
  ExtractProps,
  CodeBlock,
  Modal as DefaultModal,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@daren/ui-components'
import Link from 'next/link'
import * as React from 'react'

import {useTheme} from '../context/theme-provider'

import {Heading} from './heading'

export * from '@daren/ui-components'

export const a = Link

export function Modal(props: ExtractProps<typeof DefaultModal>) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{props.title}</Button>
      <DefaultModal {...props} open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export function Preview({
  children,
  code,
  prose = false,
  ...props
}: JSX.IntrinsicElements['div'] & {
  code?: string
  prose?: boolean
}) {
  return (
    <div className={cx({'not-prose': !prose})} {...props}>
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          {code ? <TabsTrigger value="code">Code</TabsTrigger> : null}
        </TabsList>
        <TabsContent value="preview">{children}</TabsContent>
        {code ? (
          <TabsContent value="code">
            <Code code={code} />
          </TabsContent>
        ) : null}
      </Tabs>
    </div>
  )
}

export const h2 = function h2(props: ExtractProps<typeof Heading>) {
  return <Heading level={2} {...props} />
}

export function Code(props: ExtractProps<typeof CodeBlock>) {
  const [mounted, setMounted] = React.useState(false)
  const {theme: selectedtheme, systemTheme} = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDarkMode =
    selectedtheme === 'dark' ||
    (selectedtheme === 'system' && systemTheme === 'dark')

  return <CodeBlock darkMode={isDarkMode} {...props} />
}

function InfoIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="8" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 7.75h1.5v3.5"
      />
      <circle cx="8" cy="4" r=".5" fill="none" />
    </svg>
  )
}

export function Note({children}: {children: React.ReactNode}) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links:theme(colors.white)] dark:[--tw-prose-links-hover:theme(colors.emerald.300)]">
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Row({children}: {children: React.ReactNode}) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  )
}

export function Col({
  children,
  sticky = false,
}: {
  children: React.ReactNode
  sticky?: boolean
}) {
  return (
    <div
      className={cx(
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky && 'xl:sticky xl:top-24',
      )}
    >
      {children}
    </div>
  )
}

export function Properties({children}: {children: React.ReactNode}) {
  return (
    <div className="my-6">
      <ul className="divide-gray-900/5 m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y p-0 dark:divide-white/5">
        {children}
      </ul>
    </div>
  )
}

export function Property({
  name,
  type,
  children,
  required,
}: {
  name: string
  type: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex h-auto flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd className="text-xs">
          <code>{name}</code>
        </dd>
        <dt className="sr-only">Type</dt>
        <dd className="font-mono text-xs text-gray-400  dark:text-gray-500">
          {type}
        </dd>
        {required ? (
          <>
            <dt className="sr-only">required</dt>
            <dd className="text-xs text-red-500">*</dd>
          </>
        ) : null}
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  )
}
