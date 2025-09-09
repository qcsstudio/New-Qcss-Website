import Footer from '@/Component/FooterComponent/Footer'
import Brands from '@/Component/HomeComponent/Brands'
import Challenges from '@/Component/HomeComponent/Challenges'
import CTA from '@/Component/HomeComponent/CTA'
import HeroSection from '@/Component/HomeComponent/HeroSection'
import PowerSection from '@/Component/HomeComponent/PowerSection'
import Questions from '@/Component/HomeComponent/Questions'
import React from 'react'

const HomeContainer = () => {
  return (
    <>
    <div className=''>
    {/* <HeroSection/> */}
    <Brands/>
    <PowerSection/>
    <Challenges/>
    <Questions/>
    <CTA/>
    </div>
    <Footer/>
    </>
  )
}

export default HomeContainer