import { BrandsData } from '@/Data/HomePage/BrandsData'
import Image from 'next/image'
import React from 'react'
import { IoMdPause } from "react-icons/io";


const Brands = () => {
    return (
        <>
            <div className="px-[72px]">
      {/* Heading */}
      <div className=" mb-12">
        <h2 className="text-3xl md:text-[40px] font-bold font-unbounded text-[#000000]">
          QuantumCrafters: <br />
          <span className="text-black">The Growth Engine Behind Modern Brands</span>
        </h2>
        <p className="mt-4 text-[20px] font-montserrat font-semibold text-[#000000]">
          We're not just another agency. We're your AI-native growth partner.
        </p>
        <p className="mt-2 text-[18px] font-montserrat text-[#000000]  ">
          At QuantumCrafters Studio, we blend human creativity with AI precision to help
          brands grow faster, work smarter, and scale effortlessly. From startups chasing
          traction to enterprises optimizing every touchpoint we turn digital chaos into
          automated clarity.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {BrandsData.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition bg-[#F8F8F8] p-[20px]"
          >
            <Image
              src={item.image}
              alt="brandimage"
              // alt={item.title}
              className="w-full h-48 object-cover rounded-2xl"
            />
            <div className="text-[#000000] py-4">
              <h3 className="text-[35px] font-semibold font-unbounded mb-2">{item.heading}</h3>
                <div className="mt-8 rounded-lg  flex">
                  <p className="text-[#F1813B] text-3xl leading-none">
                    <IoMdPause />
                  </p>
                  <p
                    className={`text-[#0F0F0F] text-left text-sm mt-4 ms-3 font-medium font-montserrat`}
                  >
                    {item.para}
                  </p>
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