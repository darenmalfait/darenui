'use client'

import * as React from 'react'
import {cx, useSSRLayoutEffect} from '@daren/utils'

export type ResponsiveProps = {
  maxWidth?: number
  size: {width: number; height?: number}
}

function ProgressiveImage({
  img,
  className,
  placeholder,
  isLoaded,
}: {
  img: JSX.Element &
    React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>
  placeholder?: string
  isLoaded?: boolean
} & React.HTMLAttributes<HTMLDivElement>) {
  const id = React.useId()
  const [visible, setVisible] = React.useState(false)
  const imgRef = React.useRef<HTMLImageElement>(null)

  // make this happen asap
  // if it's alrady loaded, don't bother fading it in.
  useSSRLayoutEffect(() => {
    if (imgRef.current?.complete || isLoaded) setVisible(true)
  }, [isLoaded])

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
      ...img.props,
      id,
      ref: imgRef,
      suppressHydrationWarning: true,
      className: cx(
        img.props.className,
        'object-cover absolute inset-0 w-full h-full transition-opacity duration-300',
        {
          'opacity-0': !visible,
        },
      ),
    })

  return (
    <div className={cx(className, 'w-full')}>
      <div className="relative h-full w-full overflow-hidden">
        <img
          {...img.props}
          suppressHydrationWarning
          key={placeholder}
          src={placeholder ?? img.props.src}
          srcSet={placeholder ? undefined : img.props.srcSet}
          className={cx(
            className,
            'min-h-full min-w-full object-cover transition-opacity duration-300',
            // transparent images will otherwise have a blurry image in the background
            {
              'opacity-0': visible,
            },
          )}
          alt={img.props.alt}
        />
        {placeholder ? (
          <div
            className={cx('absolute inset-0 h-full w-full', {
              'backdrop-blur-xl': !visible,
            })}
          />
        ) : null}
        {imgElement}
        <noscript>{img}</noscript>
      </div>
    </div>
  )
}

export {ProgressiveImage}
