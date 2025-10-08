'use client';
import Image from "next/image";
import React from "react";

export default function HeroSection({ HeroImage, para, element, action, HeroImageMobile }) {
  return (
    <>
      {/* tab to laptop view----------- */}
      <div className={`relative w-[97%]  hidden md:flex items-center md:h-[400px] lg:h-[60vh] xl:h-[93vh] mx-auto rounded-lg overflow-hidden mb-10 ${HeroImage ? "text-white" : "text-black"}`}>
        {HeroImage && <Image
          src={HeroImage}
          height={100}
          width={100}
          alt="Hero Background"
          className="absolute  w-full h-full  object-cover z-10"
        />}
        {/* Content */}
        <div className="relative md:w-[55%] lg:w-[62%] xl:w-[55%] md:px-4 lg:px-10 z-10 md:space-y-4 lg:space-y-2">
          {/* <h1 className="font-unbounded text-[55px] ">{heading}</h1> */}
          {element}
          <p className="font-montserrat md:text-[15px] lg:text-[17px] xl:text-[20px] lg:w-[95%] xl:w-full ">{para}</p>
          <button onClick={() => action()} className="bg-[#F1813B] md:text-[13px] lg:text-[15px] md:px-3 lg:px-6 md:py-1 lg:py-2 md:rounded lg:rounded-lg lg:mt-8 hover:bg-orange-600 transition-colors font-unbounded">
            Book a Discovery Call
          </button>
        </div>
      </div>

      {/* Mobile View-------------------- */}
      <div className="md:hidden block text-center w-[97%] mx-auto bg-[#161616] rounded-lg  px-1">
        <div className="mt-20 absolute z-100 space-y-5 px-1 ">
          {element}
          <p className="font-montserrat text-white text-wrap">{para}</p>
          <button onClick={() => action()} className="bg-[#F1813B] text-white font-unbounded rounded px-3 py-1 mt-4">
            Book a Discovery Call
          </button>
        </div>

        <Image
          src={HeroImageMobile}
          height={100}
          width={100}
          alt="Hero Background"
          className=" relative w-full h-full z-10"
        />
      </div>


    </>
  );
}
