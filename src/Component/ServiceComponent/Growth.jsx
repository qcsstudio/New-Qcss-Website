'use client'
import React from 'react'
import Heading from '../HeadingComponent/Heading'
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from 'swiper/react';

const Growth = ({ heading, cardData, heading1 }) => {
    return (
        <>
            <div className="px-6 md:px-[72px] mt-20">
                <Heading heading={heading} />
                {heading1 && <Heading heading={heading1} />}

                <Swiper
                    modules={[Navigation, Pagination, FreeMode, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        480: { slidesPerView: 1.2, spaceBetween: 18 },
                        768: { slidesPerView: 2.2, spaceBetween: 20 },
                        1024: { slidesPerView: 3.2, spaceBetween: 24 },
                    }}
                    loop
                    freeMode
                    speed={1000}
                    className="my-8"
                >
                    {cardData?.map((item, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div className="bg-[#F8F8F8] rounded-xl p-6 sm:p-8 flex min-h-[320px] sm:min-h-[360px] md:min-h-[420px] w-full flex-col gap-6">
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-xl md:text-[32px] lg:text-[35px] font-unbounded w-full md:w-[85%] lg:w-[70%]">{item.heading}</h3>
                                    {item.time ? (
                                        <p className="text-gray-600 text-base md:text-[18px] font-light font-unbounded">
                                            {item.time}
                                        </p>
                                    ) : null}

                                    <div className='space-y-4'>
                                        {item.cardlist?.map((list, idx) => (
                                            <div key={idx} className='flex items-start gap-2'>
                                                <div className='w-[20px] h-[20px] rounded-full bg-[#F1813B] flex justify-center items-center'>
                                                    <div className='w-[10px] h-[10px] rounded-full bg-[#F9D8C3]' />
                                                </div>

                                                <div className='font-montserrat text-[15px] md:text-base' dangerouslySetInnerHTML={{ __html: list }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {(item?.metricsData || item?.metricsName) && (
                                    <div className='space-y-3 mt-auto'>
                                        <h3 className='w-fit px-4 py-2 rounded-lg bg-[#E6FFEB] text-[#43A24E] font-unbounded text-[15px] md:text-base'>
                                            {item.metricsName}
                                        </h3>
                                        <p className='font-montserrat text-[15px] md:text-base'>{item.metricsData}</p>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Growth
