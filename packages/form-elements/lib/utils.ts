import { cx } from '@daren/utils'

function getInputClassName(className?: string, hasError?: boolean) {
  return cx(
    className,
    hasError ? 'border border-red-300 hover:border-transparent' : 'border-none',
    'py-5 px-8 pr-10 w-full font-bold placeholder:text-gray-500 disabled:text-gray-400 rounded-lg text-md focus-ring',
    {
      'text-slate-900 bg-primary-600': !hasError,
      '!text-danger bg-primary-600 animate-shake !set-colors-accent-danger':
        hasError,
    },
  )
}

export { getInputClassName }
