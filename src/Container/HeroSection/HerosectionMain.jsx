"use client";
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion';


const HerosectionMain = ({ heading, para, titles = [], buttons = [] }) => {

    const titles1 = useMemo(
        () => titles,
        [titles]
    );
    const [titleNumber, setTitleNumber] = useState(0);

    useEffect(() => {
        if (titles1.length === 0) {
            return undefined;
        }

        const timeoutId = setTimeout(() => {
            if (titleNumber === titles1.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber((prev) => (prev + 1) % titles1.length);
            }
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles1.length]);
    return (
        <>
            <div className='w-full h-[90vh]  lg:h-[90vh] relative '>
                
                {/* // hide spline mark */}
                <div className='w-[300px] md:w-[160px] hidden md:block  sm:h-[70px]  absolute bottom-0 right-0  bg-[#ececec] z-101'></div>

                <div className='w-full h-full  absolute z-100 ' >
                    <div className='  absolute z-101 sm:top-0 lg:top-[20%] px-8 py-3 '>
                        <div className="w-full sm:w-[100%] lg:w-[60%] xl:w-[65%] flex flex-col justify-center text-black  md:mt-[0rem] min-[320px]  ">

                            <h1 className="hero__headline text-4xl md:text-[48px] xs:text-[20px] xl:text-[70px]  font-unbounded xl:w-4xl tracking-tighter leading-[1.3] w-full font-bold ">
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
                                className={`hero__subheadline mt-2 text-lg lg:text-[17px] xl:text-[19px] xl:w-[90%] text-start leading-tight font-montserrat`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 1 }}
                            >
                                {para}
                            </motion.p>

                            <motion.div
                                className="mt-6 flex flex-wrap gap-4"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
                            >
                                {buttons.map((button) => (
                                    <Link
                                        key={button.href}
                                        href={button.href}
                                        className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${button.variant === 'secondary' ? 'bg-white/10 text-white border border-white/30 hover:bg-white/20 focus-visible:outline-white' : 'bg-[#F1813B] text-white hover:bg-[#d87029] focus-visible:outline-[#F1813B]'}`}
                                    >
                                        {button.text}
                                    </Link>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>


<spline-viewer className='md:block hidden relative' aria-hidden="true" url="https://prod.spline.design/HmOuhtKFDx2G8L3W/scene.splinecode"></spline-viewer>


            </div>
        </>
    )
}

export default HerosectionMain
