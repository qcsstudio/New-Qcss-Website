"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { challenges } from "@/Data/HomePage/challenges";
import Image from "next/image";
import { next, previous } from "@/AllAssets/AllAsssets";

export default function Challenges() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full bg-white">
    <div className="mx-auto my-20 max-w-7xl px-6 sm:px-8 lg:px-12">
      {/* Heading */}
      <div className="mb-12 max-w-4xl">
        <h2 className="text-3xl font-unbounded font-bold text-gray-900 sm:text-4xl lg:text-[40px]">
          The Biggest Challenges We Help You <br />
          <span className="text-black">Overcome</span>
        </h2>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides
        initialSlide={0}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          768: { slidesPerView: 2, centeredSlides: true, initialSlide: 1 },
          1024: { slidesPerView: 3, centeredSlides: true, initialSlide: 1 },
        }}
        className="pb-12"
      >
        {challenges.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full flex-col justify-center overflow-hidden rounded-[25px] bg-white shadow-sm transition-all duration-300">
              {activeIndex === index ? (
                // ✅ Active Slide => Image + Overlay Text
                <div className="relative">
                  <Image
                    src={item.image}
                    alt="swiperimages"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-6 text-white">
                    <span className="text-4xl font-unbounded font-light sm:text-[52px]">
                      {item.number}
                    </span>
                    <h3 className="mt-2 text-2xl font-unbounded font-semibold sm:text-[32px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm font-montserrat sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ) : (
                // ❌ Inactive Slide => Text-only
                <div className="flex min-h-[320px] flex-col justify-end p-6 sm:min-h-[420px]">
                  <span className="text-4xl font-unbounded font-light text-gray-900 sm:text-[52px]">
                    {item.number}
                  </span>
                  <h3 className="mt-2 text-2xl font-unbounded font-semibold text-gray-900 sm:text-[32px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-montserrat text-gray-600 sm:text-base">
                    {item.desc}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons at Bottom */}
      <div className="flex justify-center gap-6 mt-6">
        <button className="custom-prev  transition">
        <Image src={previous} width={100} height={100} className="w-full h-full" alt="previuosbutton"/>
        </button>
        <button className="custom-next  transition">
            <Image src={next} width={100} height={100} className="w-full h-full" alt="nextbutton"/>
        </button>
      </div>
    </div>
    </section>
  );
}
