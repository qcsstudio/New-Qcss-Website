import React from 'react'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'

const columns = ['QuantumCrafters', 'Typical Platform Agency']

const rows = [
  {
    label: 'Response Time',
    values: ['Slack war-room, <30 mins', 'Ticket queue, 24-48 hrs'],
  },
  {
    label: 'Stack Ownership',
    values: ['Full build + infra ops', 'No code access'],
  },
  {
    label: 'Automation Coverage',
    values: ['Marketing, product, CX', 'Ads & landing pages only'],
  },
  {
    label: 'Data Visibility',
    values: ['Unified lake + live dashboards', 'Manual reports, CSV handoffs'],
  },
  {
    label: 'Scaling Support',
    values: ['SRE + QA pods on demand', 'Third-party escalation'],
  },
]

const ComparisonTable = ({ heading }) => {
  return (
    <SectionContainer>
      <Heading heading={heading} />
      <div className="mt-10 overflow-x-auto rounded-3xl border border-neutral-200 shadow-sm">
        <table className="min-w-[640px] w-full table-fixed text-left text-sm sm:text-base">
          <thead className="bg-neutral-50 font-unbounded text-base text-neutral-900 sm:text-lg">
            <tr>
              <th className="px-6 py-4">What You Get</th>
              {columns.map((column) => (
                <th key={column} className="px-6 py-4 text-center">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {rows.map((row) => (
              <tr key={row.label} className="bg-white">
                <td className="px-6 py-4 font-medium text-neutral-900">{row.label}</td>
                {row.values.map((value, index) => (
                  <td
                    key={`${row.label}-${index}`}
                    className={`px-6 py-4 text-center ${index === 0 ? 'font-semibold text-[#F1813B]' : 'text-neutral-600'}`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionContainer>
  )
}

export default ComparisonTable
