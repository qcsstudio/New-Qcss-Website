import React from "react";

const CaseStudyCard = () => {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-[#D9D9D9] sm:flex-row">


      {/* Left Side (Image / Color Block) */}
      <div className="h-56 w-full bg-[#3B1414] sm:h-auto sm:w-1/2"></div>

      {/* Right Side (Content) */}
      <div className="flex w-full flex-col justify-center gap-6 bg-white p-6 sm:w-1/2 sm:p-10">
        {/* Grey Box Placeholder */}
        <div className="h-6 w-24 rounded bg-gray-200"></div>

        {/* Quote */}
        <p className="text-base font-montserrat text-gray-700">
          Black Friday traffic hit 10× and the site didn&apos;t blink—plus our
          team actually slept
        </p>

        {/* Role */}
        <h2 className="text-lg font-unbounded font-semibold text-gray-900">CTO, D2C Brand</h2>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full border-collapse text-left text-sm text-gray-700">
            <thead className="bg-gray-50 font-unbounded text-xs font-semibold uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-3 py-3">Metric</th>
                <th className="px-3 py-3">Before</th>
                <th className="px-3 py-3">90 Days</th>
                <th className="px-3 py-3">180 Days</th>
              </tr>
            </thead>
            <tbody className="font-montserrat text-sm">
              <tr className="border-t border-gray-200">
                <td className="px-3 py-3 text-gray-800">CAC (USD)</td>
                <td className="px-3 py-3">48</td>
                <td className="px-3 py-3">28</td>
                <td className="px-3 py-3">24</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-3 py-3 text-gray-800">Organic Sign-Ups / Mo</td>
                <td className="px-3 py-3">220</td>
                <td className="px-3 py-3">780</td>
                <td className="px-3 py-3">1,100</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-3 py-3 text-gray-800">Lead Response Time</td>
                <td className="px-3 py-3">4 Hours</td>
                <td className="px-3 py-3">&lt;1 min</td>
                <td className="px-3 py-3">&lt;1 min</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-3 py-3 text-gray-800">Content Pieces / Mo</td>
                <td className="px-3 py-3">4</td>
                <td className="px-3 py-3">18</td>
                <td className="px-3 py-3">24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      </div>
    </section>
  );
};

export default CaseStudyCard;
