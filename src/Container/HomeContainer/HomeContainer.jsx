"use client";

import dynamic from "next/dynamic";
import React from "react";
const Navbar = dynamic(() => import("@/Component/Navbar"), { ssr: false, loading: () => <p>Loading...</p> });
const Footer = dynamic(() => import("@/Component/FooterComponent/Footer"), { ssr: false, loading: () => <p>Loading...</p> });
const HeroSection = dynamic(() => import("@/Component/HomeComponent/HeroSection"), { ssr: false, loading: () => <p>Loading...</p> });
const AISEOFeatures = dynamic(() => import("@/Component/HomeComponent/AISEOFeatures"), { ssr: false, loading: () => <p>Loading...</p> });
const Brands = dynamic(() => import("@/Component/HomeComponent/Brands"), { ssr: false, loading: () => <p>Loading...</p> });
const Challenges = dynamic(() => import("@/Component/HomeComponent/Challenges"), { ssr: false, loading: () => <p>Loading...</p> });
const Clients = dynamic(() => import("@/Component/HomeComponent/Clients"), { ssr: false, loading: () => <p>Loading...</p> });
const CTA = dynamic(() => import("@/Component/HomeComponent/CTA"), { ssr: false, loading: () => <p>Loading...</p> });
const Features = dynamic(() => import("@/Component/HomeComponent/Features"), { ssr: false, loading: () => <p>Loading...</p> });
const NextGenTools = dynamic(() => import("@/Component/HomeComponent/NextGenTools"), { ssr: false, loading: () => <p>Loading...</p> });
const PowerSection = dynamic(() => import("@/Component/HomeComponent/PowerSection"), { ssr: false, loading: () => <p>Loading...</p> });
const Questions = dynamic(() => import("@/Component/HomeComponent/Questions"), { ssr: false, loading: () => <p>Loading...</p> });
const WeSupport = dynamic(() => import("@/Component/HomeComponent/WeSupport"), { ssr: false, loading: () => <p>Loading...</p> });
const Herosection = dynamic(() => import("@/Container/HeroSection/Herosection"), { ssr: false, loading: () => <p>Loading...</p> });

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
    {text:"Book a Free AI Growth Consultation"},
    {link:"#"}
  ]
  return (
    <>
      <Navbar />
      <Herosection heading="Your Partner in AI‑Driven Growth in "
        para="Crush growth barriers with AI SEO, performance ads, chatbots and web automation — crafted by humans, turbo‑charged by AI."
        titles={titles}
        buttons={buttons}

    />
      <AISEOFeatures />
      <NextGenTools />
      <div className=''>
        {/* <HeroSection/> */}
        <Brands />
        <WeSupport cards={supportCards} heading="Startups to Scaleups Here's Who We Support" />
        <PowerSection />
        <Challenges />
        <Clients />
        <Features middleFeature={HomemiddleFeatures} rightFeature={HomerightFeatures} />
        <CTA />
      </div>
      <Questions FaqData={HomePageFaq} />
      <Footer />
    </>
  )
}

export default  React.memo(HomeContainer)