'use client'
import React, { useState } from 'react'
import Heading from '../HeadingComponent/Heading'
import { nextGenTools } from '@/Data/HomePage/nextgentool'
import Image from 'next/image'
import { MdKeyboardArrowRight } from "react-icons/md";

const NextGenTools = ({ heading }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto px-10">
      {/* Heading */}
      <div className="mb-8 md:mb-12">
        <Heading heading={heading} />
      </div>

      {/* Cards Container */}
      <div className="flex justify-evenly flex-wrap gap-6">
        {nextGenTools.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative rounded-[20px] w-[380px] min-h-[420px] overflow-hidden 
              transition-all duration-300 shadow-sm 
              ${hoveredIndex === idx ? "bg-[#F5F7F9]" : "bg-white"}`}
          >
            {/* IMAGE TOP RIGHT (only visible on hover) */}
            {item.image && (
              <div
                className={`absolute top-0 right-0 w-[170px] h-[130px] transition-all duration-500 
                ${hoveredIndex === idx ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={170}
                  height={130}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* ICON (visible only when not hovered) */}
            {item.icon && (
              <div className={`flex justify-start mt-14 transition-all duration-500 
                ${hoveredIndex === idx ? "opacity-0 scale-75" : "opacity-100 scale-50"}`}>
                <div className="w-[150px] h-[150px] ">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={90}
                    height={90}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* TEXT CONTENT */}
            <div className={`transition-all duration-500 h-[250px] ${hoveredIndex === idx ? "px-8  text-left" : "text-left px-8 pt-6 flex flex-col justify-between "}`}>
              
              {/* Title */}
              <h2 className="text-[28px] font-semibold mb-2 font-unbounded">
                {item.name}
              </h2>

              {/* Default State (non-hover) */}
              {hoveredIndex !== idx && (
                <>
                  {item.isComing ? (
                    <h5 className="text-gray-600">{item.isComing}</h5>
                  ) : (
                    <button className="flex items-center justify-start gap-1 mt-3 text-start  ">
                      Learn More <MdKeyboardArrowRight />
                    </button>
                  )}
                </>
              )}

              {/* Hover State Content */}
              <div
                className={`transition-all duration-500 ease-in-out
                  ${hoveredIndex === idx ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <h5 className="text-sm text-gray-600 mb-2">{item.heading}</h5>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <button className="flex items-center justify-center gap-1 mt-3 text-start ">
                  Learn More <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NextGenTools
