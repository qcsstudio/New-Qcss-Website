import { middleFeatures, rightFeatures } from "@/Data/HomePage/FeaturesData";
import React from "react";

const Features = ({middleFeature,rightFeature}) => {

   

    return (
        <>
            <section className="w-full bg-white">
            <div className="mx-auto my-16 max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Left Section */}
                    <div className="flex w-full flex-col justify-center lg:w-1/2">
                        <div className="max-w-xl space-y-4">
                            <h2 className="text-3xl font-unbounded font-bold text-gray-900 sm:text-4xl lg:text-[40px]">What Makes QuantumCrafters Different</h2>
                            <p className="text-sm font-montserrat text-gray-600 sm:text-base">
                                At QuantumCrafters Studio, we blend human creativity with AI precision to help brands grow faster, work smarter, and scale effortlessly. From startups chasing traction to enterprises optimising every touchpoint, we turn digital chaos into automated clarity.
                            </p>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className="flex w-full flex-col gap-6 border-t border-gray-200 pt-6 sm:border-none sm:pt-0 lg:w-1/4 lg:border-r lg:border-gray-200 lg:pr-6">
                        {middleFeature.map((feature, idx) => (
                            <div key={idx} className="pb-6 last:pb-0 lg:border-b lg:border-gray-200 lg:last:border-b-0">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-montserrat font-semibold text-gray-900 sm:text-xl">{feature.title}</h3>
                                    <p className="text-sm font-montserrat text-gray-600 sm:text-base">{feature.description}</p>
                                </div>
                            </div>

                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex w-full flex-col gap-6 lg:w-1/4 lg:pl-6">
                        {rightFeature.map((feature, idx) => (
                            <div key={idx} className="pb-6 last:pb-0 lg:border-b lg:border-gray-200 lg:last:border-b-0">

                                <div  className="space-y-2">
                                    <h3 className="text-lg font-montserrat font-semibold text-gray-900 sm:text-xl">{feature.title}</h3>
                                    <p className="text-sm font-montserrat text-gray-600 sm:text-base ">{feature.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Features;
