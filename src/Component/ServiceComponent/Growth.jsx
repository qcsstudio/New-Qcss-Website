'use client'
import React from 'react'
import Heading from '../HeadingComponent/Heading'
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import {Swiper} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Growth = ({ heading, cardData, heading1 }) => {
    return (
        <>
            <section className="mx-auto mt-16 w-full max-w-7xl px-6 sm:px-8 lg:px-12">
                <Heading heading={heading} />
                {
                    heading1 && <Heading heading={heading1} />
                }


                <Swiper
                    modules={[Navigation, Pagination, FreeMode, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 1.5, spaceBetween: 20 },
                        768: { slidesPerView: 2.2, spaceBetween: 20 },
                        1024: { slidesPerView: 3.5, spaceBetween: 24 },
                    }}
                    loop={true}
                    freeMode={true}
                    // autoplay={{
                    //     delay: 1000,
                    //     disableOnInteraction: false,
                    // }}
                    speed={1000}
                    className=" my-10"
                >
                    {cardData?.map((item, index) => (
                        <SwiperSlide key={index} className="flex h-full">
                            <div className="flex h-full flex-col justify-between rounded-2xl bg-[#F8F8F8] p-6 shadow-sm">
                                <div>
                                    <h3 className={`font-unbounded font-semibold text-2xl text-gray-900 sm:text-[30px]`}>{item.heading}</h3>
                                    {
                                        item.time ? <p className={`mt-2 text-sm font-unbounded font-light text-gray-600 sm:text-base`}>
                                            {item.time}
                                        </p> : ""
                                    }

                                    <div className='mt-6 space-y-3'>
                                        {item.cardlist?.map((list, idx) => (
                                            <div key={idx} className='flex flex-col  '>
                                                <div className='flex items-start gap-3'>
                                                    <div className='mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#F1813B]'>
                                                        <div className='h-2.5 w-2.5 rounded-full bg-[#F9D8C3]' />
                                                    </div>

                                                    <div key={idx} className='text-sm font-montserrat text-gray-700 sm:text-base' dangerouslySetInnerHTML={{ __html: list }} />


                                                </div>


                                            </div>
                                        ))}
                                    </div>

                                        {
                                            (item?.metricsData || item?.metricsName) && (
                                                <div className=' mt-6 space-y-3'>
                                                    <h3 className='inline-flex rounded-lg bg-[#E6FFEB] px-4 py-2 text-xs font-unbounded font-semibold uppercase tracking-wide text-[#43A24E]'>
                                                        {item.metricsName}
                                                    </h3>
                                                    <p className='text-sm font-montserrat text-gray-700 sm:text-base'>{item.metricsData}</p>
                                                </div>
                                            )
                                        }

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>
        </>
    )
}

export default Growth