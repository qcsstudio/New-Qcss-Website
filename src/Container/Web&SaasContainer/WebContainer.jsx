import React from 'react'
import Navbar from '@/Component/Navbar'
import Footer from '@/Component/FooterComponent/Footer'
import Questions from '@/Component/HomeComponent/Questions'
import Growth from '@/Component/ServiceComponent/Growth'
import AutomationStack from '@/Component/WebSaasComponent/AutomationStack'
import AutomationTable from '@/Component/WebSaasComponent/AutomationTable'
import CaseStudyCard from '@/Component/WebSaasComponent/CaseStudyCard'
import ComparisonTable from '@/Component/WebSaasComponent/ComparisonTable'
import Herosection from '../HeroSection/Herosection'
import { WebSaasFaq } from '@/Data/FaqQuestions/Questions'
import { WebSaasAutomationCard, WebsaasGrowthCard, WebSaasSLAsCard } from '@/Data/ServicePage/Growth'

const WebContainer = () => {
  const heroButtons = [
    { label: 'Schedule a Workshop', href: '/contactus', variant: 'primary' },
    { label: 'View Automation Packages', href: '#packages', variant: 'secondary' },
  ]

  return (
    <>
      <Navbar />
      <main className="bg-white text-neutral-900">
        <Herosection
          heading="Scale Operations Without Sacrificing Experience"
          para="From resilient infrastructure to human-like chat funnels, our Web & SaaS automation stack keeps teams fast, secure, and customer-obsessed."
          buttons={heroButtons}
        />
        <CaseStudyCard />
        <AutomationStack id="packages" heading="Packages & SLAs" cardData={WebSaasSLAsCard} />
        <AutomationStack heading="Automation Stack 3.0" heading1="Under the Hood" cardData={WebSaasAutomationCard} />
        <Growth heading="Our Step-by-Step System for AI-Powered Growth" cardData={WebsaasGrowthCard} />
        <ComparisonTable heading="Edge Over Platform Agencies" />
        <AutomationTable />
        <Questions FaqData={WebSaasFaq} />
      </main>
      <Footer />
    </>
  )
}

export default WebContainer
