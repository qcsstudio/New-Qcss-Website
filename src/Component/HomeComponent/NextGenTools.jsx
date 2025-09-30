import React from 'react'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'

const NextGenTools = () => {
  return (
    <SectionContainer>
      <Heading heading="Next-Gen Tools Driving Your Success" />
      <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
        From predictive analytics to AI content engines, our tool stack is curated to plug into your workflows quickly so you can start shipping results within days, not months.
      </p>
    </SectionContainer>
  )
}

export default NextGenTools
