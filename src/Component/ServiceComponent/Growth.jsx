"use client";

import React from "react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";

import Heading from "../HeadingComponent/Heading";

const Growth = ({ heading, cardData, heading1 }) => {
    return (
        <div className="px-6 md:px-[72px] mt-20">
            <Heading heading={heading} />
            {heading1 ? <Heading heading={heading1} /> : null}

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
                className="my-8"
            >
                {cardData?.map((item, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                        <div className="flex w-full min-h-[320px] flex-col gap-6 rounded-xl bg-[#F8F8F8] p-6 sm:min-h-[360px] sm:p-8 md:min-h-[420px]">
                            <div className="space-y-4">
                                <h3 className="font-unbounded text-xl font-semibold md:text-[32px] lg:text-[35px] md:w-[85%] lg:w-[70%]">
                                    {item.heading}
                                </h3>
                                {item.time ? (
                                    <p className="font-unbounded text-base font-light text-gray-600 md:text-[18px]">{item.time}</p>
                                ) : null}

                                <div className="space-y-4">
                                    {item.cardlist?.map((list, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F1813B]">
                                                <div className="h-2.5 w-2.5 rounded-full bg-[#F9D8C3]" />
                                            </div>
                                            <div
                                                className="font-montserrat text-[15px] md:text-base"
                                                dangerouslySetInnerHTML={{ __html: list }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {item.metricsData || item.metricsName ? (
                                <div className="mt-auto space-y-3">
                                    <h3 className="w-fit rounded-lg bg-[#E6FFEB] px-4 py-2 font-unbounded text-[15px] text-[#43A24E] md:text-base">
                                        {item.metricsName}
                                    </h3>
                                    <p className="font-montserrat text-[15px] md:text-base">{item.metricsData}</p>
                                </div>
                            ) : null}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Growth;
