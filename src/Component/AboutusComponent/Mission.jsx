'use client'

import React from 'react'
import Image from 'next/image'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'
import { MissionBar, ValuesBar, VisionBar } from '@/AllAssets/AllAsssets'

const data = [
  {
    label: 'Our Company',
    title: 'Mission',
    desc: 'We help startups, agencies, and enterprises use smart tech to generate leads, convert faster with automation, and achieve sustainable growth.',
    badge: 'Present',
    image: MissionBar,
    color: 'bg-[#27CED7]',
  },
  {
    label: 'Our Company',
    title: 'Vision',
    desc: 'A world where every ambitious brand can compete globally—powered by human creativity and intelligent technology.',
    badge: 'Target',
    image: VisionBar,
    color: 'bg-[#2683C6]',
  },
  {
    label: 'Our Company',
    title: 'Values',
    desc: 'Impact-first, human + AI collaboration, and transparent partnerships that keep momentum high and teams aligned.',
    badge: 'Beliefs',
    image: ValuesBar,
    color: 'bg-[#F1813B]',
  },
]

const Mission = () => {
  return (
    <SectionContainer>
      <Heading heading="Mission & Vision" />
      <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
        We are committed to creating an intentional, growth-focused partnership for ambitious teams. Our mission, vision, and values keep us accountable.
      </p>
      <div className="mt-12 grid gap-12 pb-10 lg:grid-cols-3">
        {data.map((item) => (
          <article key={item.title} className="relative overflow-hidden rounded-3xl shadow-md">
            <div className={`flex h-full flex-col gap-6 rounded-3xl p-6 text-white ${item.color}`}>
              <span className="inline-flex w-max rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                {item.label}
              </span>
              <h3 className="text-3xl font-unbounded font-semibold">{item.title}</h3>
              <p className="text-base leading-relaxed text-white/90">{item.desc}</p>
            </div>
            <div className="absolute inset-x-6 -bottom-16 rounded-2xl bg-white p-5 shadow-xl">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">{item.title}</p>
                  <p className="text-xs text-neutral-400">{item.badge}</p>
                </div>
                <div className="relative h-16 w-28">
                  <Image
                    src={item.image}
                    alt={`${item.title} chart`}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 112px, 40vw"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Mission
