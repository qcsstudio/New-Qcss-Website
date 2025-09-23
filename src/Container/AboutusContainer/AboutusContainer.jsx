import ClientWins from '@/Component/AboutusComponent/ClientWins'
import IndustryImpact from '@/Component/AboutusComponent/IndustryImpact'
import Mission from '@/Component/AboutusComponent/Mission'
import OurSuccess from '@/Component/AboutusComponent/OurSuccess'
import TeamGrid from '@/Component/AboutusComponent/Team'
import Footer from '@/Component/FooterComponent/Footer'
import CTA from '@/Component/HomeComponent/CTA'
import Features from '@/Component/HomeComponent/Features'
import Questions from '@/Component/HomeComponent/Questions'
import Navbar from '@/Component/Navbar'
import { Aboutusindustries } from '@/Data/Aboutus/IndustryImpact'
import { AboutusFaq } from '@/Data/FaqQuestions/Questions'
import { AboutusMiddle, AboutusRight } from '@/Data/HomePage/FeaturesData'
import React from 'react'

const AboutusContainer = () => {
  return (
    <>
    <Navbar/>
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