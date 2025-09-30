'use client';

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const Herosection = ({ heading, para, titles = [], buttons = [] }) => {
  const resolvedTitles = useMemo(
    () => titles.filter(Boolean),
    [titles]
  )

  const [titleNumber, setTitleNumber] = useState(0)

  useEffect(() => {
    if (!resolvedTitles.length) {
      return undefined
    }

    const timeoutId = setTimeout(() => {
      setTitleNumber((current) => (current + 1) % resolvedTitles.length)
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [resolvedTitles, titleNumber])

  const safeButtons = buttons.filter((button) => button?.text && button?.href)

  return (
    <section
      className="relative isolate overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full flex-col justify-center px-6 py-24 sm:px-12 lg:flex-row lg:items-center lg:py-32">
        <div className="z-10 w-full lg:w-3/5 xl:w-1/2">
          <p className="font-montserrat text-sm uppercase tracking-[0.3em] text-spektr-cyan-50">AI Growth Agency</p>
          <h1 id="hero-heading" className="mt-4 text-4xl font-unbounded font-bold leading-tight text-gray-900 md:text-5xl xl:text-6xl">
            <span className="text-spektr-cyan-50">{heading}</span>{' '}
            <span className="relative block h-[1.2em] overflow-hidden" aria-live="polite">
              {resolvedTitles.map((title, index) => (
                <motion.span
                  key={title}
                  className="absolute inset-0"
                  initial={{ opacity: 0, y: '-100%' }}
                  animate={
                    titleNumber === index
                      ? { opacity: 1, y: '0%' }
                      : { opacity: 0, y: titleNumber > index ? '-120%' : '120%' }
                  }
                  transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {para}
          </motion.p>

          {safeButtons.length > 0 && (
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
            >
              {safeButtons.map(({ text, href, variant }, index) => (
                <Link
                  key={`${text}-${index}`}
                  href={href}
                  className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    variant === 'secondary'
                      ? 'border border-gray-300 bg-white text-gray-900 hover:border-gray-400 focus-visible:outline-gray-400'
                      : 'bg-[#F1813B] text-white shadow-sm hover:bg-[#d46f2c] focus-visible:outline-[#F1813B]'
                  }`}
                  aria-label={text}
                  data-cta={variant === 'secondary' ? 'secondary' : 'primary'}
                >
                  {text}
                </Link>
              ))}
            </motion.div>
          )}
        </div>

        <div className="relative mt-12 flex w-full items-center justify-center lg:mt-0 lg:w-2/5 xl:w-1/2">
          <div className="absolute bottom-0 right-0 h-24 w-40 bg-[#ececec]" aria-hidden="true" />
          <spline-viewer
            url="https://prod.spline.design/HmOuhtKFDx2G8L3W/scene.splinecode"
            className="relative h-[360px] w-full max-w-xl lg:h-[520px]"
            aria-hidden="true"
            tabIndex={-1}
          />
        </div>
      </div>
    </section>
  )
}

export default Herosection

