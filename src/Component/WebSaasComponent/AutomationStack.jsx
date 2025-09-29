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

const AutomationStack = ({ heading, cardData, heading1, slidesPerView }) => {
    return (
        <>
            <div className="px-[72px] mt-20">
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
                            <div className="bg-[#F8F8F8] rounded-xl p-4 h-[409px]  flex flex-col sm:justify-between">
                                <div>
                                    <h3 className={`font-semibold text-lg md:text-[35px] mb-2 font-unbounded h-[110px]  ${item.headingWidth}`}>{item.heading}</h3>
                                    {
                                        item.ideal && <p className='bg-[#FFE2D0] text-[#F1813B] font-unbounded font-light text-[12px] py-2 px-5 inline-block rounded-lg'>{item.ideal}</p>

                                    }


                                    <div className='my-5 space-y-2'>
                                        <h3 className='font-unbounded font-light text-[18px]'>{item.firstField}</h3>
                                        {item.tech?.map((list, idx) => (
                                            <div key={idx} className='flex flex-col font-montserrat text-[15px]  '>

                                                <div className='flex items-start gap-2'>
                                                    <div className='w-[20px] h-[20px] rounded-full bg-[#F1813B] flex justify-center items-center'>
                                                        <div className='w-[10px] h-[10px] rounded-full bg-[#F9D8C3]' />
                                                    </div>

                                                    <div key={idx} className='font-montserrat' dangerouslySetInnerHTML={{ __html: list }} />


                                                </div>


                                            </div>
                                        ))}
                                    </div>
                                    <div className='space-y-2' >
                                        <h3 className='font-unbounded font-light text-[18px]'>{item.secField}</h3>
                                        {item?.Win?.map((list, idx) => (
                                            <div key={idx} className='flex flex-col  font-montserrat text-[15px]  '>

                                                <div className='flex items-start gap-2'>
                                                    <div className='w-[20px] h-[20px] rounded-full bg-[#F1813B] flex justify-center items-center'>
                                                        <div className='w-[10px] h-[10px] rounded-full bg-[#F9D8C3]' />
                                                    </div>

                                                    <div key={idx} className='font-montserrat' dangerouslySetInnerHTML={{ __html: list }} />


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

export default AutomationStack