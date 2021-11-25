import { cx, __DEV__ } from '@daren/utils';
import * as React from 'react';

interface GridProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  rowGap?: boolean;
  nested?: boolean;
  featured?: boolean;
}

function Grid({
  children,
  className,
  style,
  as: Tag = 'div',
  nested,
  featured,
  rowGap,
}: GridProps) {
  return (
    <Tag
      style={style}
      className={cx('relative', {
        'mx-10vw': !nested,
        'w-full': nested,
        'py-10 md:py-24 lg:pb-40 lg:pt-36': featured,
      })}
    >
      {featured ? (
        <div className="absolute inset-0 -mx-5vw">
          <div className="w-full h-full mx-auto rounded-lg bg-secondary max-w-8xl" />
        </div>
      ) : null}

      <div
        className={cx(
          'relative grid gap-x-4 grid-cols-4 md:grid-cols-8 lg:gap-x-6 lg:grid-cols-12',
          {
            'mx-auto max-w-7xl': !nested,
            'gap-y-4 lg:gap-y-6': rowGap,
          },
          className,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}

/**
 * Use for development only! It renders the grid columns and gaps as page overlay
 */
function GridLines() {
  if (!__DEV__) {
    throw new Error('<GridLines />  should only be used during development');
  }

  return (
    <div className="fixed inset-0 z-10 pointer-events-none select-none">
      <Grid>
        {Array.from({ length: 12 }).map((_, idx) => (
          <div
            key={idx}
            className="flex items-start h-screen text-black bg-black opacity-10"
          >
            <div className="w-full pt-4 text-lg text-center text-black">
              {idx + 1}
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
}

export { Grid, GridLines };
