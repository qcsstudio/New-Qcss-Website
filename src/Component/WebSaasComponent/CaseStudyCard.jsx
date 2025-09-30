import React from 'react'
import SectionContainer from '@/Component/Layout/SectionContainer'

const CaseStudyCard = () => {
  return (
    <SectionContainer className="overflow-hidden rounded-3xl bg-neutral-900 text-white lg:flex lg:p-0">
      <div className="flex-1 bg-[#3B1414]" aria-hidden />
      <div className="flex flex-1 flex-col gap-6 p-8 sm:p-12">
        <span className="inline-flex w-max rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em]">
          Case Study
        </span>
        <p className="text-lg text-white/80 sm:text-xl">
          “Black Friday traffic hit 10× and the site didn’t blink—plus our team actually slept.”
        </p>
        <h2 className="text-xl font-unbounded font-semibold">CTO, D2C Brand</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[480px] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/20 text-xs uppercase tracking-wide text-white/60">
                <th className="px-2 py-2">Metric</th>
                <th className="px-2 py-2">Before</th>
                <th className="px-2 py-2">90 Days</th>
                <th className="px-2 py-2">180 Days</th>
              </tr>
            </thead>
            <tbody className="text-white/80">
              <tr className="border-b border-white/10">
                <td className="px-2 py-3">CAC (USD)</td>
                <td className="px-2 py-3">48</td>
                <td className="px-2 py-3">28</td>
                <td className="px-2 py-3">24</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-2 py-3">Organic Sign-Ups / Mo</td>
                <td className="px-2 py-3">220</td>
                <td className="px-2 py-3">780</td>
                <td className="px-2 py-3">1,100</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-2 py-3">Lead Response Time</td>
                <td className="px-2 py-3">4 Hours</td>
                <td className="px-2 py-3">&lt;1 min</td>
                <td className="px-2 py-3">&lt;1 min</td>
              </tr>
              <tr>
                <td className="px-2 py-3">Content Pieces / Mo</td>
                <td className="px-2 py-3">4</td>
                <td className="px-2 py-3">18</td>
                <td className="px-2 py-3">24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SectionContainer>
  )
}

export default CaseStudyCard
