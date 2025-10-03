'use client'
import React from "react";

export default function HeroSection({ heading, para }) {
  return (
    <>

      {/* <div className="relative overflow-x-hidden">
        <div className=" bg-black text-white rounded-lg  w-[97%] h-[70vh] mx-auto mt-3  ">

          <div className=" absolute -right-2 bottom-0 bg-red-500  shape"></div>
          <div className=" absolute right-0 bottom-0  shape1"></div>




        </div>
      </div> */}

      <div className="bg-black text-white w-[97%] h-[90vh] relative overflow-hidden mx-auto rounded-lg mb-10">
        <div className=" w-[60%] mt-40 ms-10">
         
            <h1  className="font-unbounded text-[55px]  ">{heading}</h1>
          <p className="font-montserrat text-[20px]">{para}</p>
        <button className="bg-[#F1813B] px-6 py-2 text-nowrap rounded-lg mt-10">Book a Discovery Call</button>
        </div>

        <div className="absolute bottom-0 right-0 w-[395px] h-[210px] overflow-hidden">
          <div className="absolute inset-0 bg-white clip-path-main"></div>
          <div className="absolute -bottom-4 -right-[15px] w-full h-full bg-[#D9D9D9] clip-path-overlay"></div>
        </div>


      </div>



    </>

  );
}


{/* <div className="relative overflow-x-hidden">
        <div className=" bg-black text-white rounded-lg  w-[97%] h-[70vh] mx-auto mt-3  ">
          
          <div className=" absolute -right-2 bottom-0 bg-red-500  shape"></div>
          <div className=" absolute right-0 bottom-0  shape1"></div>
          
   
         

        </div>
      </div> */}