'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionContainer from '@/Component/Layout/SectionContainer'
import Heading from '@/Component/HeadingComponent/Heading'

const Strategy = ({ heading, desc, cards, id }) => {
  return (
    <SectionContainer id={id}>
      <Heading heading={heading} />
      <p className="max-w-3xl text-base text-neutral-600 sm:text-lg">{desc}</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {cards?.map((card) => (
          <Link
            href={card.link || '#'}
            key={card.title}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 360px, (min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-neutral-900/70" />
            </div>
            <div className="relative z-10 flex h-full flex-col gap-4 p-6 text-neutral-900 group-hover:text-white">
              <div>
                <span className="text-5xl font-unbounded font-extralight">{card.number}</span>
                <h3 className="mt-2 text-2xl font-unbounded font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 group-hover:text-white/80 sm:text-base">{card.subtitle}</p>
              </div>
              <ul className="mt-4 space-y-3 text-sm sm:text-base">
                {card?.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F1813B] text-xs text-white">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Strategy
