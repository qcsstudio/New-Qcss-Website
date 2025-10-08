'use client';
import Image from "next/image";
import React from "react";

export default function HeroSection({ HeroImage, para, element, action }) {
  return (
    <>

      <div className={`relative w-[97%] flex items-center  lg:h-[60vh] xl:h-[93vh] mx-auto rounded-lg overflow-hidden mb-10 ${HeroImage ? "text-white" : "text-black"}`}>

        { HeroImage && <Image
          src={HeroImage}
          height={100}
          width={100}
          alt="Hero Background"
          className="absolute top-0 w-full h-full border xl:object-cover z-10"
        />}
        {/* Content */}
        <div className="relative lg:w-[55%] xl:w-[55%]  ms-10  xl:ms-20 z-10 ">
          {/* <h1 className="font-unbounded text-[55px] ">{heading}</h1> */}
          {element}
          <p className="font-montserrat lg:text-[17px] xl:text-[20px] lg:w-[95%] xl:w-full ">{para}</p>
          <button onClick={() => action()} className="bg-[#F1813B] px-6 py-2 rounded-lg mt-10 hover:bg-orange-600 transition-colors font-unbounded">
            Book a Discovery Call
          </button>
        </div>


      </div>
    </>
  );
}
