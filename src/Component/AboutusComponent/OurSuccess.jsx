import Image from 'next/image'
import React from 'react'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'
import { success } from '@/AllAssets/AllAsssets'

const OurSuccess = () => {
  return (
    <SectionContainer className="flex flex-col items-center gap-10 lg:flex-row">
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <Heading heading="Our Story — the Journey That Shaped Our Success" />
        <p className="text-base text-neutral-600 sm:text-lg">
          Frustrated by siloed marketing and clunky tech, a growth marketer and a full-stack engineer founded QuantumCrafters Studio. Their vision: blend data-driven marketing with intelligent automation so businesses can grow faster, spend smarter, and work lighter.
        </p>
        <a
          href="/contactus"
          className="inline-flex items-center justify-center rounded-full bg-[#F1813B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d96d2b]"
        >
          Start a Project
        </a>
      </div>
      <div className="flex-1">
        <Image
          src={success}
          alt="QuantumCrafters success metrics"
          width={559}
          height={420}
          className="h-auto w-full max-w-xl object-contain"
          sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
        />
      </div>
    </SectionContainer>
  )
}

export default OurSuccess
