import {Dispatch, SetStateAction, useState} from 'react'

function useControllableState<T>(
  propValue: T | undefined,
  initialValue: T | (() => T),
  changeHandler?: Dispatch<SetStateAction<T | undefined>>,
): [T | undefined, (value: T) => void] {
  const [stateValue, setState] = useState<T>(initialValue)
  const value = propValue ? stateValue : undefined

  return [
    value,
    (newValue: T) => {
      setState(newValue)
      if (changeHandler) {
        changeHandler(newValue)
      }
    },
  ]
}

export {useControllableState}
