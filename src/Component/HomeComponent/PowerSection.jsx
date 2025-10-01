import { automation, marketing } from "@/Data/HomePage/PowerSection";
import React from "react";
import { IoMdPause } from "react-icons/io";

export default function PowerSection() {


    return (
        <>
            <section className="w-full bg-white">
                <div className="mx-auto mt-16 max-w-7xl px-6 sm:px-8 lg:px-12">
                    {/* Heading */}
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-unbounded font-bold text-gray-900 sm:text-4xl lg:text-[40px]">
                            Double the Power:
                            <br />
                            <span className="text-gray-900">AI Marketing & SaaS Automation</span>
                        </h2>
                    </div>

                    {/* Two Columns */}
                    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {[{ data: marketing, title: 'AI-Powered Digital Marketing', subtitle: '(Grow Demand)' }, { data: automation, title: 'Intelligent Web & SaaS Automation', subtitle: '(Scale Operations)' }].map((column, columnIndex) => (
                            <div key={columnIndex} className="flex h-full flex-col rounded-2xl bg-gray-50 p-6 shadow-sm">
                                <h3 className="text-2xl font-unbounded font-semibold text-gray-900 sm:text-[32px]">
                                    {column.title}
                                    <span className="block text-lg font-montserrat font-medium text-gray-600 sm:text-xl">{column.subtitle}</span>
                                </h3>
                                <ul className="mt-6 space-y-5">
                                    {column.data.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="mt-1 text-xl text-[#F1813B]">
                                                <IoMdPause />
                                            </span>
                                            <div>
                                                <p className="text-lg font-montserrat font-semibold text-gray-900 sm:text-xl">{item.title}</p>
                                                <p className="mt-1 text-sm font-montserrat text-gray-600 sm:text-base">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="mt-12 text-center">
                        <button className="inline-flex items-center justify-center rounded-lg bg-[#F1813B] px-6 py-3 font-montserrat text-sm font-semibold text-white shadow-md transition hover:bg-[#d46f2c] sm:text-base">
                            Get My Custom AI Roadmap
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
