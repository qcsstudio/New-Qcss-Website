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
    <div className="overflow-x-auto w-[90%] mx-auto">
        <Heading heading={heading}/>
      <table className="w-full rounded-xl mt-10 font-unbounded">
        <thead>
          <tr className=" font-medium text-[16px]">
            <th className="text-left p-4 border-b border-[#E3E5E8] font-semibold bg-[#F9FAFB]">Header</th>
            <th className="p-4 text-left  border-[#F1813B] font-semibold bg-[#F1813B] text-white">
              QuantumCrafters
            </th>
            <th className="p-4 text-left border-b border-[#E3E5E8] font-semibold">Dev shop A</th>
            <th className="p-4  text-left border-b border-[#E3E5E8] font-semibold">Dev shop B</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b  border-[#E3E5E8] font-light text-[16px]">
              <td className="p-4 ">{row.header}</td>
              <td className="p-4 ">{row.quantum}</td>
              <td className="p-4 ">{row.devA}</td>
              <td className="p-4 ">{row.devB}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
