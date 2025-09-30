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




const WeSupport = ({cards,heading,heading1}) => {
    return (
        <>
            <section className="w-full bg-white">
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:px-8 lg:px-12">

                {
                    heading1 ? <Heading heading={heading1}/> : ""
                }
                <Heading heading={heading}/>
                <div className="py-10">
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
                        className="pb-10"
                    >
                        {cards?.map((item, index) => (
                            <SwiperSlide key={index} className="flex h-full items-stretch">
                                <div className="flex h-full flex-col justify-between rounded-2xl bg-[#F5F7F9] p-6 shadow-sm">
                                    <div>
                                        <h3 className={`font-unbounded font-semibold text-2xl text-gray-900 sm:text-[30px]`}>{item.heading}</h3>
                                        {
                                            item.desc ?  <p className={`mt-2 text-base font-montserrat text-gray-600 sm:text-lg`}>
                                            {item.desc}
                                        </p> : ""
                                        }

                                        <div className='mt-8 flex flex-col items-start gap-6'>
                                        <p className='text-sm font-montserrat text-gray-700 sm:text-base'>{item.para}</p>
                                        <button className='inline-flex items-center gap-2 rounded-lg bg-[#F1813B] px-5 py-2 font-montserrat text-sm font-semibold text-white transition hover:bg-[#d46f2c]'>
                                            {item.button}
                                            <span>
                                                <MdKeyboardArrowRight className='text-lg' />
                                            </span>
                                        </button>

                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            </section>
        </>
    )
}

export default WeSupport