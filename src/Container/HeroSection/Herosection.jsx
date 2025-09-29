'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion';


const Herosection = ({ heading, para, titles, buttons }) => {

    const titles1 = useMemo(
        () => titles,
        []
    );
    const [titleNumber, setTitleNumber] = useState(0);

    useEffect(() => {
        if (typeof window === "undefined") return
        if (window.customElements?.get("spline-viewer")) return

        const script = document.createElement("script")
        script.src = "https://unpkg.com/@splinetool/viewer@1.10.56/build/spline-viewer.js"
        script.type = "module"
        script.async = true
        script.dataset.splineViewer = "true"
        document.head.appendChild(script)

        return () => {
            if (script.parentElement) {
                script.parentElement.removeChild(script)
            }
        }
    }, [])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);
    return (
        <>
            <div className='w-full h-screen relative'>
                {/* // hide spline mark */}
                <div className='w-[300px] h-[100px]  absolute bottom-0 right-0 bg-[#ececec] z-50'></div>

                <div className='w-full h-full  absolute z-100 ' >
                    <div className='  absolute z-101 top-[20%] px-8 py-3 '>
                        <div className="w-full sm:w-[50%] lg:w-[60%] xl:w-[65%] flex flex-col justify-center text-black sm:mt-[25rem] md:mt-[0rem] min-[320px]:mt-[20rem]  ">

                            <h1 className="text-5xl md:text-[45px] xl:text-[70px] font-unbounded xl:w-4xl tracking-tighter leading-[1.3] w-full font-bold ">
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


                <spline-viewer url="https://prod.spline.design/HmOuhtKFDx2G8L3W/scene.splinecode" className="relative" ></spline-viewer>
            </div>
        </>
    )
}

export default Herosection