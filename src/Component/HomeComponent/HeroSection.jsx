import { HeroBackground, HeroBackground2 } from '@/AllAssets/AllAsssets'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <>
    <div className='relative'>
        <div className='relative'>
        <Image src={HeroBackground2} alt='HeroBackground' className='w-full h-screen absolute  z-20' />
        <Image src={HeroBackground} alt='HeroBackground' className='w-full h-screen absolute  z-10' />

        </div>

    </div>
    
    </>
  )
}

export default HeroSection