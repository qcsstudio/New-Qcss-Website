import ClientWins from '@/components/AboutusComponent/ClientWins'
import IndustryImpact from '@/components/AboutusComponent/IndustryImpact'
import Mission from '@/components/AboutusComponent/Mission'
import OurSuccess from '@/components/AboutusComponent/OurSuccess'
import TeamGrid from '@/components/AboutusComponent/Team'
import Footer from '@/components/FooterComponent/Footer'
import CTA from '@/components/HomeComponent/CTA'
import Features from '@/components/HomeComponent/Features'

import Questions from '@/components/HomeComponent/Questions'
import Navbar from '@/components/Navbar'
import { Aboutusindustries } from '@/Data/Aboutus/IndustryImpact'
import { AboutusFaq } from '@/Data/FaqQuestions/Questions'
import { AboutusMiddle, AboutusRight } from '@/Data/HomePage/FeaturesData'
import React from 'react'
import Herosection3d from '../HeroSection/Herosection3d'

const AboutusContainer = () => {
  return (
    <>
    <Navbar/>
     <Herosection3d heading="Building the Future Today, With Human Creativity & AI Precision"
        para="Crush growth barriers with AI SEO, performance ads, chatbots and web automation — crafted by humans, turbo‑charged by AI."
        // titles={titles}
        // buttons={buttons}

    />
    <ClientWins/>
    <TeamGrid/>
    <OurSuccess/>
    <Mission/>
    <IndustryImpact cardsData={Aboutusindustries}/>
    <Features middleFeature={AboutusMiddle} rightFeature={AboutusRight}/>
     <CTA/>
    <Questions FaqData={AboutusFaq} />
    <Footer/>
    </>
  )
}

export default AboutusContainer