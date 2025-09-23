'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { child, container } from './Animation';



const Heading = ({ heading }) => {
  return (
    <>
      <motion.h2
        className='lg:text-[40px] sm:text-4xl text-3xl  font-unbounded font-bold  my-5 sm:my-4  max-w-[60%]'
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

