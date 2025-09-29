"use client";
import { next, previous } from "@/AllAssets/AllAsssets";
import { Happyclients } from "@/Data/HomePage/Clients";
import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";


const Clients = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <div className="px-6 md:px-[72px] my-12 md:my-20">
            {/* Heading */}
            <div className="mb-8 md:mb-12">
                <h2 className="text-3xl md:text-[40px] font-bold font-unbounded">
                    Real Results. Happy Clients.
                </h2>
                <p className="font-montserrat text-base md:text-[18px] my-4">
                    Loved & Trusted by <br /> +250 businesses.
                </p>
            </div>

            <div className="relative flex flex-col items-center">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={1}
                    loop={true}
                    initialSlide={0}
                    navigation={{
                        nextEl: ".custom-next1",
                        prevEl: ".custom-prev1",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 24,
                        },
                    }}
                    onSwiper={(swiper) => {
                        setActiveIndex(swiper.realIndex ?? 0);
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex ?? 0);
                    }}
                    scrollbar={true}
                    grabCursor={true}
                    freeMode={false}
                    className="w-full pb-12"
                >
                    {Happyclients.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex justify-center items-center "
                        >
                            {activeIndex === index ? (
                                <div className="p-4 text-center">
                                    <Image
                                        src={item.logo}
                                        width={80}
                                        height={80}
                                        alt="Client"
                                        className="w-full h-full"
                                    />
                                    <p className="text-gray-700 text-sm md:text-base mb-4">
                                        {item.desc}
                                    </p>
                                    <h4 className="font-bold text-sm md:text-base">
                                        {item.position}
                                    </h4>
                                </div>
                            ) : (
                                <Image
                                    src={item.image}
                                    width={80}
                                    height={80}
                                    alt="Client"
                                    className="w-full h-full"
                                />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* -----------------Custom Buttons-------------- */}
                <div className="flex justify-center gap-6 mt-6">
                    <button
                        className=" p-3 custom-prev1  border rounded-full hover:bg-gray-200 transition"
                    >
                        <Image
                            src={previous}
                            width={30}
                            height={30}
                            alt="Previous button"
                            className="w-full h-full"
                        />
                    </button>
                    <button

                        className=" p-3 custom-next1 border rounded-full hover:bg-gray-200 transition"
                    >
                        <Image src={next} width={30} height={30} alt="Next button" className="w-full h-full" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Clients;
