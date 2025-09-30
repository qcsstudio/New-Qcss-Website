import React from 'react'
import Navbar from '@/Component/Navbar'
import Herosection from '../HeroSection/Herosection'
import AISEOFeatures from '@/Component/HomeComponent/AISEOFeatures'
import NextGenTools from '@/Component/HomeComponent/NextGenTools'
import Brands from '@/Component/HomeComponent/Brands'
import WeSupport from '@/Component/HomeComponent/WeSupport'
import PowerSection from '@/Component/HomeComponent/PowerSection'
import Challenges from '@/Component/HomeComponent/Challenges'
import Clients from '@/Component/HomeComponent/Clients'
import Features from '@/Component/HomeComponent/Features'
import CTA from '@/Component/HomeComponent/CTA'
import Questions from '@/Component/HomeComponent/Questions'
import Footer from '@/Component/FooterComponent/Footer'
import { supportCards } from '@/Data/HomePage/weSupportData'
import { HomemiddleFeatures, HomerightFeatures } from '@/Data/HomePage/FeaturesData'
import { HomePageFaq } from '@/Data/FaqQuestions/Questions'

const HomeContainer = () => {
  const rotatingTitles = ['Marketing', 'Automation', 'SaaS Solutions']
  const heroButtons = [
    {
      label: 'Book a Free AI Growth Consultation',
      href: '/contactus',
      variant: 'primary',
    },
    {
      label: 'Explore Our Services',
      href: '/service',
      variant: 'secondary',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="bg-white text-neutral-900">
        <Herosection
          heading="Your Partner in AI‑Driven Growth in"
          para="Crush growth barriers with AI SEO, performance ads, chatbots, and web automation — crafted by humans and turbo-charged by AI."
          titles={rotatingTitles}
          buttons={heroButtons}
        />
        <AISEOFeatures />
        <NextGenTools />
        <Brands />
        <WeSupport cards={supportCards} heading="Startups to Scaleups — Here's Who We Support" />
        <PowerSection />
        <Challenges />
        <Clients />
        <Features middleFeature={HomemiddleFeatures} rightFeature={HomerightFeatures} />
        <CTA />
        <Questions FaqData={HomePageFaq} />
      </main>
      <Footer />
    </>
  )
}

export default HomeContainer
