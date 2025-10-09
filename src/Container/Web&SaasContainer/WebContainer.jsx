import Footer from '@/components/FooterComponent/Footer'
import Questions from '@/components/HomeComponent/Questions'
import Navbar from '@/components/Navbar'
import Growth from '@/components/ServiceComponent/Growth'
import AutomationStack from '@/components/WebSaasComponent/AutomationStack'
import AutomationTable from '@/components/WebSaasComponent/AutomationTable'
import CaseStudyCard from '@/components/WebSaasComponent/CaseStudyCard '
import ComparisonTable from '@/components/WebSaasComponent/ComparisonTable '
import Roadmaps from '@/components/WebSaasComponent/Roadmaps'
import { WebSaasFaq } from '@/Data/FaqQuestions/Questions'
import { WebSaasAutomationCard, WebsaasGrowthCard, WebSaasSLAsCard } from '@/Data/ServicePage/Growth'
import { websaastableData } from '@/Data/weeb-saas/TableData'
import React from 'react'
import HeroSection from '../HeroSection/Herosection'
import { HomeHero, HomeHeromobile } from '@/AllAssets/AllAsssets'


const WebContainer = () => {
  const hero_Heading = (<h1 className='font-unbounded text-[30px]  md:text-[35px] lg:text-[40px] xl:text-[60px]  leading-tight text-white text-center md:text-start'>
    Automate Everything <span className='text-[35px] md:text-[37px] lg:text-[50px] 2xl:text-[70px] font-bold'>Convert Faster, Scale Limitlessly.</span>
  </h1>)
  return (
    <>
      <Navbar />
      <HeroSection
        HeroImage={HomeHero}
        HeroImageMobile={HomeHeromobile}
        element={hero_Heading}
        para="AI-ready websites, drag-and-drop workflows, GPT dashboards and containerised SaaS free 60 % of your team’s week and keep you online—even at 2 million users."

      />
      <AutomationTable />
      <AutomationStack heading="Automation Stack 3.0 " heading1="Under the Hood" cardData={WebSaasAutomationCard} slidesPerView="3.5" />
      <ComparisonTable heading="Edge Over Platform Agencies" />
      <Roadmaps heading="Our Step-by-Step System for AI-Powered Growth" cardData={WebsaasGrowthCard} />

      <CaseStudyCard heading="Proof in Numbers" heading1="B2B SaaS CRM - 6  Month Impact" data={websaastableData} />
      <AutomationStack heading="Packages & SLAs" cardData={WebSaasSLAsCard} slidesPerView="3" />


      <Questions FaqData={WebSaasFaq} />
      <Footer />
    </>
  )
}

export default WebContainer