'use client'

import Heading from '../HeadingComponent/Heading'
import SectionContainer from '@/Component/Layout/SectionContainer'
import { Navigation, Pagination, FreeMode, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Swiper, SwiperSlide } from 'swiper/react'

const Growth = ({ heading, cardData, heading1 }) => {
  return (
    <SectionContainer>
      <Heading heading={heading} />
      {heading1 && <Heading heading={heading1} />}
      <Swiper
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        spaceBetween={24}
        slidesPerView={1.05}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2.1 },
          1024: { slidesPerView: 3.2 },
        }}
        loop
        freeMode
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={900}
        className="mt-10"
      >
        {cardData?.map((item) => (
          <SwiperSlide key={item.heading} className="pb-8">
            <article className="flex h-full flex-col rounded-3xl bg-[#F8F8F8] p-6 shadow-sm">
              <h3 className="text-2xl font-unbounded font-semibold text-neutral-900">{item.heading}</h3>
              {item.time && <p className="mt-1 text-sm text-neutral-500 sm:text-base">{item.time}</p>}
              <div className="mt-5 space-y-3 text-sm text-neutral-600 sm:text-base">
                {item.cardlist?.map((list, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F1813B] text-xs text-white">
                      •
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: list }} />
                  </div>
                ))}
              </div>
              {(item?.metricsData || item?.metricsName) && (
                <div className="mt-6 space-y-3">
                  <span className="inline-flex rounded-full bg-[#E6FFEB] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#43A24E]">
                    {item.metricsName}
                  </span>
                  <p className="text-sm text-neutral-600 sm:text-base">{item.metricsData}</p>
                </div>
              )}
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  )
}

export default Growth
