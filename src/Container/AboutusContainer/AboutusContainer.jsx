import React from 'react'
import Navbar from '@/Component/Navbar'
import Footer from '@/Component/FooterComponent/Footer'
import CTA from '@/Component/HomeComponent/CTA'
import Features from '@/Component/HomeComponent/Features'
import Questions from '@/Component/HomeComponent/Questions'
import ClientWins from '@/Component/AboutusComponent/ClientWins'
import IndustryImpact from '@/Component/AboutusComponent/IndustryImpact'
import Mission from '@/Component/AboutusComponent/Mission'
import OurSuccess from '@/Component/AboutusComponent/OurSuccess'
import TeamGrid from '@/Component/AboutusComponent/Team'
import Herosection from '../HeroSection/Herosection'
import { Aboutusindustries } from '@/Data/Aboutus/IndustryImpact'
import { AboutusFaq } from '@/Data/FaqQuestions/Questions'
import { AboutusMiddle, AboutusRight } from '@/Data/HomePage/FeaturesData'

const AboutusContainer = () => {
  const heroButtons = [
    { label: 'Meet the Team', href: '#team', variant: 'primary' },
    { label: 'View Case Studies', href: '/service#case-studies', variant: 'secondary' },
  ]

  return (
    <>
      <Navbar />
      <main className="bg-white text-neutral-900">
        <Herosection
          heading="Building the Future Today, With Human Creativity & AI Precision"
          para="We combine human creativity and AI precision to help businesses make smarter decisions, build stronger experiences, and ship faster."
          buttons={heroButtons}
        />
        <ClientWins />
        <TeamGrid id="team" />
        <OurSuccess />
        <Mission />
        <IndustryImpact cardsData={Aboutusindustries} />
        <Features middleFeature={AboutusMiddle} rightFeature={AboutusRight} />
        <CTA />
        <Questions FaqData={AboutusFaq} />
      </main>
      <Footer />
    </>
  )
}

export default AboutusContainer
