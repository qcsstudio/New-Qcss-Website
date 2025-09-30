'use client'

import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { motion } from 'framer-motion'
import SectionContainer from '@/Component/Layout/SectionContainer'
import { child, container } from '@/Component/HeadingComponent/Animation'

const Questions = ({ FaqData }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const heading = "FAQ It Up! Your curiosity meets our expertise — let's clear things up!"

  return (
    <SectionContainer>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <motion.h2
            className="text-balance text-3xl font-unbounded font-bold leading-tight text-neutral-900 sm:text-4xl"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {heading.split(' ').map((word, index) => (
              <motion.span key={index} variants={child} className="mr-2 inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <p className="text-base text-neutral-600 sm:text-lg">
            We've gathered the essentials right here. Explore our FAQs and find clear answers for your next move.
          </p>
        </div>
        <div className="space-y-4">
          {FaqData?.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <button
                key={item.question}
                type="button"
                onClick={() => toggleAnswer(index)}
                className="w-full rounded-2xl bg-neutral-100 p-5 text-left transition hover:bg-neutral-200"
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-semibold text-neutral-900 sm:text-base">{item.question}</span>
                  <span className="mt-1 text-neutral-600">{isOpen ? <ImCross className="text-xs" /> : <FaPlus />}</span>
                </div>
                {isOpen && <p className="mt-3 text-sm text-neutral-600 sm:text-base">{item.answer}</p>}
              </button>
            )
          })}
        </div>
      </div>
    </SectionContainer>
  )
}

export default Questions
