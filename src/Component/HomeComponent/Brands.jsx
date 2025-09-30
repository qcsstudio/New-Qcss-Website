import { BrandsData } from '@/Data/HomePage/BrandsData'
import Image from 'next/image'
import React from 'react'
import { IoMdPause } from "react-icons/io";


const Brands = () => {
    return (
        <>
            <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-unbounded font-bold text-gray-900 sm:text-4xl lg:text-[40px]">
            QuantumCrafters:
            <br />
            <span className="text-gray-900">The Growth Engine Behind Modern Brands</span>
          </h2>
          <p className="mt-4 text-base font-montserrat font-semibold text-gray-900 sm:text-lg">
            We're not just another agency. We're your AI-native growth partner.
          </p>
          <p className="mt-3 text-sm font-montserrat text-gray-600 sm:text-base">
            At QuantumCrafters Studio, we blend human creativity with AI precision so brands can grow faster, work smarter, and scale effortlessly. From startups chasing traction to enterprises optimising every touchpoint, we turn digital chaos into automated clarity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
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
    </section>
        </>
    )
}

export default Brands