import React from 'react'
import Navbar from '@/Component/Navbar'
import Footer from '@/Component/FooterComponent/Footer'
import Questions from '@/Component/HomeComponent/Questions'
import Strategy from '@/Component/ServiceComponent/Strategy'
import Growth from '@/Component/ServiceComponent/Growth'
import Herosection from '../HeroSection/Herosection'
import { ScrollTimeline } from '@/Component/ProductComponent/ScrollTimeline'
import { ProductFaq } from '@/Data/FaqQuestions/Questions'
import { ProductStrategy } from '@/Data/ServicePage/StrategyData'
import { ProductGrowthCard, ProductGrowthCard2 } from '@/Data/ServicePage/Growth'
import { ElevatrX_Social_AI, Nova_Chatbot } from '@/Data/ProductPage/Product'

const ProductContainer = () => {
  const heroButtons = [
    { label: 'Book a Live Demo', href: '/contactus', variant: 'primary' },
    { label: 'Download Product Deck', href: '/assets/product-deck.pdf', variant: 'secondary' },
  ]

  return (
    <>
      <Navbar />
      <main className="bg-white text-neutral-900">
        <Herosection
          heading="Your 24/7 Growth Duo — ElevatrX Social AI & Nova Chatbot"
          para="ElevatrX amplifies every post; Nova turns visitors into booked calls. Launch both in under a week and watch engagement and leads skyrocket on autopilot."
          buttons={heroButtons}
        />
        <ScrollTimeline heading="Implementation Timeline" heading1="ElevatrX Social AI" events={ElevatrX_Social_AI} />
        <ScrollTimeline heading="Implementation Timeline" heading1="Nova Chatbot Funnels" events={Nova_Chatbot} />
        <Strategy heading="Product Snapshot" desc="A quick view into how ElevatrX and Nova work together to power full-funnel growth." cards={ProductStrategy} />
        <Growth heading="ElevatrX — Details & Benefits" cardData={ProductGrowthCard} />
        <Growth heading="Nova — Details & Benefits" cardData={ProductGrowthCard2} />
        <Questions FaqData={ProductFaq} />
      </main>
      <Footer />
    </>
  )
}

export default ProductContainer
