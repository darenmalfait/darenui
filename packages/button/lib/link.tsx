import * as React from 'react'

type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  /* Makes link disabled */
  disabled?: boolean
  /* Makes link open in new tab */
  external?: boolean
  /* The element or component to use in place of `a` */
  as?: React.ElementType
  /* Action to perform when clicked */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  /* React node */
  children?: React.ReactNode
}

const Link = React.forwardRef<unknown, any>(function Link(props, ref) {
  const {
    disabled,
    external,
    onClick,
    className,
    as: Tag = 'a',
    ...rest
  } = props
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
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
})

export type { LinkProps }
export { Link }
