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
        'mx-auto w-full max-w-7xl px-4 py-[clamp(3rem,6vw,6rem)] sm:px-6 lg:px-8',
        id ? 'scroll-mt-28 md:scroll-mt-32' : '',
        className,
      )}
    >
      {children}
    </Component>
  )
})

export default SectionContainer
