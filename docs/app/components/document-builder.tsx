/* eslint-disable react/forbid-foreign-prop-types */
import { H1, H2, Link, Paragraph, Tabs } from '@daren/ui-components'
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
          <Tabs keys={['Usage', 'Props']}>
            <Tabs.Item>
              <Section className="space-y-20">
                {component.demoList.map((demo: any, idx: any) => (
                  <div key={idx} className="space-y-4">
                    <H2>{demo.name}</H2>
                    <Ide files={demo.files} openEditor={demo.openEditor} />
                  </div>
                ))}
              </Section>
            </Tabs.Item>
            {component.propList && (
              <Tabs.Item>
                <div className="grow-1 prose-sm prose sticky top-0 w-full max-w-full self-start pr-0 dark:prose-invert xl:w-auto">
                  <H2>Props</H2>
                  <Tabs keys={component.propList.map(({ name }) => name)}>
                    {component.propList.map(({ value, propTypes }) => (
                      <Tabs.Item key={value}>
                        <ul>
                          {propTypes.map((prop: any, idx: number) => {
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
                                {idx === propTypes.length - 1 ? null : <hr />}
                              </React.Fragment>
                            )
                          })}
                        </ul>
                      </Tabs.Item>
                    ))}
                  </Tabs>
                </div>
              </Tabs.Item>
            )}
          </Tabs>
        </div>
      </Section>
    </>
  )
}

export { DocumentBuilder }
