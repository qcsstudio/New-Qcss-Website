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

const AutomationStack = ({ heading, cardData, heading1, slidesPerView ,para}) => {
    return (
        <>
            <section className="px-[72px] mt-12">
                <Heading heading={heading} />
                {
                    heading1 && <Heading heading={heading1} />
                }
        {para && <p className='font-montserrat text-[18px]'>{para}</p>}

                <Swiper
                    modules={[Navigation, Pagination, FreeMode, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 1.5, spaceBetween: 20 },
                        768: { slidesPerView: 2.2, spaceBetween: 20 },
                        1024: { slidesPerView: slidesPerView, spaceBetween: 24 },
                    }}
                    loop={true}
                    freeMode={true}
                    // autoplay={{
                    //     delay: 1000,
                    //     disableOnInteraction: false,
                    // }}
                    speed={1000}
                    className=" my-8"
                >
                    {cardData?.map((item, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center flex-wrap ">
                            <div className="bg-[#F8F8F8] rounded-xl p-4 h-[420px]  flex flex-col sm:justify-between">
                                <div>
                                    <h3 className={`font-unbounded font-semibold text-2xl text-gray-900 sm:text-[30px] ${item.headingWidth || ""}`}>{item.heading}</h3>
                                    {
                                        item.ideal && <p className='mt-2 inline-block rounded-lg bg-[#FFE2D0] px-4 py-2 text-xs font-unbounded font-semibold uppercase tracking-wide text-[#F1813B]'>{item.ideal}</p>

                                    }


                                    <div className='my-6 space-y-3'>
                                        <h3 className='text-sm font-unbounded font-semibold uppercase tracking-wide text-gray-800 sm:text-base'>{item.firstField}</h3>
                                        {item.tech?.map((list, idx) => (
                                            <div key={idx} className='flex flex-col font-montserrat text-[15px]  '>

                                                <div className='flex items-start gap-3'>
                                                    <div className='mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#F1813B]'>
                                                        <div className='h-2.5 w-2.5 rounded-full bg-[#F9D8C3]' />
                                                    </div>

                                                    <div key={idx} className='text-sm font-montserrat text-gray-700 sm:text-base' dangerouslySetInnerHTML={{ __html: list }} />


                                                </div>


                                            </div>
                                        ))}
                                    </div>
                                    <div className='space-y-3' >
                                        <h3 className='text-sm font-unbounded font-semibold uppercase tracking-wide text-gray-800 sm:text-base'>{item.secField}</h3>
                                        {item?.Win?.map((list, idx) => (
                                            <div key={idx} className='flex flex-col  font-montserrat text-[15px]  '>

                                                <div className='flex items-start gap-3'>
                                                    <div className='mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#F1813B]'>
                                                        <div className='h-2.5 w-2.5 rounded-full bg-[#F9D8C3]' />
                                                    </div>

                                                    <div key={idx} className='text-sm font-montserrat text-gray-700 sm:text-base' dangerouslySetInnerHTML={{ __html: list }} />


                                                </div>


                                            </div>
                                        ))}

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>
        </>
    )
}

export default AutomationStack