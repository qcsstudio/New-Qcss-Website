import React from 'react'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'

const rows = [
  { bottleneck: '3 s loads kill conversions', fix: 'Headless CWV 90+ site', uplift: '2× CR' },
  { bottleneck: 'Manual CRM & reporting', fix: 'Workflow + RPA bots', uplift: '–60% hours' },
  { bottleneck: 'Downtime on traffic spikes', fix: 'Auto-scaling K8s + CDN', uplift: '99.99% uptime' },
  { bottleneck: 'Data silos across tools', fix: 'API-first lake + GPT dashboard', uplift: '90% faster insight' },
  { bottleneck: 'Compliance fire drills', fix: 'SOC-2 & GDPR by design', uplift: 'Audit passes first time' },
]

const AutomationTable = () => {
  return (
    <SectionContainer>
      <Heading heading="Where Automation Hits the Bottom Line" />
      <div className="mt-8 overflow-x-auto rounded-3xl border border-neutral-200 shadow-sm">
        <table className="min-w-[640px] w-full table-fixed text-left text-sm text-neutral-700 sm:text-base">
          <thead className="bg-neutral-50 font-unbounded text-base text-neutral-900 sm:text-lg">
            <tr>
              <th className="px-6 py-4">Bottleneck</th>
              <th className="px-6 py-4">Automation Fix</th>
              <th className="px-6 py-4">KPI Uplift</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {rows.map((row) => (
              <tr key={row.bottleneck} className="bg-white">
                <td className="px-6 py-4">{row.bottleneck}</td>
                <td className="px-6 py-4">{row.fix}</td>
                <td className="px-6 py-4 font-semibold text-[#F1813B]">{row.uplift}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionContainer>
  )
}

export default AutomationTable
