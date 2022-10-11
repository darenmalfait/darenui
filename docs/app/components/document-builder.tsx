/* eslint-disable react/forbid-foreign-prop-types */
import { H1, H2, Link, Paragraph } from '@daren/ui-components'
import * as Tabs from '@radix-ui/react-tabs'
import { Link as RemixLink } from '@remix-run/react'
import * as React from 'react'

import { CodeBlock } from './code-block'
import { Ide } from './ide'
import { Section } from './layout-components'

export type File = {
  name: string
  code: string
  readOnly?: boolean
}

type PropType = {
  property?: string
  type?: string[]
  default?: any
  values?: string[]
  description?: string
  //
  extend?: boolean
  path?: string
  external?: boolean
  label?: string
}

type PropItem = {
  name: string
  value: string
  propTypes: PropType[]
}

type DemoItem = {
  name: string
  files: File[]
  openEditor?: boolean
}

interface DocumentBuilderProps {
  component: {
    name: string
    importer?: string
    description?: string
    demoList: DemoItem[]
    propList?: PropItem[]
  }
}

function DocumentBuilder({ component }: DocumentBuilderProps) {
  return (
    <>
      <Section>
        <H1>{component.name}</H1>
        {component.description && (
          <Paragraph>{component.description}</Paragraph>
        )}
        {component.importer && (
          <section className="flex flex-col items-start">
            <div className="flex w-full flex-row justify-between">
              <div className="grow-1 mr-0 w-full max-w-2xl xl:mr-20">
                <CodeBlock showClipBoard>
                  <code className="language-tsx">{component.importer}</code>
                </CodeBlock>
              </div>
            </div>
          </section>
        )}
      </Section>

      <Section>
        <div className="flex flex-col items-start">
          <Section className="flex w-full flex-col !items-start justify-between space-y-8 2xl:flex-row 2xl:space-y-0 2xl:space-x-8">
            <Section className="space-y-20 2xl:max-w-xl">
              {component.demoList.map((demo: any, idx: any) => (
                <div key={idx} className="space-y-4">
                  <H2>{demo.name}</H2>
                  <Ide files={demo.files} openEditor={demo.openEditor} />
                </div>
              ))}
            </Section>
            {component.propList && (
              <div
                className="grow-1 prose-sm prose sticky top-0 w-full max-w-full self-start pr-0 dark:prose-invert xl:w-auto"
                style={{
                  width: '400px',
                  // maxWidth: "50vw",
                }}
              >
                <H2>Props</H2>
                <Tabs.Root
                  defaultValue={component.propList[0]?.value}
                  className="m-0 flex flex-col divide-y divide-gray-200 overflow-y-auto overflow-x-hidden whitespace-nowrap rounded-t bg-transparent font-medium dark:divide-gray-800"
                >
                  <Tabs.List className="hide-scroll flex h-full w-full flex-none items-center overflow-x-auto overflow-y-hidden">
                    {component.propList.map((prop: any) => (
                      <Tabs.Trigger
                        key={prop.value}
                        value={prop.value}
                        className="cursor-base min-w-6 selected:border-primary-500 -mb-0.5 flex h-full items-center border-b-4 border-transparent pl-4 pr-6 focus:outline-none"
                      >
                        <span className="mt-3 flex flex-wrap items-center pt-3 text-lg font-bold leading-10">
                          {prop.name}
                        </span>
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>
                  {component.propList.map((_prop: any) => (
                    <Tabs.Content
                      className="flex-1 text-primary"
                      value={_prop.value}
                      key={_prop.value}
                    >
                      <ul>
                        {_prop.propTypes.map((prop: any, idx: number) => {
                          if (prop.extend) {
                            return (
                              <li key={idx} className="mt-4">
                                <Link as={RemixLink} to={prop.path}>
                                  {prop.label}
                                </Link>
                              </li>
                            )
                          }
                          return (
                            <React.Fragment key={idx}>
                              <li className="mt-4 flex flex-wrap">
                                <b className="mr-2">{prop.property}</b>
                                <span className="text-success">
                                  [{prop.type.join(', ')}]
                                </span>
                                <span aria-hidden="true" className="mx-2">
                                  ·
                                </span>
                                <span className="text-primary">
                                  Default:{' '}
                                  <span className="ml-1 font-medium text-danger">
                                    {prop.default.toString() || "''"}
                                  </span>
                                </span>
                              </li>
                              <li>
                                <p className="whitespace-normal text-primary">
                                  {prop.description}
                                </p>
                              </li>
                              {idx === _prop.propTypes.length - 1 ? null : (
                                <hr />
                              )}
                            </React.Fragment>
                          )
                        })}
                      </ul>
                    </Tabs.Content>
                  ))}
                </Tabs.Root>
              </div>
            )}
          </Section>
        </div>
      </Section>
    </>
  )
}

export { DocumentBuilder }
