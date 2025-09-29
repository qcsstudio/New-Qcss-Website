"use client";
import { MissionBar, ValuesBar, VisionBar } from "@/AllAssets/AllAsssets";
import Image from "next/image";
import React from "react";

const data = [
    {
        color: "bg-[#27CED7]",
        label: "Our Company",
        title: "Mission",
        desc: "We help startups, agencies, and enterprises use smart tech to generate leads, convert faster with automation, and achieve sustainable growth.",
        smallTitle: "Mission",
        smallSubtitle: "Present",
        image:MissionBar
       
    },
    {
        color: "bg-[#2683C6]",
        label: "Our Company",
        title: "Vision",
        desc: "A world where every ambitious brand can compete globally—powered by human creativity and intelligent technology.",
        smallTitle: "Vision",
        smallSubtitle: "Target",
        image:VisionBar
        
    },
    {
        color: "bg-[#F1813B]",
        label: "Our Company",
        title: "Values",
        desc: "Impact-First drives revenue, CAC, or hours saved. Human AI blends intuition and learning. Transparency, innovation, partnership ensure success.",
        smallTitle: "Values",
        smallSubtitle: "Beliefs",
        image:ValuesBar
       
    },
];

export default function Mission() {
    return (
        <>
            <div className="px-6 md:px-[72px] my-10 ">
                <h2 className="text-3xl md:text-[40px] font-bold font-unbounded text-[#000000]">
                   Mission & Vision
                </h2>
                <p className="mt-2 text-[18px] font-montserrat text-[#000000]  ">
                    We work to create most attractive & meaningful place for small businesses. Our Team always ready to help You
                </p>

                <div className="mt-8 flex flex-col gap-8 md:flex-row md:justify-center md:gap-10 md:p-10">
                    {data.map((item, idx) => (
                        <div key={idx} className={`relative w-full md:w-1/3 pb-8 rounded-xl shadow-md ${item.color}`}>
                            {/* Main Card */}
                            <div
                                className={` rounded-xl p-6 text-white `}
                            >
                                <span className="text-[16px] bg-black/20 px-3 py-1 rounded-md font-montserrat">
                                    {item.label}
                                </span>
                                <h2 className="text-[35px] font-semibold font-unbounded mt-4">{item.title}</h2>
                                <p className="mt-3 text-[18px] leading-relaxed font-montserrat ">{item.desc}</p>
                            </div>

                            {/* Small Overlapping Card */}
                            <div className="mt-6 mx-6 bg-white p-4 shadow-lg md:absolute md:mt-0 md:mx-0 md:-bottom-20 md:-right-8">
                                <div className="flex justify-between gap-5 items-center">
                                    <div>
                                        <h3 className="font-semibold text-[35px] font-unbounded text-[#7F7F7F]">
                                            {item.smallTitle}
                                        </h3>
                                        <p className="text-xs text-[#7F7F7F] font-montserrat">{item.smallSubtitle}</p>
                                    </div>
                                    {/* Mini bar chart mock */}
                                    <div className="flex items-end gap-1 ">
                                        <Image src={item.image} width={100} height={100} className="w-full h-full "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
