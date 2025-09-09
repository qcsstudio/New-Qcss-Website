import { automation, marketing } from "@/Data/HomePage/PowerSection";
import React from "react";
import { IoMdPause } from "react-icons/io";

export default function PowerSection() {


    return (
        <>
            <div className="px-[72px] mt-20">   
                {/* Heading */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-[40px] font-bold font-unbounded ">
                        Double the Power: <br />
                        <span className="text-black">AI Marketing & SaaS Automation</span>
                    </h2>
                </div>

                {/* Two Columns */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {/* Left box */}
                    <div className="bg-gray-50 rounded-2xl p-5 shadow-sm">
                        <h3 className="text-[35px] font-bold mb-6 font-unbounded">
                            AI-Powered Digital <br/>Marketing{" "}
                            <span className=" text-[25px] font-medium">(Grow Demand)</span>
                        </h3>
                        <ul className="space-y-4">
                            {marketing.map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <span className="text-[#F1813B]  text-2xl"> <IoMdPause /></span>
                                    <div>
                                        <p className="font-semibold font-montserrat text-[20px]">{item.title}</p>
                                        <p className="font-montserrat text-[15px]">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right box */}
                    <div className="bg-gray-50 rounded-2xl p-5 shadow-sm">
                        <h3 className="text-[35px] font-bold mb-6 font-unbounded">
                            Intelligent Web & SaaS <br/>Automation{" "}
                            <span className="  text-[25px] font-medium">(Scale Operations)</span>
                        </h3>
                        <ul className="space-y-4">
                            {automation.map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <span className="text-[#F1813B] text-2xl"> <IoMdPause /></span>
                                    <div>
                                            <p className="font-semibold font-montserrat text-[20px]">{item.title}</p>
                                        <p className="font-montserrat text-[15px]">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Button */}
                <div className="text-center">
                    <button className="bg-[#F1813B] text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition font-montserrat">
                        Get My Custom AI Roadmap
                    </button>
                </div>
            </div>
        </>
    );
}
