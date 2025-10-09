'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HerosectionMain = ({ eyebrow, heading, para, primaryCta }) => {
  const [showSpline, setShowSpline] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShowSpline(true);
          obs.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate w-full overflow-hidden bg-white"
      aria-labelledby="homepage-hero-heading"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F5ECFF]" aria-hidden="true" />
      <div className="absolute -right-40 top-24 hidden h-72 w-72 rounded-full bg-sky-200/30 blur-3xl md:block" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-20 pt-24 sm:px-10 md:flex-row md:items-center md:justify-between lg:gap-24 lg:pb-28 lg:pt-32">
        <div className="max-w-2xl">
          {eyebrow && (
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-600"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            id="homepage-hero-heading"
            className="hero__headline mt-4 text-4xl font-bold leading-[1.1] text-gray-900 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          >
            {heading}
          </motion.h1>
          <motion.p
            className="hero__subheadline mt-6 text-lg leading-relaxed text-gray-700 md:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            {para}
          </motion.p>
          {primaryCta && (
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
            >
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-[#F1813B] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-[#d96f2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1813B]"
              >
                <span aria-hidden="true">{primaryCta.label}</span>
                <span className="sr-only">Get a free growth audit</span>
              </Link>
            </motion.div>
          )}
        </div>
        <div className="relative w-full max-w-lg flex-1">
          <div className="relative h-[320px] rounded-3xl border border-white/40 bg-white/60 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)] backdrop-blur">
            {showSpline ? (
              <spline-viewer
                className="h-full w-full"
                aria-hidden="true"
                url="https://prod.spline.design/HmOuhtKFDx2G8L3W/scene.splinecode"
              ></spline-viewer>
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-sky-200/60 via-white to-sky-400/50">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-sky-800">
                  Agentic AI Visualizer
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HerosectionMain;
