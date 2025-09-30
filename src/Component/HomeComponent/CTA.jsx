import Image from 'next/image'
import React from 'react'
import SectionContainer from '@/Component/Layout/SectionContainer'
import { cta } from '@/AllAssets/AllAsssets'

const CTA = () => {
  return (
    <SectionContainer className="relative overflow-hidden rounded-3xl bg-[#F4F2F2] px-0 py-0">
      <div className="relative h-full w-full">
        <Image
          src={cta}
          alt="Team collaborating"
          width={1600}
          height={900}
          className="h-full w-full rounded-3xl object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-6 bg-neutral-900/70 p-8 sm:p-12 lg:p-16">
          <h2 className="max-w-3xl text-balance text-3xl font-unbounded font-bold text-white sm:text-4xl lg:text-[40px]">
            Ready to transform growth with AI-native strategies and tech?
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
            >
              Book a Discovery Call
            </a>
            <a
              href="/service"
              className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              See How We Work
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default CTA
