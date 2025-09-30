'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'
import { challenges } from '@/Data/HomePage/challenges'
import { next, previous } from '@/AllAssets/AllAsssets'

const Challenges = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SectionContainer className="pt-6">
      <Heading heading="The Biggest Challenges We Help You Overcome" />
      <div className="relative mt-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides
          loop
          navigation={{ nextEl: '.challenge-next', prevEl: '.challenge-prev' }}
          breakpoints={{
            768: { slidesPerView: 2, centeredSlides: true },
            1024: { slidesPerView: 3, centeredSlides: true },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="pb-16"
        >
          {challenges.map((item, index) => (
            <SwiperSlide key={item.title}>
              <article className="h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                {activeIndex === index ? (
                  <div className="relative h-[420px] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-neutral-900/60 p-6 text-white">
                      <span className="text-4xl font-unbounded font-extralight">{item.number}</span>
                      <h3 className="mt-2 text-2xl font-unbounded font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm text-white/80 sm:text-base">{item.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full flex-col justify-end gap-4 p-6">
                    <span className="text-4xl font-unbounded font-extralight text-neutral-400">{item.number}</span>
                    <h3 className="text-2xl font-unbounded font-semibold text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600 sm:text-base">{item.desc}</p>
                  </div>
                )}
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-6">
          <button
            type="button"
            className="challenge-prev inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 transition hover:border-[#F1813B] hover:text-[#F1813B]"
            aria-label="Previous challenge"
          >
            <Image src={previous} alt="Previous" width={24} height={24} />
          </button>
          <button
            type="button"
            className="challenge-next inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 transition hover:border-[#F1813B] hover:text-[#F1813B]"
            aria-label="Next challenge"
          >
            <Image src={next} alt="Next" width={24} height={24} />
          </button>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Challenges
