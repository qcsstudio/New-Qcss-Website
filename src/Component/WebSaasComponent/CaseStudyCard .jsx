import React from "react";
import Heading from "../HeadingComponent/Heading";

const CaseStudyCard = ({ heading, heading1,data }) => {
  return (
    <>


   <div className="px-[72px] mt-20">
      <Heading heading={heading} />
      {heading1 && <Heading heading={heading1} />}

      <div className="bg-[#D9D9D9] p-3">
        <div className="bg-white p-3 flex gap-3 rounded-xl">
          {/* Left Side (Image / Color Block) */}
          <div className="bg-[#3B1414] w-1/2 h-[484px] rounded-xl "></div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center border border-[#D9D9D9] rounded-xl">
            
            {/* Grey Box Placeholder */}
            {data.greyBox && (
              <div className="w-24 h-6 bg-gray-200 rounded mb-4"></div>
            )}

            {/* Quote */}
            {data.quote && (
              <p className="font-unbounded font-light text-[18px] mb-2">
                {data.quote}
              </p>
            )}

            {/* Role */}
            {data.role && (
              <h2 className="font-semibold font-unbounded text-[35px] mb-4">
                {data.role}
              </h2>
            )}

            {/* Table */}
            {data.tableData && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b font-unbounded font-light text-[16px]">
                      <th className="px-2 py-2 text-gray-600 font-semibold">Metric</th>
                      <th className="px-2 py-2 text-gray-600 font-semibold">Before</th>
                      <th className="px-2 py-2 text-gray-600 font-semibold">90 Days</th>
                      <th className="px-2 py-2 text-gray-600 font-semibold">180 Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.tableData.map((row, idx) => (
                      <tr key={idx} className="border-b font-montserrat text-[15px]">
                        <td className="px-2 py-2">{row.metric}</td>
                        <td className="px-2 py-2">{row.before}</td>
                        <td className="px-2 py-2">{row.after90}</td>
                        <td className="px-2 py-2">{row.after180}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CaseStudyCard;
