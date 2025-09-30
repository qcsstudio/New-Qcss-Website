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
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-unbounded font-bold leading-tight text-gray-900 sm:text-4xl lg:text-[40px]">
              How We Remove Them
              <br /> (With Numbers)
            </h1>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex w-fit items-center justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 text-xl font-montserrat font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm font-montserrat text-gray-600 sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AISEOFeatures;