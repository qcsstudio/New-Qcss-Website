import React from 'react'
import Footer from '@/Component/FooterComponent/Footer'
import Questions from '@/Component/HomeComponent/Questions'
import Navbar from '@/Component/Navbar'
import Growth from '@/Component/ServiceComponent/Growth'
import Strategy from '@/Component/ServiceComponent/Strategy'
import { ProductFaq } from '@/Data/FaqQuestions/Questions'
import { ProductGrowthCard, ProductGrowthCard2 } from '@/Data/ServicePage/Growth'
import { ProductStrategy } from '@/Data/ServicePage/StrategyData'
import { ScrollTimeline } from '@/Component/ProductComponent/ScrollTimeline '
import { ElevatrX_Social_AI, Nova_Chatbot } from '@/Data/ProductPage/Product'

const ProductContainer = () => {
    return (
        <>
            <Navbar />
            <ScrollTimeline heading="Implementation Timeline - " heading1="ElevatrX Social AI" events={ElevatrX_Social_AI}  />
            <ScrollTimeline heading="Implementation Timeline - " heading1="Nova Chatbot Funnels" events={Nova_Chatbot}  />
            <Strategy
                heading="Product Snapshot"
                desc="Need Content for this line cos ot looks so empty"
                cards={ProductStrategy}
            />
            <Growth heading="ElevatrX - Details & Benefits" cardData={ProductGrowthCard} />
            <Growth heading="Nova - Details & Benefits" cardData={ProductGrowthCard2} />
            <Questions FaqData={ProductFaq} />
            <Footer />
        </>
    )
}

export default ProductContainer