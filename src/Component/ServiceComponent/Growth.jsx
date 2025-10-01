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
            <div className=" sm:mx-[20px] sm:p-[10px] lg:px-[72px] mt-20">
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
                    className=" my-8"
                >
                    {cardData?.map((item, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div className="bg-[#F8F8F8] rounded-xl p-4 h-[409px] flex flex-col sm:justify-between">
                                <div>
                                    <h3 className={` font-semibold text-lg md:text-[35px] mb-2 font-unbounded  w-[70%]`}>{item.heading}</h3>
                                    {
                                        item.time ? <p className={`text-gray-600 text-base md:text-[18px] font-light font-unbounded`}>
                                            {item.time}
                                        </p> : ""
                                    }
                                    <div className='mt-5'>
                                        {item.cardlist?.map((list, idx) => (
                                            <div key={idx} className='flex flex-col  '>
                                                <div className='flex items-start gap-2'>
                                                    <div className='w-[20px] h-[20px] rounded-full bg-[#F1813B] flex justify-center items-center'>
                                                        <div className='w-[10px] h-[10px] rounded-full bg-[#F9D8C3]' />
                                                    </div>
                                                    <div key={idx} className='font-montserrat' dangerouslySetInnerHTML={{ __html: list }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                        {
                                            (item?.metricsData || item?.metricsName) && (
                                                <div className=' mt-5 space-y-4'>
                                                    <h3 className=' w-[180px] text-center  rounded-lg bg-[#E6FFEB] text-[#43A24E] font-unbounded text-[15px]'>
                                                        {item.metricsName}
                                                    </h3>
                                                    <p className='font-montserrat  text-[15px]'>{item.metricsData}</p>
                                                </div>
                                            )
                                        }
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