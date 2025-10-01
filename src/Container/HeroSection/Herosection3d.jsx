'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { motion} from 'framer-motion';


const Herosection3d = ({ heading, para, titles }) => {

    const titles1 = useMemo(
        () => titles,
        []
    );
    const [titleNumber, setTitleNumber] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles?.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);
    return (
        <>
            <div className='w-full lg:h-screen relative sm:h-[350px]'>
                
                {/* // hide spline mark */}
                <div className='w-[300px] sm:hidden  sm:h-[100px]  absolute bottom-0 right-0 bg-[#ececec] z-50'></div>

                <div className='w-full h-full  absolute z-100 ' >
                    <div className='  absolute z-101 sm:top-0 lg:top-[20%] px-8 py-3 '>
                        <div className="w-full sm:w-[100%] lg:w-[60%] xl:w-[65%] flex flex-col justify-center text-black  md:mt-[0rem] min-[320px]  ">

                            <h1 className="text-5xl md:text-[45px] xs:text-[20px] xl:text-[70px] font-unbounded xl:w-4xl tracking-tighter leading-[1.3] w-full font-bold ">
                                <span className="text-spektr-cyan-50">
                                    {heading}
                                </span>
                                {
                                    titles &&
                                    <span className="relative flex w-full  overflow-hidden  md:pb-4 md:pt-1">
                                        &nbsp;
                                        {titles1.map((title, index) => (
                                            <motion.span
                                                key={index}
                                                className="absolute font-semibold"
                                                initial={{ opacity: 0, y: "-100" }}
                                                transition={{ type: "spring", stiffness: 50 }}
                                                animate={
                                                    titleNumber === index
                                                        ? {
                                                            y: 0,
                                                            opacity: 1,
                                                        }
                                                        : {
                                                            y: titleNumber > index ? -150 : 150,
                                                            opacity: 0,
                                                        }
                                                }
                                            >
                                                {title}
                                            </motion.span>
                                        ))}
                                    </span>
                                }

                            </h1>

                            <motion.p
                                className={`mt-2 text-lg lg:text-[17px] xl:text-[19px] xl:w-[90%] text-start leading-tight font-montserrat`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 1 }}
                            >
                                {para}
                            </motion.p>

                            <motion.div
                                className="mt-4 flex flex-wrap gap-4"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
                            >

                            </motion.div>
                        </div>
                        <button className='bg-[#F1813B]  text-white rounded-lg px-6 py-2'>Book a Free AI Growth Consultation</button>
                    </div>
                </div>


<spline-viewer className='md:block  hidden relative' url="https://prod.spline.design/HmOuhtKFDx2G8L3W/scene.splinecode"></spline-viewer>

                
            </div>
        </>
    )
}

export default Herosection3d