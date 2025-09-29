import React from "react";

const AISEOFeatures = () => {
    const features = [
        {
            title: "AI SEO + AEO",
            description: "Up to 3x+ organic traffic via Google & voice answers",
        },
        {
            title: "Workflow Automation",
            description: "Saves teams 60% of manual hours weekly",
        },
        {
            title: "Seamless Integrations",
            description: "Reduce tool-switching time 50%",
        },
        {
            title: "Performance Ads",
            description: "ML bidding cuts CAC by up to 40% and raises ROAS",
        },
        {
            title: "Conversion-Optimised UX",
            description: "Doubles on-site conversion rates",
        },
        {
            title: "Geo-Smart SEO",
            description: "Local keyword tuning lifts regional rankings 70%",
        },
        {
            title: "Chatbot Funnels",
            description: "24/7 chat boosts lead capture 3x+ over static forms",
        },
        {
            title: "AI Dashboards",
            description: "Insights ready 90% faster no spreadsheets",
        },
        {
            title: "Predictive Targeting",
            description: "CLV climbs 25% as ads focus on high-value users",
        },
    ];

    return (
        <div className="px-6 md:px-[72px] my-10">
            <div className="mb-16">
                <h1 className="text-4xl font-unbounded font-bold leading-tight text-gray-900 sm:text-5xl lg:text-[40px]">
                    How We Remove Them
                    <br /> (With Numbers)
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => {
                    const isLastColumnLg = (index + 1) % 3 === 0;
                    const isLastRowLg = index >= features.length - 3;
                    const isLastRowMd = index >= features.length - 2;

                    return (
                        <div
                            key={feature.title}
                            className={`overflow-hidden border-gray-200 bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl
                                border-b last:border-b-0
                                ${isLastRowMd ? "md:border-b-0" : "md:border-b"}
                                ${isLastColumnLg ? "lg:border-r-0" : "lg:border-r"}
                                ${isLastRowLg ? "lg:border-b-0" : "lg:border-b"}
                            `}
                        >
                            <div className="flex flex-col justify-center px-6 py-8 md:px-8 lg:px-10">
                                <div className="w-full lg:w-[63%]">
                                    <h3 className="mt-4 font-montserrat text-xl font-semibold text-gray-900">
                                        {feature.title} :
                                    </h3>
                                    <p className="mt-2 font-montserrat text-[15px] text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AISEOFeatures;
