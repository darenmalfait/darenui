import {ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}

export {cx}
