"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const SPLINE_SCRIPT_URL = "https://unpkg.com/@splinetool/viewer@1.10.56/build/spline-viewer.js";

const Herosection = ({ heading, para, titles = [], buttons = [] }) => {
    const [titleIndex, setTitleIndex] = useState(0);
    const rotatingTitles = useMemo(() => titles.filter(Boolean), [titles]);

    useEffect(() => {
        if (!rotatingTitles.length) {
            if (titleIndex !== 0) {
                setTitleIndex(0);
            }
            return;
        }

        if (titleIndex >= rotatingTitles.length) {
            setTitleIndex(0);
        }
    }, [rotatingTitles, titleIndex]);

    useEffect(() => {
        if (typeof window === "undefined") {
            return undefined;
        }

        if (window.customElements?.get("spline-viewer")) {
            return undefined;
        }

        const script = document.createElement("script");
        script.src = SPLINE_SCRIPT_URL;
        script.type = "module";
        script.async = true;
        script.dataset.splineViewer = "true";
        document.head.appendChild(script);

        return () => {
            if (script.parentElement) {
                script.parentElement.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        if (!rotatingTitles.length) {
            return undefined;
        }

        const timeoutId = setTimeout(() => {
            setTitleIndex((current) => (current + 1) % rotatingTitles.length);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [rotatingTitles, titleIndex]);

    return (
        <div className="relative h-screen w-full">
            <div className="absolute bottom-0 right-0 z-50 h-[100px] w-[300px] bg-[#ececec]" aria-hidden="true" />

            <div className="absolute inset-0 z-10 px-6 py-4 sm:px-10">
                <div className="flex h-full flex-col justify-center gap-6 text-black sm:w-1/2 lg:w-[60%] xl:w-[65%]">
                    <h1 className="w-full text-4xl font-unbounded font-bold leading-tight tracking-tight md:text-[45px] xl:text-[70px]">
                        <span className="text-spektr-cyan-50">{heading}</span>
                        {rotatingTitles.length ? (
                            <span className="relative mt-2 flex w-full overflow-hidden md:pb-4 md:pt-1">
                                &nbsp;
                                {rotatingTitles.map((title, index) => (
                                    <motion.span
                                        key={title}
                                        className="absolute font-semibold"
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={
                                            titleIndex === index
                                                ? { y: 0, opacity: 1 }
                                                : { y: titleIndex > index ? -150 : 150, opacity: 0 }
                                        }
                                        transition={{ type: "spring", stiffness: 50 }}
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        ) : null}
                    </h1>

                    <motion.p
                        className="text-start font-montserrat text-lg leading-tight lg:text-[17px] xl:w-[90%] xl:text-[19px]"
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
                        transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
                    >
                        {buttons.map(({ label, href }, idx) => (
                            <a
                                key={label ?? idx}
                                href={href ?? "#"}
                                className="rounded-lg bg-[#F1813B] px-6 py-2 font-montserrat font-semibold text-white transition hover:bg-[#d46c2d]"
                            >
                                {label}
                            </a>
                        ))}
                        {!buttons.length ? (
                            <a
                                href="#contact"
                                className="rounded-lg bg-[#F1813B] px-6 py-2 font-montserrat font-semibold text-white transition hover:bg-[#d46c2d]"
                            >
                                Book a Free AI Growth Consultation
                            </a>
                        ) : null}
                    </motion.div>
                </div>
            </div>

            <spline-viewer
                url="https://prod.spline.design/HmOuhtKFDx2G8L3W/scene.splinecode"
                className="relative h-full w-full"
            />
        </div>
    );
};

export default Herosection;
