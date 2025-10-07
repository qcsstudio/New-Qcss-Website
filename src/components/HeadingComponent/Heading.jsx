'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { child, container } from './Animation';



const Heading = ({ heading, heading1 }) => {
  return (
    <>
    <div className='mt-10 mb-6 '>

  
      <motion.h2
        className='text-3xl sm:text-4xl lg:text-[40px] font-unbounded font-bold   md:text-left w-full '
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
      {
        heading1 && <motion.h2
          className='text-3xl sm:text-4xl lg:text-[40px] font-unbounded font-bold   md:text-left w-full'
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}

        >
          {(heading1 || "").split(" ").map((word, index) => (
            <motion.span key={index} variants={child} className="inline-block mr-2">
              {word}
            </motion.span>
          ))}
        </motion.h2>
      }
  </div>
    </>
  )
}
export default Heading;

