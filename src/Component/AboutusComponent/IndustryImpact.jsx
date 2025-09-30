'use client'

import React from 'react'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'

const staggerClasses = {
  'md:mt-0': 'md:mt-0',
  'md:mt-12': 'md:mt-12',
}

const IndustryImpact = ({ cardsData }) => {
  return (
    <SectionContainer>
      <Heading heading="Industry Impact" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cardsData.map((item, idx) => (
          <article
            key={`${item.title}-${idx}`}
            className={`flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
              staggerClasses[item.position] ?? ''
            }`}
          >
            <h3 className="text-2xl font-unbounded font-semibold text-neutral-900">{item.title}</h3>
            <p className="mt-4 text-sm text-neutral-600 sm:text-base">{item.desc}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default IndustryImpact
