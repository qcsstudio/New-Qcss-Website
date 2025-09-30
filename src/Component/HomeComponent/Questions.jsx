'use client'
// import IconNtext from "@/components/iconNtextComponent/IconNtext";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
// import { container, child } from '@/components/Animation/Animation';
import { motion } from 'framer-motion';
import { child, container } from "../HeadingComponent/Animation";
import { HomePageFaq } from "@/Data/FaqQuestions/Questions";



const Questions = ({FaqData}) => {
    const heading = `FAQ It Up! Your curiosity meets our expertise let's clear things up!`;

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* <IconNtext text="FAQ's" link="/images/Icons/FAQ.png" /> */}
             <div className="mx-auto mb-12 max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-unbounded font-bold text-gray-900 sm:text-4xl lg:text-[40px]">
                        Frequently Asked Question's
                    </h2>
                </div>
            <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-10 px-6 md:flex-row">
                {/* Left Section */}

                <div className="flex w-full flex-col justify-center space-y-4 md:w-1/2 md:pr-6">

                    <motion.h2
                        className={`text-center text-3xl font-unbounded font-bold leading-tight text-gray-900 md:text-left md:text-[38px] lg:text-[44px]`}
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {heading.split(' ').map((word, index) => (
                            <motion.span
                                key={index}
                                variants={child}
                                className="inline-block mr-2"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h2>
                    <p className={`text-center text-base font-montserrat font-medium text-gray-600 md:text-left`}>
                        We've gathered all the important info right here. Explore our FAQs and find the answers you need.
                    </p>
                </div>

                {/* Right Section (FAQ List) */}
                <div className={`w-full space-y-4 font-montserrat md:w-1/2`}>
                    {FaqData?.map((item, index) => (
                        <div key={index} className="rounded-xl bg-gray-100 p-5 transition hover:bg-gray-200/80"
                            onClick={() => toggleAnswer(index)}>
                            <div className=" flex items-center justify-between gap-4">
                                <span className="text-left text-base font-semibold text-gray-800 sm:text-lg">{item.question}</span>
                                <button>
                                    {openIndex === index ? <ImCross className="text-xs" /> : <FaPlus />}
                                </button>
                            </div>
                            {openIndex === index && (
                                <div className="mt-3 text-sm text-gray-600 sm:text-base">{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Questions;
