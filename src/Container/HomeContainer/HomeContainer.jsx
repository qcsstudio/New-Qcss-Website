import React from "react";
import Navbar from "@/components/Navbar";
import HerosectionMain from "@/Container/HeroSection/HerosectionMain";
import Footer from "@/components/FooterComponent/Footer";
import AISEOFeatures from "@/components/HomeComponent/AISEOFeatures";
import Brands from "@/components/HomeComponent/Brands";
import Challenges from "@/components/HomeComponent/Challenges";
import Clients from "@/components/HomeComponent/Clients";
import CTA from "@/components/HomeComponent/CTA";
import Features from "@/components/HomeComponent/Features";
import PowerSection from "@/components/HomeComponent/PowerSection";
import Questions from "@/components/HomeComponent/Questions";
import WeSupport from "@/components/HomeComponent/WeSupport";
import { HomePageFaq } from "@/Data/FaqQuestions/Questions";
import { HomemiddleFeatures, HomerightFeatures } from "@/Data/HomePage/FeaturesData";
import { supportCards } from "@/Data/HomePage/weSupportData";

const HomeContainer = () => {
  const titles = ["Marketing", "Automation", "SaaS Solutions"];
  const buttons = [
    {
      text: "Book a Free AI Growth Consultation",
      href: "/contactus",
      variant: "primary",
    },
    {
      text: "Explore AI Growth Playbooks",
      href: "#ai-growth-playbooks",
      variant: "secondary",
    },
  ];

  return (
    <>
      <Navbar />
      <HerosectionMain
        heading="Your Partner in AI‑Driven Growth in"
        para="Crush growth barriers with AI SEO, performance ads, chatbots and web automation — crafted by humans, turbo-charged by AI."
        titles={titles}
        buttons={buttons}
      />
      <Brands heading="QuantumCrafters: " heading1="The Growth Engine Behind Modern Brands" />
      <AISEOFeatures heading="How We Remove Them" heading1="(With Numbers)" />
      <WeSupport cards={supportCards} heading="Startups to Scaleups Here's Who We Support" headingHeight="h-[80px]" />
      <PowerSection heading="Double the Power:" heading1="AI Marketing & SaaS Automation" />
      <Challenges heading="The Biggest Challenges We Help You" heading1="Overcome" />
      <Clients />
      <Features middleFeature={HomemiddleFeatures} rightFeature={HomerightFeatures} />
      <CTA />
      <Questions FaqData={HomePageFaq} />
      <Footer />
    </>
  );
};

export default React.memo(HomeContainer);
