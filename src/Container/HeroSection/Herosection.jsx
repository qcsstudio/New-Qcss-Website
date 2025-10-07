'use client';
import Image from "next/image";
import React from "react";

export default function HeroSection({ heading, para }) {
  return (
    <div className="relative w-[97%] h-[90vh] mx-auto rounded-lg overflow-hidden mb-10 text-white">
      
      {/* Background Image */}
      <Image
        src="/HeroImages/Home-Hero.svg"
        height={100}
        width={100}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative w-[60%] mt-40 ms-10 z-10 text-black">
        <h1 className="font-unbounded text-[55px]">{heading}</h1>
        <p className="font-montserrat text-[20px]">{para}</p>
        <button className="bg-[#F1813B] px-6 py-2 rounded-lg mt-10 hover:bg-orange-600 transition-colors">
          Book a Discovery Call
        </button>
      </div>

      {/* Decorative Divs */}
      <div className="absolute bottom-0 right-0 w-[395px] h-[210px] overflow-hidden z-10">
        <div className="absolute inset-0 bg-white clip-path-main"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[#D9D9D9] clip-path-overlay"></div>
      </div>
    </div>
  );
}
