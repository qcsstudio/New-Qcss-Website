import React from 'react'
import { cn } from '@/lib/utils'

const SectionContainer = React.forwardRef(function SectionContainer(
  { as: Component = 'section', className = '', children, id },
  ref,
) {
  return (
    <Component
      ref={ref}
      id={id}
      className={cn(
        'mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16',
        className,
      )}
    >
      {children}
    </Component>
  )
})

export default SectionContainer
