'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionContainer from '@/Component/Layout/SectionContainer'

const buttonVariants = {
  primary:
    'inline-flex items-center justify-center rounded-full bg-[#F1813B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d96d2b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1813B]',
  secondary:
    'inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
}

const Herosection = ({ heading, para, titles = [], buttons = [], theme = 'dark' }) => {
  const computedTitles = useMemo(() => titles.filter(Boolean), [titles])
  const [activeTitleIndex, setActiveTitleIndex] = useState(0)

  useEffect(() => {
    if (!computedTitles.length) return

    const interval = setInterval(() => {
      setActiveTitleIndex((index) => (index + 1) % computedTitles.length)
    }, 3200)

    return () => clearInterval(interval)
  }, [computedTitles])

  const isDark = theme === 'dark'

  return (
    <section
      className={`relative isolate overflow-hidden ${
        isDark ? 'bg-neutral-950 text-white' : 'bg-neutral-100 text-neutral-900'
      }`}
    >
      <div className="absolute inset-0 -z-10 h-full w-full">
        <spline-viewer
          url="https://prod.spline.design/HmOuhtKFDx2G8L3W/scene.splinecode"
          className="h-full w-full"
        ></spline-viewer>
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/30'
              : 'bg-gradient-to-t from-white via-white/90 to-transparent'
          }`}
        />
      </div>

      <SectionContainer className="relative flex min-h-[70vh] flex-col justify-center gap-10 py-20 lg:py-28">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F1813B]">
            QuantumCrafters Studio
          </p>
          <h1 className="text-balance text-4xl font-unbounded font-bold leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-[#F1813B]">{heading}</span>
            {computedTitles.length > 0 && (
              <span className="relative ml-2 inline-flex min-h-[2.5rem] flex-col overflow-hidden align-top sm:min-h-[3rem]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={computedTitles[activeTitleIndex]}
                    initial={{ opacity: 0, y: '100%' }}
                    animate={{ opacity: 1, y: '0%' }}
                    exit={{ opacity: 0, y: '-100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent"
                  >
                    {computedTitles[activeTitleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            )}
          </h1>
          <p
            className={`text-lg leading-relaxed sm:text-xl ${
              isDark ? 'text-white/80' : 'text-neutral-700'
            }`}
          >
            {para}
          </p>
          {buttons.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 pt-4">
              {buttons.map(({ label, href = '#', variant = 'primary' }, index) => (
                <a key={`${label}-${index}`} href={href} className={buttonVariants[variant] || buttonVariants.primary}>
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </SectionContainer>
    </section>
  )
}

export default Herosection
