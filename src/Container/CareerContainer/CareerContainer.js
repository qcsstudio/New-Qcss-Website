import React from 'react'
import Navbar from '@/components/Navbar'
import CareerJobsComponent from '@/components/CareerJobsComponent/CareerJobsComponent'
import Footer from '@/components/FooterComponent/Footer'
import HeroSection from '../HeroSection/Herosection'
import { HomeHero, HomeHeromobile } from '@/AllAssets/AllAsssets'

const CareerContainer = () => {
   const hero_Heading = (<h1 className='font-unbounded text-[55px]  w-[92%]'>
  Become a part of <br /><span className='text-[72px] font-bold'>
      QCS Family</span>
</h1>)

  return (
    <>
           <Navbar/>
            <HeroSection
                                       HeroImage={HomeHero}
                                       element={hero_Heading}
                                       HeroImageMobile={HomeHeromobile}
                                       para="At QuantumCrafter Studio, we’re not just building IT solutions we’re shaping the future of digital experiences. From software development and UI/UX design to data driven marketing and innovative institutional solutions, our team thrives on collaboration, creativity, and continuous learning."
                       
                                   />
        <CareerJobsComponent />     
        <Footer />
    </>
  )
}

export default CareerContainer