import React from 'react'
import Footer from '@/components/FooterComponent/Footer'
import Questions from '@/components/HomeComponent/Questions'
import Navbar from '@/components/Navbar'
import Growth from '@/components/ServiceComponent/Growth'
import Strategy from '@/components/ServiceComponent/Strategy'
import { ServiceFaq } from '@/Data/FaqQuestions/Questions'
import { serviceCards1, serviceCards2 } from '@/Data/HomePage/weSupportData'
import { ServiceGrowthCard } from '@/Data/ServicePage/Growth'
import { ServiceStrategy } from '@/Data/ServicePage/StrategyData'
import HerosectionMain from '../HeroSection/HerosectionMain'
import WeSupport from '@/components/HomeComponent/WeSupport'
import Clients from '@/components/HomeComponent/Clients'
import HeroSection from '../HeroSection/Herosection'
import { HomeHero, HomeHeromobile } from '@/AllAssets/AllAsssets'
import { useCalendly } from "@/components/CalendlyBadge/CalendlyBadge";

const ServiceContainer = () => {
   
    const hero_Heading = (<h1 className='font-unbounded text-[30px]  md:text-[35px] lg:text-[40px] xl:text-[60px]  leading-tight text-white text-center md:text-start'>Growth Engines That Turn Clicks Into Customers—And Busywork Into Autopilot</h1>)
   
    return (
        <>
            <Navbar />
            {/* <HerosectionMain heading="Growth Engines That Turn Clicks Into Customers—And Busywork Into Autopilot"
                para="AI SEO, machine‑learning ads, voice‑first content, Nova chatbots, and no‑code web automation—designed and delivered by one cross‑functional team for faster, smarter scale."
            /> */}
             <HeroSection
                    HeroImage={HomeHero}
                    HeroImageMobile={HomeHeromobile}
                    element={hero_Heading}
                    para="AI SEO, machine‑learning ads, voice‑first content, Nova chatbots, and no‑code web automation—designed and delivered by one cross‑functional team for faster, smarter scale."
                    // action={useCalendly()}
                  />
            <Strategy
                heading="Choose Your AI Growth Strategy"
                desc="Choose AI Marketing for 3x traffic & 24/7 leads, or Web & SaaS Automation for 2x conversions & scale-ready tech. Your future starts now!"
                cards={ServiceStrategy}
            />
            <WeSupport cards={serviceCards1} heading1="AI Marketing That Never Sleeps" heading="Engine 01 " headingHeight="120"/>
            <WeSupport cards={serviceCards2} heading1="Web & SaaS Automation Built to Scale" heading="Engine 02 " />
            <Growth heading="Our Step-by-Step System for " heading1="AI-Powered Growth" cardData={ServiceGrowthCard} />
            <Clients heading="Client Wins & Impact Metrics" />
            <Questions FaqData={ServiceFaq} />
            <Footer />
        </>
    )
}

export default ServiceContainer