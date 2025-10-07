import React from 'react'
import Navbar from '@/components/Navbar'
import CareerJobsComponent from '@/components/CareerJobsComponent/CareerJobsComponent'
import Footer from '@/components/FooterComponent/Footer'

const CareerContainer = () => {
  return (
    <>
           <Navbar/>
        <CareerJobsComponent />     
        <Footer />
    </>
  )
}

export default CareerContainer