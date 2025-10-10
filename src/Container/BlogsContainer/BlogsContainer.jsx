'use client'
import React from 'react'

import Footer from '@/components/FooterComponent/Footer'
import BlogList from './ReqresPagination'
import Navbar from '@/components/Navbar'
import HeroSection from '../HeroSection/Herosection'
import { HomeHero, HomeHeromobile } from '@/AllAssets/AllAsssets'


const BlogsContainer = () => {

    const hero_Heading = (<h1 className='font-unbounded text-[55px]  w-[92%]'>
        Empowering Dreams,<br /><span className='text-[72px] font-bold'>
            Building Futures</span>
    </h1>)
    return (
        <>
            <Navbar />
            <HeroSection
                HeroImage={HomeHero}
                element={hero_Heading}
                HeroImageMobile={HomeHeromobile}
                para="At QuantumCrafter Studio, we help you turn passion into a career. Through hands-on learning and expert guidance, we prepare you for real-world success in tech and design."

            />

            <BlogList />
            <Footer />

        </>
    )
}

export default BlogsContainer