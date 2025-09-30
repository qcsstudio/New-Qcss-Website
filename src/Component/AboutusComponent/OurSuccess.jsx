import { success } from "@/AllAssets/AllAsssets";
import Image from "next/image";
import React from "react";

const OurSuccess = () => {
    return (
        <section className="mx-auto my-12 flex w-full max-w-7xl flex-col-reverse items-center gap-10 px-6 sm:px-8 lg:px-12 md:flex-row">
            <div className="w-full space-y-5 text-center md:w-1/2 md:text-left">
                <h2 className="text-3xl font-unbounded font-bold text-gray-900 sm:text-4xl lg:text-[40px]">
                    Our Story the Journey That Shaped Our Success
                </h2>
                <p className="text-sm font-montserrat text-gray-600 sm:text-base">
                    Frustrated by siloed marketing and clunky tech, two friends—a growth marketer and a full-stack engineer—
                    founded QuantumCrafters Studio in 2025. Their vision: blend data-driven marketing with intelligent
                    automation so businesses can grow faster, spend smarter, and work lighter.
                </p>
                <button className="rounded-lg bg-[#F1813B] px-6 py-3 font-montserrat text-sm font-semibold text-white transition hover:bg-[#d46f2c]">
                    Get Started a Project
                </button>
            </div>
            <div className="flex w-full justify-center md:w-1/2">
                <Image
                    src={success}
                    width={559}
                    height={100}
                    alt="success"
                    className="h-auto w-full max-w-[559px] object-contain"
                    sizes="(min-width: 768px) 50vw, 100vw"
                />
            </div>
        </section>
    );
};

export default OurSuccess;
