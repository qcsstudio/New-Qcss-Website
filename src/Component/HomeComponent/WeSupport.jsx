'use client'
import React from 'react'

import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import {Swiper} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowRight } from "react-icons/md";
import Heading from '../HeadingComponent/Heading';




const WeSupport = ({ cards, heading, heading1 }) => {
    return (
        <>
            <div className="px-6 md:px-[72px] mt-20">
                {heading1 ? <Heading heading={heading1} /> : null}
                <Heading heading={heading} />
                <div className="py-10">
                    <Swiper
                        modules={[Navigation, Pagination, FreeMode, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        breakpoints={{
                            480: { slidesPerView: 1.2, spaceBetween: 18 },
                            768: { slidesPerView: 2.2, spaceBetween: 20 },
                            1024: { slidesPerView: 3.2, spaceBetween: 24 },
                        }}
                        loop={true}
                        freeMode={true}
                        // autoplay={{
                        //     delay: 1000,
                        //     disableOnInteraction: false,
                        // }}
                        speed={1000}
                        className="pb-10"
                    >
                        {cards?.map((item, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                <div className="bg-[#F5F7F9] rounded-lg p-6 sm:p-8 flex min-h-[320px] sm:min-h-[360px] md:min-h-[420px] w-full flex-col gap-6">
                                    <div className="space-y-4">
                                        <h3 className="font-semibold text-xl md:text-[32px] lg:text-[35px] font-unbounded w-full md:w-[85%] lg:w-[70%]">{item.heading}</h3>
                                        {
                                            item.desc ?  <p className="text-gray-600 text-base md:text-[22px] lg:text-[24px] font-medium font-unbounded">
                                            {item.desc}
                                        </p> : ""
                                        }
                                    </div>

                                    <div className='flex flex-col gap-4 md:gap-6 font-montserrat text-[15px] md:text-base mt-auto'>
                                        <p>{item.para}</p>
                                        <button className='flex gap-2 items-center justify-start font-semibold text-[#F1813B] hover:text-[#d46c2d] transition-colors'>{item.button} <span><MdKeyboardArrowRight className='text-[20px]' /></span></button>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default WeSupport