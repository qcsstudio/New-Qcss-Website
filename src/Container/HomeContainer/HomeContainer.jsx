"use client";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HerosectionMain from "@/Container/HeroSection/HerosectionMain";
const Footer = dynamic(() => import("@/components/FooterComponent/Footer"), { ssr: false, loading: () => <p>Loading...</p> });
const AISEOFeatures = dynamic(() => import("@/components/HomeComponent/AISEOFeatures"), { ssr: false, loading: () => <p>Loading...</p> });
const Brands = dynamic(() => import("@/components/HomeComponent/Brands"), { ssr: false, loading: () => <p>Loading...</p> });
const Challenges = dynamic(() => import("@/components/HomeComponent/Challenges"), { ssr: false, loading: () => <p>Loading...</p> });
const Clients = dynamic(() => import("@/components/HomeComponent/Clients"), { ssr: false, loading: () => <p>Loading...</p> });
const CTA = dynamic(() => import("@/components/HomeComponent/CTA"), { ssr: false, loading: () => <p>Loading...</p> });
const Features = dynamic(() => import("@/components/HomeComponent/Features"), { ssr: false, loading: () => <p>Loading...</p> });
// const NextGenTools = dynamic(() => import("@/Component/HomeComponent/NextGenTools"), { ssr: false, loading: () => <p>Loading...</p> });
const PowerSection = dynamic(() => import("@/components/HomeComponent/PowerSection"), { ssr: false, loading: () => <p>Loading...</p> });
const Questions = dynamic(() => import("@/components/HomeComponent/Questions"), { ssr: false, loading: () => <p>Loading...</p> });
const WeSupport = dynamic(() => import("@/components/HomeComponent/WeSupport"), { ssr: false, loading: () => <p>Loading...</p> });

// Static data imports (keep as is)
import { HomePageFaq } from "@/Data/FaqQuestions/Questions";
import { HomemiddleFeatures, HomerightFeatures } from "@/Data/HomePage/FeaturesData";
import { supportCards } from "@/Data/HomePage/weSupportData";

const HomeContainer = () => {

  const titles = [
    "Marketing",
    "Automation",
    "SaaS Solutions"
  ]
  const buttons = [
    {
      text: 'Book a Free AI Growth Consultation',
      href: '/contactus',
      variant: 'primary'
    },
    {
      text: 'Explore AI Growth Playbooks',
      href: '#ai-growth-playbooks',
      variant: 'secondary'
    }
  ]

  return (
    <>
      <Navbar />
      <HerosectionMain
        heading="Your Partner in AI‑Driven Growth in"
        para="Crush growth barriers with AI SEO, performance ads, chatbots and web automation — crafted by humans, turbo-charged by AI."
        titles={titles}
        buttons={buttons}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Brands heading="QuantumCrafters: " heading1="The Growth Engine Behind Modern Brands" />

      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AISEOFeatures heading="How We Remove Them" heading1="(With Numbers)" />

      </Suspense>

      {/* <NextGenTools /> */}

      <Suspense fallback={<div>Loading...</div>}>
        <WeSupport cards={supportCards} heading="Startups to Scaleups Here's Who We Support" headingHeight="h-[80px]" />

      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PowerSection heading="Double the Power:" heading1="AI Marketing & SaaS Automation" />

      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Challenges heading="The Biggest Challenges We Help You" heading1="Overcome" />

      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Clients />

      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Features middleFeature={HomemiddleFeatures} rightFeature={HomerightFeatures} />

      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CTA />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Questions FaqData={HomePageFaq} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>

    </>
  )
}

export default React.memo(HomeContainer)