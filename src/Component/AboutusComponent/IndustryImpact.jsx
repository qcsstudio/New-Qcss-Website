"use client";
import React from "react";


export default function IndustryImpact({ cardsData }) {
    const staggerClasses = {
        "md:mt-0": "md:mt-0",
        "md:mt-12": "md:mt-12",
    };

    return (
        <section className="mx-auto my-12 w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl font-unbounded font-bold text-gray-900 sm:text-4xl lg:text-[40px]">Industry Impact</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {cardsData.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex h-full flex-col rounded-2xl border border-gray-200 bg-white px-6 py-8 shadow-sm ${staggerClasses[item.position] ?? ""}`}
                    >
                        <h3 className="text-2xl font-unbounded font-semibold text-gray-900 sm:text-[28px]">{item.title}</h3>
                        <p className="mt-4 text-sm font-montserrat text-gray-600 sm:text-base">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
