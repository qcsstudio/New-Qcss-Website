"use client";

import React from "react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowRight } from "react-icons/md";

import Heading from "../HeadingComponent/Heading";

const WeSupport = ({ cards, heading, heading1 }) => {
    return (
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
                    loop
                    freeMode
                    speed={1000}
                    className="pb-10"
                >
                    {cards?.map((item, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div className="flex w-full min-h-[320px] flex-col gap-6 rounded-lg bg-[#F5F7F9] p-6 sm:min-h-[360px] sm:p-8 md:min-h-[420px]">
                                <div className="space-y-4">
                                    <h3 className="font-unbounded text-xl font-semibold md:text-[32px] lg:text-[35px] md:w-[85%] lg:w-[70%]">
                                        {item.heading}
                                    </h3>
                                    {item.desc ? (
                                        <p className="font-unbounded text-base font-medium text-gray-600 md:text-[22px] lg:text-[24px]">
                                            {item.desc}
                                        </p>
                                    ) : null}
                                </div>

                                <div className="mt-auto flex flex-col gap-4 font-montserrat text-[15px] md:gap-6 md:text-base">
                                    <p>{item.para}</p>
                                    <button className="flex items-center gap-2 font-semibold text-[#F1813B] transition-colors hover:text-[#d46c2d]">
                                        {item.button}
                                        <span>
                                            <MdKeyboardArrowRight className="text-[20px]" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default WeSupport;
