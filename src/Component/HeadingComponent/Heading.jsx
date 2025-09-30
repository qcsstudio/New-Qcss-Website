'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { child, container } from './Animation'
import { cn } from '@/lib/utils'

const Heading = ({ heading, className = '', align = 'left' }) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <motion.h2
      className={cn(
        'text-balance text-3xl font-unbounded font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-[40px] my-6',
        alignmentClass,
        className,
      )}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {(heading || '').split(' ').map((word, index) => (
        <motion.span key={index} variants={child} className="mr-2 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.h2>
  )
}

export default Heading

