import * as React from 'react'

const isBrowser = typeof document !== 'undefined'

const useSafeEffect = isBrowser ? React.useLayoutEffect : React.useEffect

export {isBrowser, useSafeEffect}
