import React from 'react'

import Navbar from '@/components/Navbar'
import ProposalForm from '@/components/ContactusComponent/ProposalForm'
import Map from '@/components/ContactusComponent/Map'
import Footer from '@/components/FooterComponent/Footer'
import RecaptchaProvider from '@/providers/RecaptchaProvider'
import HeroSection from '../HeroSection/Herosection'
import { HomeHero, HomeHeromobile } from '@/AllAssets/AllAsssets'

const ContactusContainer = () => {
   const hero_Heading = (<h1 className='font-unbounded text-[30px]  md:text-[35px] lg:text-[40px] xl:text-[60px]  leading-tight text-white text-center md:text-start'>
    Let’s Connect & <br/><span className='text-[35px] md:text-[37px] lg:text-[50px] 2xl:text-[70px] font-bold'>Craft the Future, Together!</span>
  </h1>)
  return (
    <>
      <RecaptchaProvider>
       <Navbar/>
        <HeroSection
                   HeroImage={HomeHero}
                   HeroImageMobile={HomeHeromobile}
                   element={hero_Heading}
                   para="Talk to us over the phone or simply drop us an email to discuss your projects."
           
                 />
        <ProposalForm />

        <Map />
        <Footer />
      </RecaptchaProvider>
    </>
  )
}

export default ContactusContainer