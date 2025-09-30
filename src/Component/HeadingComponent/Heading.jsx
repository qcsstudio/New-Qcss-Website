'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { child, container } from './Animation';



const Heading = ({ heading }) => {
  return (
    <>
      <motion.h2
        className='text-3xl sm:text-4xl lg:text-[40px] font-unbounded font-bold leading-tight my-5 sm:my-6 text-center md:text-left md:max-w-3xl'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}

      >
        {(heading || "").split(" ").map((word, index) => (
          <motion.span key={index} variants={child} className="inline-block mr-2">
            {word}
          </motion.span>
        ))}
      </motion.h2>
    </>
  )
}
export default Heading;

