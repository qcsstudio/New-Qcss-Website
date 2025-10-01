"use client";
import React from "react";
import Image from "next/image";

import Heading from "../HeadingComponent/Heading";
import Link from "next/link";

export default function Strategy({ heading, desc, cards }) {


    return (
        <>
            <section className="mx-auto mt-16 w-full max-w-7xl px-6 sm:px-8 lg:px-12">
                <Heading heading={heading} />
                <p className="text-sm font-montserrat text-gray-600 sm:text-base">{desc}</p>
                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {cards?.map((card, idx) => (
                        <Link
                            href={card.link || "#"}
                            key={idx}
                            className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Background Image on Hover */}
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                />
                            </div>

                            {/* Dark Overlay */}
                            {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div> */}

                            {/* Content */}
                            <div className="relative z-10 flex h-full flex-col justify-between gap-6 p-6">
                                <div className="space-y-3 group-hover:text-white">
                                    <h2 className="text-4xl font-unbounded font-light text-gray-900 group-hover:text-white sm:text-[48px]">{card.number}</h2>
                                    <h3 className="text-2xl font-unbounded font-semibold text-gray-900 group-hover:text-white sm:text-[30px]">{card.title}</h3>
                                    <p className="text-sm font-montserrat text-gray-600 group-hover:text-white sm:text-base">{card.subtitle}</p>
                                </div>

                                <ul className="space-y-2">
                                    {card?.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-montserrat text-gray-700 transition group-hover:text-white sm:text-base">
                                            <div className='mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#F1813B]'>
                                                <div className='h-2.5 w-2.5 rounded-full bg-[#F9D8C3]' />
                                            </div> {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
