'use client'
import React from 'react'
import Heading from '../HeadingComponent/Heading'


const DetailsBenefits = ({ heading, cardData, heading1 }) => {
 return (
        <>
            <div className="container mx-auto px-10 ">
                <Heading heading={heading} heading1={heading1} />
                
             
                <div className="flex justify-between gap-5 ">
                    {cardData?.map((item, index) => (
                            <div key={index}  className="bg-[#F8F8F8] rounded-xl p-4 h-[409px] flex flex-col sm:justify-between  w-full">
                                <div>
                                    <h3 className={` font-semibold text-[25px] md:text-[30px] lg:text-[35px] mb-2 font-unbounded  h-[112px] md:w-full lg:w-[90%] xl:w-[89%] 2xl:w-[72%] w-[85%]`}>{item.heading}</h3>
                                    {
                                        item.time ? <p className={`text-gray-600 text-base md:text-[18px] font-light font-unbounded`}>
                                            {item.time}
                                        </p> : ""
                                    }
                                    <div className='mt-5 '>
                                        {item.cardlist?.map((list, idx) => (
                                            <div key={idx} className='flex flex-col   '>
                                                <div className='flex items-start gap-2'>
                                                    <div className="flex-shrink-0">
                                                    <div className='w-[20px] h-[20px] rounded-full bg-[#F1813B] flex justify-center items-center'>
                                                        <div className='w-[10px] h-[10px] rounded-full bg-[#F9D8C3]' />
                                                    </div>
                                                    </div>
                                                    <div key={idx} className='font-montserrat' dangerouslySetInnerHTML={{ __html: list }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                        {
                                            (item?.metricsData || item?.metricsName) && (
                                                <div className=' mt-5 space-y-4'>
                                                    <h3 className=' w-[180px] text-center  rounded-lg bg-[#E6FFEB] text-[#43A24E] font-unbounded text-[15px]'>
                                                        {item.metricsName}
                                                    </h3>
                                                    <p className='font-montserrat  text-[15px]'>{item.metricsData}</p>
                                                </div>
                                            )
                                        }
                                </div>
                            </div>
                    ))}
                    </div>
               
            </div>
        </>
    )







}

export default DetailsBenefits