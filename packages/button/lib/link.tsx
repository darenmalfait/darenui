import {cx, ExtractProps} from '@daren/utils'
import {ChevronRightIcon} from '@heroicons/react/24/solid'
import * as React from 'react'

type LinkProps<T extends React.ElementType> = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  /* Makes link disabled */
  disabled?: boolean
  /* Makes link open in new tab */
  external?: boolean
  /* The element or component to use in place of `a` */
  as?: T
  /* Action to perform when clicked */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  /* React node */
  children?: React.ReactNode
} & ElementProps<T>

// conditional type to check if tag is a react element
type ElementProps<T> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : ExtractProps<T>

declare function LinkFn<Tag extends React.ElementType>(
  props: LinkProps<Tag>,
): JSX.Element

const Link = React.forwardRef<HTMLElement, LinkProps<any>>(function Link(
  props,
  ref,
) {
  const {disabled, external, onClick, className, as: Tag = 'a', ...rest} = props
  const externalProps = external
    ? {target: '_blank', rel: 'noopener noreferrer'}
    : null

  return (
    <Tag
      ref={ref}
      className={className}
      tabIndex={disabled ? -1 : undefined}
      aria-disabled={disabled}
      onClick={disabled ? (event: any) => event.preventDefault() : onClick}
      {...externalProps}
      {...rest}
    />
  )
}) as typeof LinkFn

const DoubleLabelLink = React.forwardRef<
  HTMLElement,
  LinkProps<any> & {
    description?: string
  }
>(function DoubleLabelLink(props, ref) {
  const {
    disabled,
    external,
    onClick,
    className,
    as: Tag = 'a',
    children,
    description,
    ...rest
  } = props
  const externalProps = external
    ? {target: '_blank', rel: 'noopener noreferrer'}
    : null

  return (
    <Tag
      ref={ref}
      className={cx(
        className,
        'group inline-flex items-center rounded-full p-1 pr-2 transition-colors bg-secondary text-primary hover:bg-gray-200 dark:hover:bg-gray-700 sm:text-base lg:text-sm xl:text-base',
      )}
      tabIndex={disabled ? -1 : undefined}
      aria-disabled={disabled}
      onClick={disabled ? (event: any) => event.preventDefault() : onClick}
      {...externalProps}
      {...rest}
    >
      {children ? (
        <span className="rounded-full py-0.5 px-3 text-xs font-semibold uppercase leading-5 tracking-wide transition-colors text-inverse bg-inverse">
          {children}
        </span>
      ) : null}

      {description ? <span className="ml-4 text-sm">{description}</span> : null}
      <ChevronRightIcon
        className="ml-2 h-5 w-5 text-gray-500"
        aria-hidden="true"
      />
    </Tag>
  )
}) as typeof LinkFn

export type {LinkProps}
export {Link, DoubleLabelLink, LinkFn}
