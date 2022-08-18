import { cx } from '@daren/utils'

type inputSize = 'sm' | 'md' | 'lg'

function getInputClassName(
  className?: string,
  hasError?: boolean,
  inputSize: inputSize = 'md',
) {
  return cx(
    className,
    'w-full font-bold placeholder:text-gray-500 disabled:text-gray-800 disabled:bg-gray-200 rounded-lg border-2 hover:border-primary outline-0 transition-colors focus:border-primary border-secondary',
    {
      'bg-white text-primary-500': !hasError,
      '!text-red-500 bg-primary-700': hasError,
      'py-1 px-2 text-sm': inputSize === 'sm',
      'py-3 px-4 text-base': inputSize === 'md',
      'py-5 px-8 text-lg': inputSize === 'lg',
    },
  )
}

export { getInputClassName }
export type { inputSize }
