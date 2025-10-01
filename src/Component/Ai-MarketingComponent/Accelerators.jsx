import React from "react";
import Heading from "../HeadingComponent/Heading";

const features = [
  {
    title: "30-Day Sprint",
    desc: "30-Day Sprint Plan delivered after audit.",
  },
  {
    title: "Success Support",
    desc: "Dedicated Success Manager + Slack channel for real-time support.",
  },
  {
    title: "Partner Badges",
    desc: "Certified Partner Badges: Google Premier, Meta Business, AWS Select.",
  },
  {
    title: "Compliance Ready",
    desc: "SOC-2 & GDPR Compliance baked into workflows.",
  },
];

const FeatureCards = ({heading}) => {
  return (
    <div className="px-[72px] mt-20">
        <Heading heading={heading}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`border border-[#D9D9D9] rounded-lg p-6  bg-white transition h-[394px] 
              ${idx % 2 !== 0 ? "mt-10" : "mt-0"}`}
          >
            <h2 className="font-unbounded font-semibold text-[35px] mb-10 mt-5">
              {item.title}
            </h2>
            <p className="font-montserrat text-gray-700 text-[18px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
