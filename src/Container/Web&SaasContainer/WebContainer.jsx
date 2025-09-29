import Footer from '@/Component/FooterComponent/Footer'
import Questions from '@/Component/HomeComponent/Questions'
import Navbar from '@/Component/Navbar'
import Growth from '@/Component/ServiceComponent/Growth'
import AutomationStack from '@/Component/WebSaasComponent/AutomationStack'
import AutomationTable from '@/Component/WebSaasComponent/AutomationTable'
import CaseStudyCard from '@/Component/WebSaasComponent/CaseStudyCard '
import ComparisonTable from '@/Component/WebSaasComponent/ComparisonTable '
import { WebSaasFaq } from '@/Data/FaqQuestions/Questions'
import { WebSaasAutomationCard, WebsaasGrowthCard, WebSaasSLAsCard } from '@/Data/ServicePage/Growth'
import React from 'react'

const WebContainer = () => {
  return (
    <>
      <Navbar />
      <CaseStudyCard/>
      <AutomationStack heading="Packages & SLAs" cardData={WebSaasSLAsCard} slidesPerView="3"/>
      <AutomationStack heading="Automation Stack 3.0 " heading1="Under the Hood" cardData={WebSaasAutomationCard} slidesPerView="3.5" />
      <Growth heading="Our Step-by-Step System for AI-Powered Growth" cardData={WebsaasGrowthCard} />
      <ComparisonTable heading="Edge Over Platform Agencies" />

      <AutomationTable />
      <Questions FaqData={WebSaasFaq} />
      <Footer />
    </>
  )
}

export default WebContainer