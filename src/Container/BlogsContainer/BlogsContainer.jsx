'use client'
import React from 'react'

import Footer from '@/Component/FooterComponent/Footer'
import BlogList from './ReqresPagination'
import Navbar from '@/Component/Navbar'


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