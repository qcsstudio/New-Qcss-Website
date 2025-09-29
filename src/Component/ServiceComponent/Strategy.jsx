"use client";
import React from "react";
import Image from "next/image";

import Heading from "../HeadingComponent/Heading";
import Link from "next/link";

export default function Strategy({ heading, desc, cards }) {


    return (
        <>
            <div className="px-[72px] mt-20">
                <Heading heading={heading} />
                <p className="font-montserrat text-[18px]">{desc}</p>
                <div className="flex flex-col md:flex-row gap-6 mt-5">
                    {cards?.map((card, idx) => (
                        <Link
                            href={card.link || "#"}
                            key={idx}
                            className="relative group  w-full  h-[470px] rounded-2xl overflow-hidden  "
                        >
                            {/* Background Image on Hover */}
                            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <Image src={card.image} alt={card.title} fill className="object-cover" />
                            </div>

                            {/* Dark Overlay */}
                            {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div> */}

                            {/* Content */}
                            <div className="relative z-10 p-6 flex flex-col justify-center h-full gap-4">
                                <div className="group-hover:text-white">
                                    <h2 className="text-[60px] font-unbounded font-extralight">{card.number}</h2>
                                    <h3 className="text-[35px] font-unbounded font-semibold">{card.title}</h3>
                                    <p className="text-gray-600 font-montserrat text-[15px] group-hover:text-white">{card.subtitle}</p>
                                </div>

                                <ul className="space-y-2 mt-4">
                                    {card?.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[15px] font-montserrat group-hover:text-white">
                                            <div className='w-[20px] h-[20px] rounded-full bg-[#F1813B] flex justify-center items-center'>
                                                <div className='w-[10px] h-[10px] rounded-full bg-[#F9D8C3]' />
                                            </div> {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
