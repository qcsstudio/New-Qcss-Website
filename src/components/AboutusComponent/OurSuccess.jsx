import { success } from "@/AllAssets/AllAsssets";
import Image from "next/image";
import React from "react";

const OurSuccess = () => {
  return (
    <>
   <div className="container mx-auto px-10 ">
        <div className="lg:flex flex-col items-center gap-8  md:flex-row  mt-10">
            <div className="w-full lg:w-1/2 space-y-5 text-center md:text-left">
                <h2 className="font-unbounded font-bold text-3xl md:text-[40px]">
                    Our Story the Journey That Shaped Our Success
                </h2>
                <p className="font-montserrat text-base md:text-[18px]">
                    Frustrated by siloed marketing and clunky tech, two friends—a growth marketer and a full-stack engineer—
                    founded QuantumCrafters Studio in 2025. Their vision: blend data-driven marketing with intelligent
                    automation so businesses can grow faster, spend smarter, and work lighter.
                </p>
                <button className="font-montserrat font-bold text-[16px] bg-[#F1813B] px-6 py-2 text-white rounded-lg">
                    Get Started a Project
                </button>
            </div>
            <div className=" w-full  lg:w-1/2 mt-3 lg:mt-0 ">
                <Image
                    src={success}
                    width={559}
                    height={100}
                    alt="success"
                    className="h-auto w-full   object-contain"
                    sizes="(min-width: 768px) 50vw, 100vw"
                />
            </div>
        </div>
        </div>
        </>
    );
};

export default OurSuccess;
