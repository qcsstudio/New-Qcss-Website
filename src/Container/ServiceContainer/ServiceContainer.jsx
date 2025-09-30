import React from 'react'
import Navbar from '@/Component/Navbar'
import Footer from '@/Component/FooterComponent/Footer'
import Questions from '@/Component/HomeComponent/Questions'
import WeSupport from '@/Component/HomeComponent/WeSupport'
import Growth from '@/Component/ServiceComponent/Growth'
import Strategy from '@/Component/ServiceComponent/Strategy'
import Herosection from '../HeroSection/Herosection'
import { ServiceFaq } from '@/Data/FaqQuestions/Questions'
import { serviceCards1, serviceCards2 } from '@/Data/HomePage/weSupportData'
import { ServiceGrowthCard } from '@/Data/ServicePage/Growth'
import { ServiceStrategy } from '@/Data/ServicePage/StrategyData'

const ServiceContainer = () => {
  const heroButtons = [
    { label: 'Request a Strategy Call', href: '/contactus', variant: 'primary' },
    { label: 'See Product Roadmaps', href: '/product', variant: 'secondary' },
  ]

  return (
    <>
      <Navbar />
      <main className="bg-white text-neutral-900">
        <Herosection
          heading="Growth Engines That Turn Clicks Into Customers — and Busywork Into Autopilot"
          para="AI SEO, machine-learning ads, voice-first content, Nova chatbots, and no-code web automation — delivered by one cross-functional team for faster scale."
          buttons={heroButtons}
        />
        <Strategy
          id="aboutus"
          heading="Choose Your AI Growth Strategy"
          desc="Opt for AI Marketing to triple organic traffic and capture 24/7 leads, or Web & SaaS Automation to double conversions with scale-ready workflows."
          cards={ServiceStrategy}
        />
        <Growth heading="Our Step-by-Step System for AI-Powered Growth" cardData={ServiceGrowthCard} />
        <WeSupport cards={serviceCards1} heading="AI Marketing That Never Sleeps" heading1="Engine 01" />
        <WeSupport cards={serviceCards2} heading="Web & SaaS Automation Built to Scale" heading1="Engine 02" />
        <Questions FaqData={ServiceFaq} />
      </main>
      <Footer />
    </>
  )
}

export default ServiceContainer
