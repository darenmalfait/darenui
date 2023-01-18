import {cx} from '@daren/ui-components'

export function Prose({
  as: Component = 'div',
  className,
  ...props
}: {
  as?: React.ElementType
  className?: string
  [key: string]: any
}) {
  return (
    <Component
      className={cx(
        className,
        'prose mx-auto max-w-screen-lg dark:prose-invert',
      )}
      {...props}
    />
  )
}
