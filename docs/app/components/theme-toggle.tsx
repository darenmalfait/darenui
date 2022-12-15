import {MoonIcon, SunIcon} from '@heroicons/react/24/solid'
import * as React from 'react'

import {Theme, useTheme} from '../context/theme-provider'

function ThemeToggle() {
  const [theme, setTheme] = useTheme()
  const isDarkMode = theme === 'dark'

  return (
    <button
      type="button"
      className="flex items-center justify-center rounded-full p-2 focus-ring"
      onClick={() =>
        setTheme((prev: any) =>
          prev === Theme.DARK ? Theme.LIGHT : Theme.DARK,
        )
      }
    >
      {isDarkMode ? <SunIcon className="w-5" /> : <MoonIcon className="w-5" />}
      <div className="sr-only">{isDarkMode ? `Light` : `Dark`} Mode</div>
    </button>
  )
}

export {ThemeToggle}
