import * as React from 'react'
import {cx} from '@daren/ui-components'
import {MoonIcon, SunIcon} from '@heroicons/react/24/solid'

import {useTheme} from '../context/theme-provider'

function ThemeToggle({
  className,
  ...props
}: Omit<JSX.IntrinsicElements['button'], 'onCliick'>) {
  const [mounted, setMounted] = React.useState(false)
  const {theme, setTheme, systemTheme} = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDarkMode =
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  return (
    <button
      type="button"
      {...props}
      className={cx(
        className,
        'flex items-center justify-center rounded-full p-2 focus-ring text-primary',
      )}
      onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
    >
      {isDarkMode ? <SunIcon className="w-5" /> : <MoonIcon className="w-5" />}
      <div className="sr-only">{isDarkMode ? `Light` : `Dark`} Mode</div>
    </button>
  )
}

export {ThemeToggle}
