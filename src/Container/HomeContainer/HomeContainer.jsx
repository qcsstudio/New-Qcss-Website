import Navbar from '@/Component/Navbar'
import Footer from '@/Component/FooterComponent/Footer'
import AISEOFeatures from '@/Component/HomeComponent/AISEOFeatures'
import Brands from '@/Component/HomeComponent/Brands'
import Challenges from '@/Component/HomeComponent/Challenges'
import Clients from '@/Component/HomeComponent/Clients'
import CTA from '@/Component/HomeComponent/CTA'
import Features from '@/Component/HomeComponent/Features'
import NextGenTools from '@/Component/HomeComponent/NextGenTools'
import PowerSection from '@/Component/HomeComponent/PowerSection'
import Questions from '@/Component/HomeComponent/Questions'
import WeSupport from '@/Component/HomeComponent/WeSupport'
import { HomePageFaq } from '@/Data/FaqQuestions/Questions'
import { HomemiddleFeatures, HomerightFeatures } from '@/Data/HomePage/FeaturesData'
import { supportCards } from '@/Data/HomePage/weSupportData'
import Herosection from '../HeroSection/Herosection'

const HomeContainer = () => {
  const titles = ['Marketing', 'Automation', 'SaaS Solutions']

  const buttons = [
    {
      text: 'Book a Free AI Growth Consultation',
      href: '/contactus',
      variant: 'primary'
    },
    {
      text: 'Explore AI Growth Playbooks',
      href: '#ai-growth-playbooks',
      variant: 'secondary'
    }
  ]

  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="flex flex-col">
        <Herosection
          heading="Your Partner in AI‑Driven Growth in"
          para="Crush growth barriers with AI SEO, performance ads, chatbots and web automation — crafted by humans, turbo-charged by AI."
          titles={titles}
          buttons={buttons}
        />
        <AISEOFeatures />
        <NextGenTools />
        <div>
          {/* <HeroSection/> */}
          <Brands />
          <WeSupport cards={supportCards} heading="Startups to Scaleups Here's Who We Support" />
          <PowerSection />
          <Challenges />
          <Clients />
          <Features middleFeature={HomemiddleFeatures} rightFeature={HomerightFeatures} />
          <CTA />
        </div>
        <Questions FaqData={HomePageFaq} />
      </main>
      <Footer />
    </>
  )
}

export default HomeContainer
