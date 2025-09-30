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
    <div className="mx-auto my-12 w-full max-w-7xl px-6 sm:px-8 lg:px-12">
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="w-full border-collapse">
        <thead className="font-unbounded text-lg font-semibold sm:text-xl">
          <tr className="bg-[#F5F5F5] text-gray-900">
            <th className="px-4 py-4 text-left sm:px-6">Bottleneck</th>
            <th className="px-4 py-4 text-left sm:px-6">Automation Fix</th>
            <th className="px-4 py-4 text-left sm:px-6">KPI Uplift</th>
          </tr>
        </thead>
        <tbody className="font-montserrat text-sm text-gray-700 sm:text-base">
          {data.map((row, i) => (
            <tr key={i} className="border-t border-[#F5F5F5]">
              <td className="px-4 py-4 sm:px-6">{row.bottleneck}</td>
              <td className="px-4 py-4 sm:px-6">{row.fix}</td>
              <td className="px-4 py-4 sm:px-6">{row.uplift}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
