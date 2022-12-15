import * as React from 'react'

import {cx} from '.'

interface Props {
  visible: boolean
  x: number
  y: number
  onCompleted: () => void
  colorClass?: string
  className?: string
}

const defaultProps = {
  visible: false,
  x: 0,
  y: 0,
  className: '',
}

type DripProps = Props & Partial<typeof defaultProps>

function Drip({
  visible,
  x,
  y,
  colorClass,
  onCompleted,
  className,
  ...props
}: DripProps) {
  const dripRef = React.useRef<HTMLDivElement>(null)
  const top = Number.isNaN(+y) ? 0 : y - 10
  const left = Number.isNaN(+x) ? 0 : x - 10

  React.useEffect(() => {
    const drip = dripRef.current

    if (!drip) return
    drip.addEventListener('animationend', onCompleted)

    return () => {
      drip.removeEventListener('animationend', onCompleted)
    }
  })

  if (!visible) return null

  return (
    <div ref={dripRef} className={cx(className, 'absolute inset-0')} {...props}>
      <svg
        className="absolute animate-expand"
        height="20"
        style={{top, left}}
        viewBox="0 0 20 20"
        width="20"
      >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g className={colorClass}>
            <rect height="100%" rx="10" width="100%" />
          </g>
        </g>
      </svg>
    </div>
  )
}

const useDrip = (
  initialValue: boolean = false,
  ref: React.RefObject<HTMLElement>,
): {
  visible: boolean
  x: number
  y: number
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  onCompleted: () => void
} => {
  const [dripVisible, setDripVisible] = React.useState<boolean>(initialValue)
  const [dripX, setDripX] = React.useState<number>(0)
  const [dripY, setDripY] = React.useState<number>(0)

  const dripCompletedHandle = () => {
    setDripVisible(false)
    setDripX(0)
    setDripY(0)
  }

  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()

    setDripVisible(true)
    setDripX(event.clientX - rect.left)
    setDripY(event.clientY - rect.top)
  }

  return {
    visible: dripVisible,
    x: dripX,
    y: dripY,
    onClick: clickHandler,
    onCompleted: dripCompletedHandle,
  }
}

export type {DripProps}
export {useDrip, Drip}
