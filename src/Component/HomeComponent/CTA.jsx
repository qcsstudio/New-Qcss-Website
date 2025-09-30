import { cta } from "@/AllAssets/AllAsssets";
import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <section className="relative mx-auto mt-20 w-[90%] max-w-7xl overflow-hidden rounded-2xl bg-[#F4F2F2]">
      {/* Background Image */}
      <Image
        src={cta}
        alt="cta background"
        width={1200}
        height={600}
        className="w-full h-full object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 py-12 sm:px-10 lg:px-16">
        <h2 className="text-2xl font-unbounded font-bold leading-snug text-white sm:text-3xl lg:text-[40px] lg:leading-tight">
          Ready to transform growth with AI native strategies and tech?
        </h2>

        <div className="mt-6 flex flex-wrap gap-4 text-sm sm:text-base">
          <button className="rounded-md bg-[#000000] px-6 py-3 font-unbounded text-sm font-medium text-[#F5F5F5] transition hover:bg-gray-900 sm:px-8">
            Book a Discovery Call
          </button>
          <button className="rounded-md bg-[#000000] px-6 py-3 font-unbounded text-sm font-medium text-[#F5F5F5] transition hover:bg-gray-900 sm:px-8">
            Test Your Samples
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
