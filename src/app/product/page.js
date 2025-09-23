import Footer from '@/Component/FooterComponent/Footer'
import Questions from '@/Component/HomeComponent/Questions'
import Navbar from '@/Component/Navbar'
import Growth from '@/Component/ServiceComponent/Growth'
import Strategy from '@/Component/ServiceComponent/Strategy'
import { ProductFaq } from '@/Data/FaqQuestions/Questions'
import { ProductGrowthCard, ProductGrowthCard2 } from '@/Data/ServicePage/Growth'
import { ProductStrategy } from '@/Data/ServicePage/StrategyData'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <Strategy
        heading="Product Snapshot"
        desc="Need Content for this line cos ot looks so empty"
        cards={ProductStrategy}
      />
      <Growth heading="ElevatrX - Details & Benefits" cardData={ProductGrowthCard} />
      <Growth heading="Nova – Details & Benefits" cardData={ProductGrowthCard2} />
      <Questions FaqData={ProductFaq} />
      <Footer />
    </>
  )
}

export default page