'use client'

import Heading from '../HeadingComponent/Heading'
import SectionContainer from '@/Component/Layout/SectionContainer'
import { Navigation, Pagination, FreeMode, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Swiper, SwiperSlide } from 'swiper/react'

const AutomationStack = ({ heading, cardData, heading1, slidesPerView, id }) => {
  return (
    <SectionContainer id={id}>
      <Heading heading={heading} />
      {heading1 && <Heading heading={heading1} />}
      <Swiper
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        spaceBetween={24}
        slidesPerView={1.05}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2.1 },
          1024: { slidesPerView: slidesPerView || 3 },
        }}
        loop
        freeMode
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={900}
        className="mt-10"
      >
        {cardData?.map((item) => (
          <SwiperSlide key={item.heading} className="pb-8">
            <article className="flex h-full flex-col rounded-3xl bg-[#F8F8F8] p-6 shadow-sm">
              <h3 className="text-2xl font-unbounded font-semibold text-neutral-900">{item.heading}</h3>
              {item.ideal && (
                <span className="mt-2 inline-flex w-max rounded-full bg-[#FFE2D0] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#F1813B]">
                  {item.ideal}
                </span>
              )}
              <div className="mt-5 space-y-4 text-sm text-neutral-600 sm:text-base">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">{item.firstField}</h4>
                  <div className="mt-2 space-y-2">
                    {item.tech?.map((list, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F1813B] text-xs text-white">
                          •
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: list }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">{item.secField}</h4>
                  <div className="mt-2 space-y-2">
                    {item?.Win?.map((list, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F1813B] text-xs text-white">
                          •
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: list }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  )
}

export default AutomationStack
