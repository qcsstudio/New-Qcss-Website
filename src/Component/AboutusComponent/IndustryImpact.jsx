"use client";
import React from "react";


export default function IndustryImpact({ cardsData }) {
    return (
        <div className="px-6 md:px-[72px] my-10  ">
            <h2 className="text-3xl md:text-[40px] font-unbounded font-bold mb-4">Industry Impact</h2>
            <div className="flex gap-5 mt-10">
                {cardsData.map((item, idx) => (
                    <div
                        key={idx}
                        className={`h-[394px] border border-gray-300 rounded-lg shadow-sm px-5 py-6 flex flex-col ${item.position}`}
                    >
                        <h3 className="text-[35px] font-semibold  font-unbounded mb-3">{item.title}</h3>
                        <p className="text-[18px] text-[#000000] font-montserrat leading-relaxed mt-15">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
