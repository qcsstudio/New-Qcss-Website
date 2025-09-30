import React from 'react'
import SectionContainer from '@/Component/Layout/SectionContainer'

const features = [
  {
    title: 'AI SEO + AEO',
    description: 'Up to 3x organic traffic via Google and voice answers.',
  },
  {
    title: 'Workflow Automation',
    description: 'Save up to 60% of manual hours every week with intelligent flows.',
  },
  {
    title: 'Seamless Integrations',
    description: 'Reduce tool-switching by 50% with unified data pipelines.',
  },
  {
    title: 'Performance Ads',
    description: 'Machine learning bidding cuts CAC by up to 40% and raises ROAS.',
  },
  {
    title: 'Conversion-Optimised UX',
    description: 'Double on-site conversion rates with data-led UX decisions.',
  },
  {
    title: 'Geo-Smart SEO',
    description: 'Local keyword tuning lifts regional rankings by as much as 70%.',
  },
  {
    title: 'Chatbot Funnels',
    description: '24/7 conversations capture 3x more leads than static forms.',
  },
  {
    title: 'AI Dashboards',
    description: 'Get insights 90% faster without spreadsheet wrangling.',
  },
  {
    title: 'Predictive Targeting',
    description: 'Focus ad spend on high-value users to lift CLV by 25%.',
  },
]

const AISEOFeatures = () => {
  return (
    <SectionContainer>
      <div className="space-y-6 text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F1813B]">How we deliver</p>
        <h2 className="text-balance text-3xl font-unbounded font-bold text-neutral-900 sm:text-4xl lg:text-[40px]">
          How We Remove Growth Barriers — With Numbers
        </h2>
        <p className="text-base text-neutral-600 sm:text-lg">
          Every engagement is anchored in measurable impact. Here’s what our clients see within the first 90 days.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-neutral-900">{feature.title}</h3>
            <p className="mt-3 flex-1 text-sm text-neutral-600 sm:text-base">{feature.description}</p>
            <span className="mt-6 h-1 w-12 rounded-full bg-[#F1813B] transition group-hover:w-16" aria-hidden />
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default AISEOFeatures
