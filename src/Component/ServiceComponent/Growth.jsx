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

const Growth = ({ heading, cardData }) => {
    return (
        <>
            <div className="px-[72px] mt-20">
                <Heading heading={heading} />

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
                    className=" my-8"
                >
                    {cardData?.map((item, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div className="bg-[#F8F8F8] rounded-xl p-4 h-[409px] flex flex-col sm:justify-between">
                                <div>
                                    <h3 className={`font-semibold text-lg md:text-[35px] mb-2 font-unbounded  w-[70%]`}>{item.heading}</h3>
                                    {
                                        item.time ? <p className={`text-gray-600 text-base md:text-[18px] font-light font-unbounded`}>
                                            {item.time}
                                        </p> : ""
                                    }

                                    <div className='mt-5'>
                                    {item.cardlist?.map((list, idx) => (
                                        <div className='flex flex-col  '>
                                            <div className='flex items-start gap-2'>
                                                <div className='w-[20px] h-[20px] rounded-full bg-[#F1813B] flex justify-center items-center'>
                                                    <div className='w-[10px] h-[10px] rounded-full bg-[#F9D8C3]' />
                                                </div>

                                                <div key={idx} dangerouslySetInnerHTML={{ __html: list }} />


                                            </div>


                                        </div>
                                    ))}
                                      </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </>
    )
}

export default Growth