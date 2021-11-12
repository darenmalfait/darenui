import * as React from 'react';

export const isBrowser = typeof document !== 'undefined';

export const useSafeEffect = isBrowser
  ? React.useLayoutEffect
  : React.useEffect;
