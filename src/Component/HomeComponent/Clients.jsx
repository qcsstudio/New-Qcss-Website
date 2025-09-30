'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'
import { Happyclients } from '@/Data/HomePage/Clients'
import { next, previous } from '@/AllAssets/AllAsssets'

const Clients = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SectionContainer>
      <Heading heading="Real Results. Happy Clients." />
      <p className="mt-2 max-w-2xl text-base text-neutral-600 sm:text-lg">
        Loved and trusted by more than 250 growth-focused businesses worldwide.
      </p>
      <div className="relative mt-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          loop
          navigation={{ nextEl: '.clients-next', prevEl: '.clients-prev' }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
            1280: { slidesPerView: 5, spaceBetween: 24 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="pb-16"
        >
          {Happyclients.map((item, index) => (
            <SwiperSlide key={item.position} className="flex items-center justify-center">
              <div className="flex w-full flex-col items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Image src={item.logo} alt={item.position} width={96} height={96} className="h-16 w-auto object-contain" />
                {activeIndex === index && (
                  <p className="text-sm text-neutral-600 sm:text-base">{item.desc}</p>
                )}
                <h4 className="text-sm font-semibold text-neutral-900 sm:text-base">{item.position}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-6">
          <button
            type="button"
            className="clients-prev inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 transition hover:border-[#F1813B] hover:text-[#F1813B]"
            aria-label="Previous client"
          >
            <Image src={previous} alt="Previous" width={20} height={20} />
          </button>
          <button
            type="button"
            className="clients-next inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 transition hover:border-[#F1813B] hover:text-[#F1813B]"
            aria-label="Next client"
          >
            <Image src={next} alt="Next" width={20} height={20} />
          </button>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Clients
