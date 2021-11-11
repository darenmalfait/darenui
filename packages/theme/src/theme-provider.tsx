import { Dict, isBrowser, useSafeEffect, WithCSSVar } from '@daren/utils';
import * as React from 'react';

import { colors } from './colors';
import { toCSSVar } from './to-css-var';

export const ThemeContext = React.createContext<
  | {
      theme: WithCSSVar<Dict>;
    }
  | undefined
>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = toCSSVar({
    colors,
  });

  useSafeEffect(() => {
    if (isBrowser) updateThemeVariables(theme.cssVars);
  }, [theme]);

  const value = React.useMemo(
    () => ({
      theme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function setStyleVariable(name: string, value: string) {
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty(name, value);
}

function updateStyleHelper(_themeKey: string, style: string) {
  const themeKey = _themeKey.startsWith('--') ? _themeKey : `--${_themeKey}`;
  setStyleVariable(themeKey, style);
}

function updateThemeVariables(vars: Record<string, string>) {
  Object.entries(vars).forEach(([key, val]) => {
    updateStyleHelper(key, val);
  });
}
