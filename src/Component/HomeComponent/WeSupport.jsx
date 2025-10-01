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
            <div className="px-[72px] mt-20">
                {
                    heading1 ? <Heading heading={heading1} /> : ""
                }
                <Heading heading={heading} />
                <div className=" py-10">
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
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                <div className="bg-[#F5F7F9] rounded-lg p-4 h-[473px] flex flex-col sm:justify-between">
                                    <div>
                                        <h3 className={`font-semibold text-lg md:text-[35px] mb-2 font-unbounded  w-[70%]`}>{item.heading}</h3>
                                        {
                                            item.desc ? <p className={`text-gray-600 text-base md:text-[25px] font-medium font-unbounded`}>
                                                {item.desc}
                                            </p> : ""
                                        }
                                        <div className='flex flex-col items-start justify-between  h-60 mt-10'>
                                            <p className='font-montserrat text-[15px]'>{item.para}</p>
                                            <button className='flex gap-2 font-montserrat items-center justify-center'>{item.button} <span><MdKeyboardArrowRight className='text-[20px]' /></span></button>
                                        </div>
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