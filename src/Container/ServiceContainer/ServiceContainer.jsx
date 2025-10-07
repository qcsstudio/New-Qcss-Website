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

const ServiceContainer = () => {
    return (
        <>
            <Navbar />
            <HerosectionMain heading="Growth Engines That Turn Clicks Into Customers—And Busywork Into Autopilot"
                para="AI SEO, machine‑learning ads, voice‑first content, Nova chatbots, and no‑code web automation—designed and delivered by one cross‑functional team for faster, smarter scale."
            // titles={titles}
            // buttons={buttons}

            />
            <Strategy
                heading="Choose Your AI Growth Strategy"
                desc="Choose AI Marketing for 3x traffic & 24/7 leads, or Web & SaaS Automation for 2x conversions & scale-ready tech. Your future starts now!"
                cards={ServiceStrategy}
            />
            <WeSupport cards={serviceCards1} heading1="AI Marketing That Never Sleeps" heading="Engine 01 " headingHeight="120"/>
            <WeSupport cards={serviceCards2} heading1="Web & SaaS Automation Built to Scale" heading="Engine 02 " />
            <Growth heading="Our Step-by-Step System for " heading1="AI-Powered Growth" cardData={ServiceGrowthCard} />
            <Questions FaqData={ServiceFaq} />
            <Footer />
        </>
    )
}

export default ServiceContainer