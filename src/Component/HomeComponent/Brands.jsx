import Image from 'next/image'
import React from 'react'
import SectionContainer from '@/Component/Layout/SectionContainer'
import { BrandsData } from '@/Data/HomePage/BrandsData'

const Brands = () => {
  return (
    <SectionContainer>
      <div className="space-y-6 text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F1813B]">Who trusts us</p>
        <h2 className="text-balance text-3xl font-unbounded font-bold text-neutral-900 sm:text-4xl lg:text-[40px]">
          QuantumCrafters: The Growth Engine Behind Modern Brands
        </h2>
        <p className="text-base text-neutral-600 sm:text-lg">
          We blend human creativity with AI precision so your marketing, automation, and product teams can deliver results faster.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {BrandsData.map((item) => (
          <article
            key={item.heading}
            className="flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-[#F8F8F8] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-56 w-full">
              <Image
                src={item.image}
                alt={item.heading}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 384px, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6 text-left">
              <h3 className="text-2xl font-unbounded font-semibold text-neutral-900">{item.heading}</h3>
              <p className="text-sm text-neutral-600 sm:text-base">{item.para}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Brands
