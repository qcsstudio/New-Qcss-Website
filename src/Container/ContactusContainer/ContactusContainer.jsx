import React from 'react'

import Navbar from '@/components/Navbar'
import ProposalForm from '@/components/ContactusComponent/ProposalForm'
import Map from '@/components/ContactusComponent/Map'
import Footer from '@/components/FooterComponent/Footer'
import RecaptchaProvider from '@/providers/RecaptchaProvider'

const ContactusContainer = () => {
  return (
    <>
      <RecaptchaProvider>
       <Navbar/>
        <ProposalForm />

        <Map />
        <Footer />
      </RecaptchaProvider>
    </>
  )
}

export default ContactusContainer