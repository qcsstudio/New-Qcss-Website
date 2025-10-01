import React from 'react';

const AISEOFeatures = () => {
  const features = [
    {
      title: "AI SEO + AEO",
      description: "Up to 3x+ organic traffic via Google & voice answers",

      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Workflow Automation",
      description: "Saves teams 60% of manual hours weekly",

      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Seamless Integrations",
      description: "Reduce tool-switching time 50%",

      color: "bg-green-100 text-green-600"
    },
    {
      title: "Performance Ads",
      description: "ML bidding cuts CAC by up to 40% and raises ROAS",

      color: "bg-red-100 text-red-600"
    },
    {
      title: "Conversion-Optimised UX",
      description: "Doubles on-site conversion rates",

      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Geo-Smart SEO",
      description: "Local keyword tuning lifts regional rankings 70%",

      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Chatbot Funnels",
      description: "24/7 chat boosts lead capture 3x+ over static forms",

      color: "bg-pink-100 text-pink-600"
    },
    {
      title: "AI Dashboards",
      description: "Insights ready 90% faster no spreadsheets",

      color: "bg-teal-100 text-teal-600"
    },
    {
      title: "Predictive Targeting",
      description: "CLV climbs 25% as ads focus on high-value users",

      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <>
      <div className="px-6 md:px-[72px] my-10">
        <div className=" mb-16">
          <h1 className="text-4xl font-bold font-unbounded leading-tight text-gray-900 sm:text-5xl  lg:text-[40px]">
            How We Remove Them<br /> (With Numbers)
          </h1>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const isLastColumn = (index + 1) % 3 === 0;
            const isLastRow = index >= features.length - 3;

            return (
              <div
                key={index}
                className={`bg-white   overflow-hidden
          ${!isLastColumn ? "border-r" : ""}
          ${!isLastRow ? "border-b" : ""}
        `}
              >
                <div className='transition-all duration-300 hover:shadow-xl hover:scale-105 '>
                  <div className="px-10 py-8 justify-center items-start">
                    <div className="w-[63%]">
                      <h3 className="mt-4 text-xl font-semibold font-montserrat text-gray-900">
                        {feature.title} :
                      </h3>
                      <p className="mt-2 text-gray-600 text-[15px] font-montserrat">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>



      </div>
    </>
  );
};

export default AISEOFeatures;