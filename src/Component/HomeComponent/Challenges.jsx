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
    <div className="px-[72px] my-20">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-[40px] font-bold font-unbounded">
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
            <div className="rounded-[25px] bg-white overflow-hidden h-full flex flex-col  justify-center transition-all duration-300">
              <div
                className={`absolute inset-0 flex flex-col justify-center p-6 text-white transition-opacity duration-300 ${activeIndex === index ? "bg-white opacity-100 rounded-[23px]" : "bg-black/0 opacity-0  rounded"
                  }`}
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt="swiperimages"
                    width={600}
                    height={400}
                    className="w-full  rounded-xl h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white rounded-2xl">
                    <span className="text-[60px] font-unbounded font-extralight">
                      {item.number}
                    </span>
                    <h3 className="text-[35px] font-unbounded font-semibold border-b-2 w-[300px]">
                      {item.title}
                    </h3>
                    <p className="text-[15px] mt-2 font-montserrat">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-end h-[580px]">
                <span className="text-[60px] font-unbounded font-extralight">
                  {item.number}
                </span>
                <h3 className="text-[35px] font-unbounded font-semibold border-b-2 w-[300px]">
                  {item.title}
                </h3>
                <p className="text-[15px] mt-2 font-montserrat">
                  {item.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons at Bottom */}
      <div className="flex justify-center gap-6 mt-6">
        <button className="custom-prev  transition">
          <Image src={previous} width={100} height={100} className="w-full h-full" alt="previuosbutton" />
        </button>
        <button className="custom-next  transition">
          <Image src={next} width={100} height={100} className="w-full h-full" alt="nextbutton" />
        </button>
      </div>
    </div>
  );

}
