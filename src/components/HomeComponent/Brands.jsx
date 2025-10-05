import { BrandsData } from '@/Data/HomePage/BrandsData'
import Image from 'next/image'
import React from 'react'
import { IoMdPause } from "react-icons/io";
import Heading from '../HeadingComponent/Heading';


const Brands = ({heading,heading1}) => {
    return (
        <>
       
      <div className="container mx-auto px-10 ">
     <Heading heading={heading} heading1={heading1}/>
        {/* Heading */}

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
          {BrandsData.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-[#F8F8F8] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.heading}
                className="h-52 w-full object-cover"
              />
              <div className="flex flex-1 flex-col justify-between px-6 pb-6 pt-5 text-gray-900">
                <div>
                  <h3 className="text-2xl font-unbounded font-semibold sm:text-[28px]">{item.heading}</h3>
                  <div className="mt-5 flex items-start gap-3">
                    <span className="mt-1 text-2xl text-[#F1813B]">
                      <IoMdPause />
                    </span>
                    <p className="text-sm font-montserrat text-gray-700 sm:text-base">
                      {item.para}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </>
    )
}

export default Brands
