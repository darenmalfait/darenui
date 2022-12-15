import {Section as BaseSection} from '@daren/ui-components'
import clsx from 'clsx'

function Section({
  className,
  ...props
}: React.ComponentProps<typeof BaseSection>) {
  return (
    <BaseSection
      className={clsx('space-y-4 pt-8 first:pt-0', className)}
      {...props}
    />
  )
}

function Wrapper({className, ...props}: JSX.IntrinsicElements['div']) {
  return (
    <div
      className={clsx(
        'space-y-8 divide-y divide-gray-200 dark:divide-gray-800',
        className,
      )}
      {...props}
    />
  )
}

export {Section, Wrapper}
