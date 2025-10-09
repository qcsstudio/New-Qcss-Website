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
import HeroSection from '../HeroSection/Herosection'
import { HomeHero, HomeHeromobile } from '@/AllAssets/AllAsssets'

const AboutusContainer = () => {
  const hero_Heading = (<h1 className='font-unbounded text-[30px]  md:text-[35px] lg:text-[40px] xl:text-[60px]  leading-tight text-white text-center md:text-start'>
    Building the Future Today, <span className='text-[35px] md:text-[37px] lg:text-[50px] 2xl:text-[70px] font-bold'>With Human Creativity & AI Precision</span>
  </h1>)
  return (
    <>
    <Navbar/>
     <HeroSection
            HeroImage={HomeHero}
            HeroImageMobile={HomeHeromobile}
            element={hero_Heading}
            para="Crush growth barriers with AI SEO, performance ads, chatbots and web automation — crafted by humans, turbo‑charged by AI."
    
          />
    <OurSuccess/> 
    <Mission/>
    <TeamGrid/>
    <ClientWins/>
    <IndustryImpact cardsData={Aboutusindustries}/>
    <Features middleFeature={AboutusMiddle} rightFeature={AboutusRight}/>
     <CTA/>
    <Questions FaqData={AboutusFaq} />
    <Footer/>
    </>
  )
}

export default AboutusContainer