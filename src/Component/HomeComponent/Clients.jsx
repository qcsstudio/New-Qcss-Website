"use client";
import { next, previous } from "@/AllAssets/AllAsssets";
import { Happyclients } from "@/Data/HomePage/Clients";
import React, { useCallback, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";


const Clients = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    console.log("client")
    const handleNext = useCallback(() => {
        setActiveIndex(activeIndex + 1)
    }, [activeIndex])
    const handlePrevious = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)

        }
    }
    console.log(activeIndex, "activeIndexactiveIndexactiveIndex")
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


            {/* Swiper */}
            <div className="">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    initialSlide={0}
                    navigation={{
                        nextEl: ".custom-next1",
                        prevEl: ".custom-prev1",
                    }}
                    // speed={200}
                    // lazy={true}
                    loop={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        768: { slidesPerView: 2, centeredSlides: true, initialSlide: 1 },
                        1024: { slidesPerView: 3, centeredSlides: true, initialSlide: 1 },
                    }}
                >
                    {Happyclients.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-[25px] bg-white overflow-hidden h-full flex flex-col justify-center transition-all duration-300 relative">
                                <Image
                                    src={item.image}
                                    width={184}
                                    height={230}
                                    // loading="lazy"
                                    alt="Client"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay */}
                                <div
                                    className={`absolute inset-0 flex flex-col justify-center p-6 text-white transition-opacity duration-300 ${activeIndex === index ? "bg-white opacity-100" : "bg-black/0 opacity-0"
                                        }`}
                                >
                                    <div className="text-center">
                                        <Image
                                            src={item.logo}
                                            width={80}
                                            height={80}
                                            // loading="lazy"
                                            alt="Client Logo"
                                            className="mx-auto mb-4"
                                        />
                                        <p className="text-gray-700 text-sm md:text-base mb-2">{item.desc}</p>
                                        <h4 className="font-bold text-sm md:text-base">{item.position}</h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons at Bottom */}
                <div className="flex justify-center  gap-6 mt-6 b">
                    <button className="custom-prev1 transition">
                        prev1
                        <Image src={previous} width={100} height={100} className="w-full h-full" alt="previuosbutton" />
                    </button>
                    <button className="custom-next1  transition">
                        NEXY
                        <Image src={next} width={100} height={100} className="w-full h-full" alt="nextbutton" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Clients;




