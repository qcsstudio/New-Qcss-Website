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
      <div className="mt-12 grid gap-10 pb-6 lg:grid-cols-3">
        {data.map((item) => (
          <article
            key={item.title}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
          >
            <div className={`flex flex-col gap-6 p-6 text-white ${item.color}`}>
              <span className="inline-flex w-max rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                {item.label}
              </span>
              <h3 className="text-3xl font-unbounded font-semibold">{item.title}</h3>
              <p className="text-base leading-relaxed text-white/90">{item.desc}</p>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-6 px-6 pb-6 pt-5">
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">{item.title}</p>
                    <p className="text-xs text-neutral-400">{item.badge}</p>
                  </div>
                  <div className="relative h-16 w-28 shrink-0">
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
              <p className="text-sm text-neutral-600 sm:text-base">
                Our {item.title.toLowerCase()} keeps every sprint aligned with measurable outcomes so teams stay focused on the next
                milestone.
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Mission
