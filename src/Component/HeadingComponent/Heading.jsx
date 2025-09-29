"use client";

import React from "react";
import { motion } from "framer-motion";

import { child, container } from "./Animation";

const Heading = ({ heading }) => {
    return (
        <motion.h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-unbounded font-bold my-5 sm:my-4 max-w-full md:max-w-[60%]"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {(heading || "").split(" ").map((word, index) => (
                <motion.span key={index} variants={child} className="mr-2 inline-block">
                    {word}
                </motion.span>
            ))}
        </motion.h2>
    );
};

export default Heading;
