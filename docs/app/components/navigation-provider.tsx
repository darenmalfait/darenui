import {isBrowser} from '@daren/utils'
import * as React from 'react'

import {isMatchMedia, LG} from '../utils/media-query'

interface NavigationContextProps {
  open: boolean
  slideMode: boolean
  setOpen: (open: boolean) => void
  navRef: React.RefObject<HTMLElement | any>
}

const NavigationContext = React.createContext<NavigationContextProps | null>(
  null,
)
NavigationContext.displayName = 'NavigationContext'

interface NavigationProviderProps {
  children: React.ReactNode
}

// import { NavigationProvider } from "path-to-context/NavigationContext"
// use <NavigationProvider> as a wrapper around the part you need the context for
function NavigationProvider({children}: NavigationProviderProps) {
  const [open, setOpen] = React.useState(false)
  const [largeScreen, setLargeScreen] = React.useState(false)
  const prevOpen = React.useRef(open)
  const navRef = React.useRef<HTMLElement>()

  // close nav on click outside when viewport is less than 1024px
  React.useEffect(() => {
    function handleOutsideClick(e: any) {
      if (window.innerWidth < 1024) {
        if (!navRef.current?.contains(e.target)) {
          if (!open) return
          setOpen(false)
        }
      }
    }
    window.addEventListener('click', handleOutsideClick)
    return () => window.removeEventListener('click', handleOutsideClick)
  }, [open, navRef])

  React.useEffect(() => {
    function handleResize(e: any) {
      const large = isMatchMedia(LG)
      const first = !e
      let isOpen = false

      if (first) {
        isOpen = !large
      } else {
        isOpen = !(large && !prevOpen.current)
      }
      setLargeScreen(large)
      setOpen(isOpen)
      prevOpen.current = isOpen
    }

    if (isBrowser) {
      window.addEventListener('resize', handleResize)
    }

    // Call handler right away so state gets updated with initial window size
    handleResize(null)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  React.useEffect(() => {
    prevOpen.current = open
  }, [open])

  const context = React.useMemo(
    () => ({
      open,
      slideMode: open && largeScreen,
      setOpen,
      navRef,
    }),
    [open, largeScreen, setOpen],
  )

  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  )
}

// import { useNavigation } fron "path-to-context/NavigationContext"
// within functional component
// const { sessionToken, ...NavigationContext } = useNavigation()
function useNavigation(): NavigationContextProps {
  const context = React.useContext(NavigationContext)

  if (!context) {
    throw new Error('You should use useNavigation within an NavigationContext')
  }

  return context
}

export {NavigationProvider, useNavigation}
