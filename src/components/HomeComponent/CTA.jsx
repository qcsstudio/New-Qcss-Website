import { cta } from "@/AllAssets/AllAsssets";
import Image from "next/image";
import React from "react";
const CTA = () => {
  return (
    <section className="relative mt-20 lg:py-6  overflow-hidden bg-[#F4F2F2] lg:h-[70vh]">
      {/* Background Image */}
      <Image
        src={cta}
        alt="cta background"
        width={1200}
        height={600}
        className="w-full h-full lg:object-cover  "
        
      />
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-20  sm:w-[50%] lg:w-full">
        <h2 className="text-base md:text-xl lg:text-[40px] font-unbounded font-bold text-white max-w-[45rem] leading-snug sm:text-[12px]  ">
          Ready to transform growth with AI native strategies and tech?
        </h2>
        <div className="mt-6 flex flex-wrap gap-4 text-[20px]">
          <button className="px-3  lg:px-6 py-2 bg-[#000000] font-unbounded text-[#F5F5F5] font-medium rounded-md hover:bg-gray-900 transition text-[15px]  lg:text-[40px]">
            Book a Discovery Call
          </button>
          <button className="px-3  lg:px-6 py-2 bg-[#000000] font-unbounded text-[#F5F5F5] font-medium rounded-md hover:bg-gray-900 transition text-[15px] lg:text-[40px]">
            Test Your Samples
          </button>
        </div>
      </div>
    </section>
  );
};
export default CTA;