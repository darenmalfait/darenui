import {cx} from '@daren/utils'

type InputSize = 'sm' | 'md' | 'lg'

function getInputClassName(
  className?: string,
  hasError?: boolean,
  inputSize: InputSize = 'md',
) {
  return cx(
    className,
    'w-full group font-bold placeholder:text-gray-500 disabled:text-gray-400 rounded-lg text-md focus-ring',
    {
      'bg-primary-600 text-primary-500': !hasError,
      '!text-red-500 bg-primary-700': hasError,
      'py-1 px-2 text-sm': inputSize === 'sm',
      'py-3 px-4 text-base': inputSize === 'md',
      'py-5 px-8 text-lg': inputSize === 'lg',
    },
  )
}

export {getInputClassName}
export type {InputSize}
