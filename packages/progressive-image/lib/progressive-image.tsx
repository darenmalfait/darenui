import { useSafeEffect } from '@daren/utils'
import clsx from 'clsx'
import * as React from 'react'

export type ResponsiveProps = {
  maxWidth?: number
  size: { width: number; height?: number }
}

function ProgressiveImage({
  img,
  className,
  placeholder,
}: {
  img: JSX.Element &
    React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>
  placeholder?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  const [visible, setVisible] = React.useState(!placeholder)
  const imgRef = React.useRef<HTMLImageElement>(null)

  // make this happen asap
  // if it's alrady loaded, don't bother fading it in.
  useSafeEffect(() => {
    if (imgRef.current?.complete) setVisible(true)
  }, [])

  React.useEffect(() => {
    if (!imgRef.current) return
    if (imgRef.current.complete) return

    let current = true
    imgRef.current.addEventListener('load', () => {
      if (!imgRef.current || !current) return
      setTimeout(() => {
        setVisible(true)
      }, 0)
    })

    return () => {
      current = false
    }
  }, [])

  const imgElement =
    !!placeholder &&
    React.cloneElement(img, {
      ref: imgRef,
      className: clsx(
        img.props.className,
        'transition-opacity duration-300 absolute object-cover w-full h-full inset-0',
        {
          'opacity-0': !visible,
        },
      ),
    })

  return (
    <div className={clsx(className, 'w-full')}>
      <div className="relative w-full h-full overflow-hidden">
        <img
          key={placeholder}
          src={placeholder || img.props.src}
          srcSet={!placeholder ? img.props.srcSet : undefined}
          className={clsx(
            className,
            'min-w-full min-h-full transition-opacity duration-300 object-cover',
            {
              'opacity-0': visible,
            },
          )}
          alt={img.props.alt}
        />
        {placeholder && (
          <div
            className={clsx('absolute inset-0 w-full h-full', {
              'backdrop-blur-xl': !visible,
            })}
          />
        )}
        {imgElement}
      </div>
    </div>
  )
}

export { ProgressiveImage }
