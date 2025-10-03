import React from 'react'
import Footer from '@/Component/FooterComponent/Footer'
import Questions from '@/Component/HomeComponent/Questions'
import Navbar from '@/Component/Navbar'
import Strategy from '@/Component/ServiceComponent/Strategy'
import { ProductFaq } from '@/Data/FaqQuestions/Questions'
import { ProductGrowthCard, ProductGrowthCard2 } from '@/Data/ServicePage/Growth'
import { ProductStrategy } from '@/Data/ServicePage/StrategyData'
import { ScrollTimeline } from '@/Component/ProductComponent/ScrollTimeline '
import { ElevatrX_Social_AI, Nova_Chatbot } from '@/Data/ProductPage/Product'
import Herosection3d from '../HeroSection/Herosection3d'
import DetailsBenefits from '@/Component/ProductComponent/DetailsBenefits'

const ProductContainer = () => {
    return (
        <>
            <Navbar />
            <Herosection3d heading="Your 24/7 Growth Duo AI Social & AI Chat, Ready in Days"
                para=" ElevatrX amplifies every post; Nova turns visitors into booked calls. Integrate both in under a week and watch engagement and leads skyrocket—on autopilot."
            // titles={titles}
            // buttons={buttons}

            />
             <Strategy
                heading="Product Snapshot"
                desc="Need Content for this line cos ot looks so empty"
                cards={ProductStrategy}
            />
            <ScrollTimeline heading="Implementation Timeline - " heading1="ElevatrX Social AI" events={ElevatrX_Social_AI} />
            <ScrollTimeline heading="Implementation Timeline - " heading1="Nova Chatbot Funnels" events={Nova_Chatbot} />
           
            <DetailsBenefits heading="ElevatrX - Details & Benefits" cardData={ProductGrowthCard} />
            <DetailsBenefits heading="Nova - Details & Benefits" cardData={ProductGrowthCard2} />
            <Questions FaqData={ProductFaq} />
            <Footer />
        </>
    )
}

export default ProductContainer