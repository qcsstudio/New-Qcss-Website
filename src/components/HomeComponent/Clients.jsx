"use client";
import { next, previous } from "@/AllAssets/AllAsssets";
import { Happyclients } from "@/Data/HomePage/Clients";
import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Heading from "../HeadingComponent/Heading";

const Clients = ({heading}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mx-auto px-10">
      <Heading heading={heading} />
      <p className="font-montserrat text-base md:text-[18px] my-4">
        Loved & Trusted by <br /> +250 businesses.
      </p>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true} // ✅ center mein active slide
        loop={true}
        navigation={{
          nextEl: ".custom-next1",
          prevEl: ".custom-prev1",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="border-none"
        breakpoints={{
          340: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 2, centeredSlides: true },
          1024: { slidesPerView: 3, centeredSlides: true },
        }}
      >
        {Happyclients.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`rounded-xl overflow-hidden h-[280px] flex flex-col justify-center items-center transition-all duration-300 `}
            >
              {activeIndex === index ? (
                // 👇 Center slide = content
                <div className="flex flex-col justify-center items-center text-center px-5">
                  <p className="text-gray-700 text-sm md:text-base mb-2 font-montserrat">
                    {item.desc}
                  </p>
                  <h4 className="text-sm md:text-base font-unbounded font-semibold">
                    {item.position}
                  </h4>
                </div>
              ) : (
                // 👇 Side slides = image only
                <Image
                  src={item.image}
                  width={184}
                  height={230}
                  alt="Client"
                  className="w-full h-full  rounded-xl"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button className="custom-prev1 transition">
          <Image
            src={previous}
            width={100}
            height={100}
            className="w-full h-full"
            alt="previousbutton"
          />
        </button>
        <button className="custom-next1 transition">
          <Image
            src={next}
            width={100}
            height={100}
            className="w-full h-full"
            alt="nextbutton"
          />
        </button>
      </div>
    </div>
  );
};

export default Clients;
