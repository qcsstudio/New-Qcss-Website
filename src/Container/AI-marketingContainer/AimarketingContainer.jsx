import FeatureCards from '@/Component/Ai-MarketingComponent/Accelerators'
import HelptoGrow from '@/Component/Ai-MarketingComponent/HelptoGrow'
import Footer from '@/Component/FooterComponent/Footer'
import Questions from '@/Component/HomeComponent/Questions'
import Navbar from '@/Component/Navbar'
import Growth from '@/Component/ServiceComponent/Growth'
import AutomationStack from '@/Component/WebSaasComponent/AutomationStack'
import CaseStudyCard from '@/Component/WebSaasComponent/CaseStudyCard '
import { AimarketingFaq } from '@/Data/FaqQuestions/Questions'
import {  AimarketingGrowthCard, AimarketingGrowthCard2, AiMarketingSLAsCard } from '@/Data/ServicePage/Growth'
import { aimarketingtableData } from '@/Data/weeb-saas/TableData'
import React from 'react'
import HeroSection from '../HeroSection/Herosection'

const AimarketingContainer = () => {
    return (
        <>
            <Navbar />
            <HeroSection/>
            <HelptoGrow heading="How We Help You Grow" heading1="Step by Step" />
            <Growth heading="Roadmap to Results" heading1="(Ignite → Elevate)" cardData={AimarketingGrowthCard} />
            <Growth heading="Our Always‑On AI " heading1="Growth Stack" cardData={AimarketingGrowthCard2} />

            <FeatureCards heading="Conversion Accelerators" />
            <CaseStudyCard heading="Proof in Numbers" heading1="B2B SaaS CRM - 6  Month Impact" data={aimarketingtableData} />
            <AutomationStack
                heading="Investment Packages &"
                heading1="Guarantees"
                para="If KPI targets aren’t met within pilot period, next month is free."
                cardData={AiMarketingSLAsCard}
                slidesPerView="3"
            />
            <Questions FaqData={AimarketingFaq} />
            <Footer />



        </>
    )
}

export default AimarketingContainer