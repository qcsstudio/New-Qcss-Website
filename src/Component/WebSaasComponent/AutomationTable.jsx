import React from "react";

export default function AutomationTable() {
  const data = [
    {
      bottleneck: "3 s loads kill conversions",
      fix: "Headless CWV 90+ site",
      uplift: "2× CR",
    },
    {
      bottleneck: "Manual CRM & reporting",
      fix: "Workflow + RPA bots",
      uplift: "–60 % hours",
    },
    {
      bottleneck: "Downtime on traffic spikes",
      fix: "Auto-scaling K8s + CDN",
      uplift: "99.99 % uptime",
    },
    {
      bottleneck: "Data silos across tools",
      fix: "API-first lake + GPT dashboard",
      uplift: "90 % faster insight",
    },
    {
      bottleneck: "Compliance fire drills",
      fix: "SOC-2 & GDPR by design",
      uplift: "Audit passes first time",
    },
  ];

  return (
    <div className="overflow-x-auto mt-10  my-10  w-[90%] mx-auto">
      <table className="w-full  rounded-xl overflow-hidden border-collapse">
        <thead className="font-unbounded text-[35px] font-semibold  ">
          <tr className="bg-[#F5F5F5]">
            <th className="px-6 py-4 text-left font-bold  border-r-2 border-white">Bottleneck</th>
            <th className="px-6 py-4 text-left font-bold  border-r-2 border-white">Automation Fix</th>
            <th className="px-6 py-4 text-left font-bold ">KPI Uplift</th>
          </tr>
        </thead>
        <tbody className="font-montserrat text-[15px] ">
          {data.map((row, i) => (
            <tr key={i} className="border-b-2 border-[#F5F5F5]">
              <td className="px-6 py-4 text-gray-800">{row.bottleneck}</td>
              <td className="px-6 py-4 text-gray-800">{row.fix}</td>
              <td className="px-6 py-4 text-gray-800">{row.uplift}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
