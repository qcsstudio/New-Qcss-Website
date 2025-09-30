import React from "react";

import Heading from "../HeadingComponent/Heading";
import { FiCheckSquare } from "react-icons/fi";
import Image from "next/image";
import { Checklogo, Crosslogo } from "@/AllAssets/AllAsssets";

const ComparisonTable = ({heading}) => {
  const data = [
    {
      header: "CWV 90+ guarantee",
      quantum: <Image src={Checklogo} alt="image" />,
      devA: <Image src={Checklogo} alt="image"/>,
      devB: <Image src={Crosslogo} alt="image"/>,
    },
    {
      header: "Built-in voice schema",
      quantum:<Image src={Checklogo} alt="image"/>,
      devA: <Image src={Crosslogo} alt="image"/>,
      devB: <Image src={Crosslogo} alt="image"/>,
    },
    {
      header: "RPA & workflow studio",
      quantum: "No-Code",
      devA: "Add-on $$",
      devB: <Image src={Crosslogo} alt="image"/>,
    },
    {
      header: "GPT insights layer",
      quantum: "Native",
      devA: <Image src={Crosslogo} alt="image"/>,
      devB: <Image src={Crosslogo} alt="image"/>,
    },
    {
      header: "SOC-2 pipeline templates",
      quantum: "Ready",
      devA: <Image src={Crosslogo} alt="image"/>,
      devB: "Partial",
    },
  ];

  return (
    <div className="mx-auto my-16 w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Heading heading={heading}/>
      <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="w-full font-unbounded">
        <thead className="bg-[#F9FAFB] text-xs font-semibold uppercase tracking-wide text-gray-500 sm:text-sm">
          <tr>
            <th className="p-4 text-left">Header</th>
            <th className="p-4 text-left text-white" style={{backgroundColor: "#F1813B"}}>
              QuantumCrafters
            </th>
            <th className="p-4 text-left">Dev shop A</th>
            <th className="p-4 text-left">Dev shop B</th>
          </tr>
        </thead>
        <tbody className="font-montserrat text-sm text-gray-700 sm:text-base">
          {data.map((row, idx) => (
            <tr key={idx} className="border-t border-[#E3E5E8]">
              <td className="p-4 font-unbounded font-medium text-gray-900">{row.header}</td>
              <td className="p-4">{row.quantum}</td>
              <td className="p-4">{row.devA}</td>
              <td className="p-4">{row.devB}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
