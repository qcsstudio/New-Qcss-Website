'use client'
import React from 'react'
import Heading from '../HeadingComponent/Heading'
import { HelptoGrowCard } from '@/Data/Aimarketing/HelptoGrow'
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import {Swiper} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const HelptoGrow = ({ heading, heading1, para }) => {
    return (
        <>
            <div className="px-[72px] mt-20">
                <Heading heading={heading} />
                {
                    heading1 && <Heading heading={heading1} />
                }
                <p className='font-montserrat text-[18px]'>If KPI targets aren’t met within pilot period, next month is free.</p>

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
                    {HelptoGrowCard?.map((item, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div className="bg-[#F8F8F8] rounded-xl p-4 h-[409px] flex flex-col sm:justify-between ">
                                <div className='space-y-5 p-2'>
                                    <p className='bg-[#FFD3D3] text-[#FF6B6B] font-unbounded font-light text-[12px] py-2 px-5 inline-block rounded-lg'>Paint Point</p>
                                    <p className='font-unbounded font-light text-[18px]'>{item.points1}</p>
                                    <p className='bg-[#F0FFF4] text-[#38A169] font-unbounded font-light text-[12px] py-2 px-5 inline-block rounded-lg'>AI Engine Fix</p>
                                    <p className='font-unbounded font-light text-[18px]'>{item.points2}</p>
                                    <h2 className='font-unbounded font-semibold text-[35px]'>{item.TypicalUplift}</h2>

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </>
    )
}

export default HelptoGrow