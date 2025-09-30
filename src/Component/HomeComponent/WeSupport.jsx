'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, FreeMode, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { MdKeyboardArrowRight } from 'react-icons/md'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'

const WeSupport = ({ cards, heading, heading1 }) => {
  return (
    <SectionContainer>
      {heading1 && <Heading heading={heading1} />}
      <Heading heading={heading} />
      <Swiper
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.05}
        breakpoints={{
          640: { slidesPerView: 1.4 },
          768: { slidesPerView: 2.1 },
          1024: { slidesPerView: 3.1 },
        }}
        loop
        freeMode
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={800}
        className="mt-10"
      >
        {cards?.map((item) => (
          <SwiperSlide key={item.heading} className="pb-8">
            <article className="flex h-full flex-col justify-between rounded-3xl bg-[#F5F7F9] p-6 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-unbounded font-semibold text-neutral-900">{item.heading}</h3>
                {item.desc && <p className="text-sm text-[#F1813B]">{item.desc}</p>}
                <p className="text-sm text-neutral-600 sm:text-base">{item.para}</p>
              </div>
              <a
                href={item.href || '/contactus'}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F1813B] transition hover:text-[#d96d2b]"
              >
                {item.button}
                <MdKeyboardArrowRight className="text-xl" />
              </a>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  )
}

export default WeSupport
