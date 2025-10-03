import React from 'react'

import Navbar from '@/Component/Navbar'
import ProposalForm from '@/Component/ContactusComponent/ProposalForm'
import Map from '@/Component/ContactusComponent/Map'
import Footer from '@/Component/FooterComponent/Footer'
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