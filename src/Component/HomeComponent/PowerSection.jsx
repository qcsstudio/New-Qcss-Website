import React from 'react'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'
import { IoMdPause } from 'react-icons/io'
import { automation, marketing } from '@/Data/HomePage/PowerSection'

const List = ({ items }) => (
  <ul className="space-y-4">
    {items.map((item) => (
      <li key={item.title} className="flex items-start gap-4">
        <span className="mt-1 text-2xl text-[#F1813B]">
          <IoMdPause aria-hidden />
        </span>
        <div>
          <p className="text-lg font-semibold text-neutral-900">{item.title}</p>
          <p className="text-sm text-neutral-600 sm:text-base">{item.desc}</p>
        </div>
      </li>
    ))}
  </ul>
)

const PowerSection = () => {
  return (
    <SectionContainer>
      <Heading heading="Double the Power: AI Marketing & SaaS Automation" />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-neutral-50 p-8 shadow-sm">
          <h3 className="text-2xl font-unbounded font-bold text-neutral-900 sm:text-3xl">
            AI-Powered Digital Marketing <span className="block text-lg font-medium">(Grow Demand)</span>
          </h3>
          <List items={marketing} />
        </div>
        <div className="rounded-3xl bg-neutral-50 p-8 shadow-sm">
          <h3 className="text-2xl font-unbounded font-bold text-neutral-900 sm:text-3xl">
            Intelligent Web & SaaS Automation <span className="block text-lg font-medium">(Scale Operations)</span>
          </h3>
          <List items={automation} />
        </div>
      </div>
      <div className="mt-10 text-center">
        <a
          href="/contactus"
          className="inline-flex items-center justify-center rounded-full bg-[#F1813B] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#d96d2b]"
        >
          Get My Custom AI Roadmap
        </a>
      </div>
    </SectionContainer>
  )
}

export default PowerSection
