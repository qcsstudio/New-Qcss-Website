import React from 'react'
import Footer from '@/Component/FooterComponent/Footer'
import Questions from '@/Component/HomeComponent/Questions'
import WeSupport from '@/Component/HomeComponent/WeSupport'
import Navbar from '@/Component/Navbar'
import Growth from '@/Component/ServiceComponent/Growth'
import Strategy from '@/Component/ServiceComponent/Strategy'
import { ServiceFaq } from '@/Data/FaqQuestions/Questions'
import { serviceCards1, serviceCards2 } from '@/Data/HomePage/weSupportData'
import { ServiceGrowthCard } from '@/Data/ServicePage/Growth'
import { ServiceStrategy } from '@/Data/ServicePage/StrategyData'

const ServiceContainer = () => {
    return (
        <>
            <Navbar />
            <Strategy
                heading="Choose Your AI Growth Strategy"
                desc="Choose AI Marketing for 3x traffic & 24/7 leads, or Web & SaaS Automation for 2x conversions & scale-ready tech. Your future starts now!"
                cards={ServiceStrategy}
            />
            <Growth heading="Our Step-by-Step System for AI-Powered Growth" cardData={ServiceGrowthCard} />
            <WeSupport cards={serviceCards1} heading="AI Marketing That Never Sleeps" heading1="Engine 01 " />
            <WeSupport cards={serviceCards2} heading="Web & SaaS Automation Built to Scale" heading1="Engine 02 " />
            <Questions FaqData={ServiceFaq} />
            <Footer />
        </>
    )
}

export default ServiceContainer