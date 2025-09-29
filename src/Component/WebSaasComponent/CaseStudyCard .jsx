import React from "react";

const CaseStudyCard = () => {
  return (
    <div className=" rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden px-[72px] mt-20">
        <div className="bg-[#D9D9D9]">

        
      {/* Left Side (Image / Color Block) */}
      <div className="bg-[#3B1414] w-full md:w-1/2 h-64 md:h-auto rounded-xl md:rounded-r-none"></div>

      {/* Right Side (Content) */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        {/* Grey Box Placeholder */}
        <div className="w-24 h-6 bg-gray-200 rounded mb-4"></div>

        {/* Quote */}
        <p className="text-gray-700 mb-2">
          Black Friday traffic hit 10× and the site didn&apos;t blink—plus our
          team actually slept
        </p>

        {/* Role */}
        <h2 className="font-bold text-lg mb-4">CTO, D2C Brand</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-2 py-2 text-gray-600 font-semibold">Metric</th>
                <th className="px-2 py-2 text-gray-600 font-semibold">Before</th>
                <th className="px-2 py-2 text-gray-600 font-semibold">90 Days</th>
                <th className="px-2 py-2 text-gray-600 font-semibold">180 Days</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-2 py-2 text-gray-800">CAC (USD)</td>
                <td className="px-2 py-2">48</td>
                <td className="px-2 py-2">28</td>
                <td className="px-2 py-2">24</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2 text-gray-800">Organic Sign-Ups / Mo</td>
                <td className="px-2 py-2">220</td>
                <td className="px-2 py-2">780</td>
                <td className="px-2 py-2">1,100</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2 text-gray-800">Lead Response Time</td>
                <td className="px-2 py-2">4 Hours</td>
                <td className="px-2 py-2">&lt;1 min</td>
                <td className="px-2 py-2">&lt;1 min</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-800">Content Pieces / Mo</td>
                <td className="px-2 py-2">4</td>
                <td className="px-2 py-2">18</td>
                <td className="px-2 py-2">24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
