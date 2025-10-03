"use client";

import dynamic from "next/dynamic";
import React from "react";
const Navbar = dynamic(() => import("@/Component/Navbar"), { ssr: false, loading: () => <p>Loading...</p> });
const Footer = dynamic(() => import("@/Component/FooterComponent/Footer"), { ssr: false, loading: () => <p>Loading...</p> });
const HeroSection3D = dynamic(() => import("@/container/HeroSection/Herosection3d"), { ssr: false, loading: () => <p>Loading...</p> });
const AISEOFeatures = dynamic(() => import("@/Component/HomeComponent/AISEOFeatures"), { ssr: false, loading: () => <p>Loading...</p> });
const Brands = dynamic(() => import("@/Component/HomeComponent/Brands"), { ssr: false, loading: () => <p>Loading...</p> });
const Challenges = dynamic(() => import("@/Component/HomeComponent/Challenges"), { ssr: false, loading: () => <p>Loading...</p> });
const Clients = dynamic(() => import("@/Component/HomeComponent/Clients"), { ssr: false, loading: () => <p>Loading...</p> });
const CTA = dynamic(() => import("@/Component/HomeComponent/CTA"), { ssr: false, loading: () => <p>Loading...</p> });
const Features = dynamic(() => import("@/Component/HomeComponent/Features"), { ssr: false, loading: () => <p>Loading...</p> });
// const NextGenTools = dynamic(() => import("@/Component/HomeComponent/NextGenTools"), { ssr: false, loading: () => <p>Loading...</p> });
const PowerSection = dynamic(() => import("@/Component/HomeComponent/PowerSection"), { ssr: false, loading: () => <p>Loading...</p> });
const Questions = dynamic(() => import("@/Component/HomeComponent/Questions"), { ssr: false, loading: () => <p>Loading...</p> });
const WeSupport = dynamic(() => import("@/Component/HomeComponent/WeSupport"), { ssr: false, loading: () => <p>Loading...</p> });

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
       {/* <div className='w-full h-[70vh] border border-yellow-500'>
        <spline-viewer url="https://prod.spline.design/vaeipBbBSnz7e-mE/scene.splinecode" className="h-[90vh] w-full"/>

        </div> */}

      <HeroSection3D
        heading="Your Partner in AI‑Driven Growth in"
        para="Crush growth barriers with AI SEO, performance ads, chatbots and web automation — crafted by humans, turbo-charged by AI."
        titles={titles}
        buttons={buttons}
      />
      <Brands heading="QuantumCrafters: " heading1="The Growth Engine Behind Modern Brands" />
      <AISEOFeatures heading="How We Remove Them" heading1="(With Numbers)" />
      {/* <NextGenTools /> */}


      <WeSupport cards={supportCards} heading="Startups to Scaleups Here's Who We Support" headingHeight="h-[80px]" />
      <PowerSection heading="Double the Power:" heading1="AI Marketing & SaaS Automation"/>
      <Challenges heading="The Biggest Challenges We Help You" heading1="Overcome"/>
      <Clients />
      <Features middleFeature={HomemiddleFeatures} rightFeature={HomerightFeatures} />
      <CTA />

      <Questions FaqData={HomePageFaq} />

      <Footer />
    </>
  )
}

export default React.memo(HomeContainer)