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
            <section className="mx-auto my-12 w-full max-w-7xl px-6 sm:px-8 lg:px-12">
                <h2 className="text-3xl font-unbounded font-bold text-gray-900 sm:text-4xl lg:text-[40px]">
                   Mission & Vision
                </h2>
                <p className="mt-2 text-sm font-montserrat text-gray-600 sm:text-base">
                    We work to create most attractive & meaningful place for small businesses. Our Team always ready to help You
                </p>

                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {data.map((item, idx) => (
                        <div key={idx} className={`relative flex h-full flex-col overflow-hidden rounded-2xl shadow-md ${item.color}`}>
                            {/* Main Card */}
                            <div
                                className="rounded-2xl p-6 text-white"
                            >
                                <span className="inline-block rounded-md bg-black/20 px-3 py-1 text-xs font-montserrat uppercase tracking-wide">
                                    {item.label}
                                </span>
                                <h2 className="mt-4 text-2xl font-unbounded font-semibold sm:text-[32px]">{item.title}</h2>
                                <p className="mt-3 text-sm font-montserrat leading-relaxed text-white/90 sm:text-base">{item.desc}</p>
                            </div>

                            {/* Small Overlapping Card */}
                            <div className="mx-6 -mt-6 rounded-xl bg-white p-4 shadow-lg md:-mt-10 md:self-end">
                                <div className="flex items-center justify-between gap-5">
                                    <div>
                                        <h3 className="text-2xl font-unbounded font-semibold text-[#7F7F7F] sm:text-[28px]">
                                            {item.smallTitle}
                                        </h3>
                                        <p className="text-xs font-montserrat uppercase tracking-wide text-[#7F7F7F]">{item.smallSubtitle}</p>
                                    </div>
                                    {/* Mini bar chart mock */}
                                    <div className="flex items-end gap-1">
                                        <Image src={item.image} width={100} height={100} className="h-16 w-auto object-contain" alt={`${item.title} chart`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
