"use client"
import { useContext } from 'react'
import React from 'react'

import { CandidateDataContext } from '@/context/CandidateDataContext'
import Footer from '@/components/FooterComponent/Footer'
import Navbar from '@/components/Navbar'
import InterviewStudentForm from '@/components/InterviewComponent/InterviewSudentForm'

const InterviewContainer = () => {

const {  showTest } = useContext(CandidateDataContext);

  return (  
    <div> 
        <Navbar/>
        <InterviewStudentForm/>
        <Footer/>
    </div>
  )
}

export default InterviewContainer
