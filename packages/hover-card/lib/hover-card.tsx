'use client'

import * as React from 'react'
import {cx} from '@daren/utils'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

function HoverCard(props: HoverCardPrimitive.HoverCardProps) {
  return <HoverCardPrimitive.Root {...props} />
}

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({className, align = 'center', sideOffset = 4, ...props}, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cx(
      'z-50 w-64 rounded-md border border-gray-100 bg-white p-4 shadow-md outline-none animate-in zoom-in-90 dark:border-gray-800 dark:bg-gray-800',
      className,
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

HoverCard.Trigger = HoverCardPrimitive.Trigger
HoverCard.Content = HoverCardContent

export {HoverCard}
