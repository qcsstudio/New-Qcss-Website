"use client";

import dynamic from "next/dynamic";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import HerosectionMain from "@/Container/HeroSection/HerosectionMain";
const Footer = dynamic(() => import("@/components/FooterComponent/Footer"), { ssr: false, loading: () => <p></p> });
const AISEOFeatures = dynamic(() => import("@/components/HomeComponent/AISEOFeatures"), { ssr: false, loading: () => <p></p> });
const Brands = dynamic(() => import("@/components/HomeComponent/Brands"), { ssr: false, loading: () => <p></p> });
const Challenges = dynamic(() => import("@/components/HomeComponent/Challenges"), { ssr: false, loading: () => <p></p> });
const Clients = dynamic(() => import("@/components/HomeComponent/Clients"), { ssr: false, loading: () => <p></p> });
const CTA = dynamic(() => import("@/components/HomeComponent/CTA"), { ssr: false, loading: () => <p></p> });
const Features = dynamic(() => import("@/components/HomeComponent/Features"), { ssr: false, loading: () => <p></p> });
// const NextGenTools = dynamic(() => import("@/Component/HomeComponent/NextGenTools"), { ssr: false, loading: () => <p></p> });
const PowerSection = dynamic(() => import("@/components/HomeComponent/PowerSection"), { ssr: false, loading: () => <p></p> });
const Questions = dynamic(() => import("@/components/HomeComponent/Questions"), { ssr: false, loading: () => <p></p> });

const WeSupport = dynamic(() => import("@/components/HomeComponent/WeSupport"), { ssr: false, loading: () => <p></p> });


// Static data imports (keep as is)
import { HomePageFaq } from "@/Data/FaqQuestions/Questions";
import { HomemiddleFeatures, HomerightFeatures } from "@/Data/HomePage/FeaturesData";
import { supportCards } from "@/Data/HomePage/weSupportData";
import { useCalendly } from "@/components/CalendlyBadge/CalendlyBadge";
import HeroSection from "../HeroSection/Herosection";
import { HomeHero, HomeHeromobile } from "@/AllAssets/AllAsssets";




const HomeContainer = () => {

  const titles = [
  "Marketing",
  "Automation",
  "SaaS Solutions"
];

const titles1 = useMemo(() => titles, []);
const [titleNumber, setTitleNumber] = useState(0);

useEffect(() => {
  const timeoutId = setTimeout(() => {
    if (titleNumber === titles.length - 1) {
      setTitleNumber(0);
    } else {
      setTitleNumber(prev => prev +1);
    }
  }, 3000);

  return () => clearTimeout(timeoutId);
}, [titleNumber, titles]);

const hero_Heading = (
  <h1 className="font-unbounded text-[30px]  md:text-[35px] lg:text-[40px] xl:text-[60px]  leading-tight text-white text-center md:text-start ">
    {/* Line 1 */}
    Your Partner in
    <br />

    {/* Line 2 */}
    <span className="text-[35px] md:text-[37px] lg:text-[50px] 2xl:text-[70px] font-bold">
      AI Driven Growth 
    </span>
   

    {/* Line 3 - Animated Titles */}
    <span className="relative inline-flex text-start  px-12 md:px-0  md:overflow-hidden align-baseline text-[35px] md:text-[37px] lg:text-[55px] 2xl:text-[70px] w-full font-bold text-white  ">
         <span >in</span>
         &nbsp;
       <span className="relative  w-full ">
    {titles1.map((title, index) => (
      <motion.span
        key={index}
        className="absolute left-0 top-0 font-semibold w-full text-nowrap"
        initial={{ opacity: 0, x: 100 }}
        animate={
          titleNumber === index
            ? { x: 0, opacity: 1 }
            : { x: titleNumber > index ? -100 : 100, opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 50 }}
      >
        {title}
      </motion.span>
   
    ))}
  </span>
    </span>
  </h1>
);

  return (
    <>
      <Navbar />
      <HeroSection
        HeroImage={HomeHero}
        HeroImageMobile={HomeHeromobile}
        element={hero_Heading}
        para="Crush growth barriers with AI SEO, performance ads, chatbots and web automation crafted by humans, turbo-charged by AI."
        action={useCalendly()}
      />
      <Suspense fallback={<div></div>}>
        <Brands heading="QuantumCrafters: " heading1="The Growth Engine Behind Modern Brands" />

      </Suspense>
      <Suspense fallback={<div></div>}>
        <Challenges heading="The Biggest Challenges We Help You" heading1="Overcome" />

      </Suspense>
      <Suspense fallback={<div></div>}>
        <AISEOFeatures heading="How We Remove Them" heading1="(With Numbers)" />

      </Suspense>

      {/* <NextGenTools /> */}

      <Suspense fallback={<div></div>}>
        <WeSupport cards={supportCards} heading="Startups to Scaleups Here's Who We Support" headingHeight="h-[82px]" />

      </Suspense>
      <Suspense fallback={<div></div>}>
        <PowerSection heading="Double the Power:" heading1="AI Marketing & SaaS Automation" />

      </Suspense>


      <Suspense fallback={<div></div>}>
        <Clients heading="Real Results.Happy Clients."/>

      </Suspense>
      <Suspense fallback={<div></div>}>
        <Features middleFeature={HomemiddleFeatures} rightFeature={HomerightFeatures} />

      </Suspense>
      <Suspense fallback={<div></div>}>
        <CTA />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <Questions FaqData={HomePageFaq} />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>

    </>
  )
}

export default React.memo(HomeContainer)