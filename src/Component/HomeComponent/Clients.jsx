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
    const [activeIndex, setActiveIndex] = useState(0)


    return (
        <section className="mx-auto my-20 w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            {/* Heading */}
            <div className="mb-8 md:mb-12">
                <h2 className="text-3xl font-unbounded font-bold text-gray-900 sm:text-4xl lg:text-[40px]">
                    Real Results. Happy Clients.
                </h2>
                <p className="my-4 text-sm font-montserrat text-gray-600 sm:text-base">
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
                        setActiveIndex(swiper.realIndex);
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex);
                    }}
                    scrollbar={true}
                    grabCursor={true}       // cursor ko grab banata hai
                    freeMode={false}
                    className="w-full pb-12"
                >
                    {Happyclients.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex justify-center items-center "
                        >
                            {activeIndex === index ? (
                                <div className="flex flex-col items-center gap-4 p-4 text-center">
                                    <Image
                                        src={item.logo}
                                        width={80}
                                        height={80}
                                        alt="Client"
                                        className="h-16 w-16 object-contain"
                                    />
                                    <p className="text-sm font-montserrat text-gray-700 md:text-base">
                                        {item.desc}
                                    </p>
                                    <h4 className="text-sm font-unbounded font-semibold text-gray-900 md:text-base">
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
                        className="custom-prev1 rounded-full border p-3 transition hover:bg-gray-200"
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

                        className="custom-next1 rounded-full border p-3 transition hover:bg-gray-200"
                    >
                        <Image src={next} width={30} height={30} alt="Next button" className="w-full h-full" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Clients;
