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
import { HomeHero } from "@/AllAssets/AllAsssets";




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
      setTitleNumber(titleNumber + 1);
    }
  }, 3000);

  return () => clearTimeout(timeoutId);
}, [titleNumber, titles]);

const hero_Heading = (
  <h1 className="font-unbounded lg:text-[40px] xl:text-[60px] lg:w-full xl:w-[92%] 2xl:w-full leading-tight">
    {/* Line 1 */}
    Your Partner in
    <br />

    {/* Line 2 */}
    <span className="text-[50px] 2xl:text-[74px] font-bold">
      AI Driven Growth in
    </span>
   

    {/* Line 3 - Animated Titles */}
    <span className="relative inline-flex overflow-hidden align-baseline lg:text-[55px] 2xl:text-[75px]  font-bold text-white  w-[82%] h-full ms-4">
         &nbsp;
      {titles1.map((title, index) => (
        <motion.span
          key={index}
          className="absolute font-semibold"
          initial={{ opacity: 0, y: "-100%" }}
          animate={
            titleNumber === index
              ? { y: 0, opacity: 1 }
              : { y: titleNumber > index ? -150 : 150, opacity: 0 }
          }
          transition={{ type: "spring", stiffness: 60 }}
        >
          {title}
        </motion.span>
      ))}
    </span>
  </h1>
);


  return (
    <>
      <Navbar />
      <HeroSection
        HeroImage={HomeHero}
        element={hero_Heading}
        para="Crush growth barriers with AI SEO, performance ads, chatbots and web automation crafted by humans, turbo-charged by AI."
        action={useCalendly()}
      />
      {/* <HerosectionMain
        heading="Your Partner in AI‑Driven Growth in"
        para="Crush growth barriers with AI SEO, performance ads, chatbots and web automation — crafted by humans, turbo-charged by AI."
        titles={titles}
        buttons={buttons}
        action ={useCalendly()}
      /> */}
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
        <Clients />

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