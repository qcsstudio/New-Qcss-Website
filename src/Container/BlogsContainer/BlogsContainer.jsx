'use client'
import React from 'react'

import Footer from '@/components/FooterComponent/Footer'
import BlogList from './ReqresPagination'
import Navbar from '@/components/Navbar'


const BlogsContainer = () => {
    return (
        <>
            <Navbar/>
            
            <BlogList/>
            <Footer/>
          
        </>
    )
}

export default BlogsContainer