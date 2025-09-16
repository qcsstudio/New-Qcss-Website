import Footer from '@/Component/FooterComponent/Footer'
import AISEOFeatures from '@/Component/HomeComponent/AISEOFeatures'
import Brands from '@/Component/HomeComponent/Brands'
import Challenges from '@/Component/HomeComponent/Challenges'
import Clients from '@/Component/HomeComponent/Clients'
import CTA from '@/Component/HomeComponent/CTA'
import Features from '@/Component/HomeComponent/Features'
import HeroSection from '@/Component/HomeComponent/HeroSection'
import NextGenTools from '@/Component/HomeComponent/NextGenTools'
import PowerSection from '@/Component/HomeComponent/PowerSection'
import Questions from '@/Component/HomeComponent/Questions'
import WeSupport from '@/Component/HomeComponent/WeSupport'
import React from 'react'

const HomeContainer = () => {
  return (
    <>
    <AISEOFeatures/>
    <NextGenTools/>
    <div className=''>
    {/* <HeroSection/> */}
    <Brands/>
    <WeSupport/>
    <PowerSection/>
    <Challenges/>
    <Clients/>
    <Features/>
    <CTA/>
    </div>
    <Questions/>
    <Footer/>
    </>
  )
}

export default HomeContainer