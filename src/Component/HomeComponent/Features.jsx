import React from 'react'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'

const Features = ({ middleFeature, rightFeature }) => {
  return (
    <SectionContainer>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <Heading heading="What Makes QuantumCrafters Different" />
          <p className="text-base text-neutral-600 sm:text-lg">
            We partner with your team across marketing, product, and operations. Every playbook blends human strategy with automation so you can grow faster without adding overhead.
          </p>
        </div>
        <div className="flex flex-col gap-6 border-t border-neutral-200 pt-6 lg:border-t-0 lg:border-r lg:pr-6">
          {middleFeature.map((feature) => (
            <div key={feature.title} className="space-y-2">
              <h3 className="text-lg font-semibold text-neutral-900">{feature.title}</h3>
              <p className="text-sm text-neutral-600 sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 border-t border-neutral-200 pt-6 lg:border-t-0">
          {rightFeature.map((feature) => (
            <div key={feature.title} className="space-y-2">
              <h3 className="text-lg font-semibold text-neutral-900">{feature.title}</h3>
              <p className="text-sm text-neutral-600 sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

export default Features
