'use client'
import React, { useState, useEffect, useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./Cards";
import { Calendar } from "lucide-react";
import Heading from "../HeadingComponent/Heading";



export const ScrollTimeline = ({
    events,
    animationOrder = "sequential",
    cardAlignment = "alternating",
    lineColor = "bg-primary/30",
    progressIndicator = true,
    cardVariant = "default",
    cardEffect = "none",
    parallaxIntensity = 0.2,
    progressLineWidth = 2,
    progressLineCap = "round",
    revealAnimation = "fade",
    className = "",
    connectorStyle = "line",
    perspective = false,
    darkMode = false,
    heading, heading1
}) => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const timelineRefs = useRef([]);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) => {
            const newIndex = Math.floor(v * events.length);
            if (
                newIndex !== activeIndex &&
                newIndex >= 0 &&
                newIndex < events.length
            ) {
                setActiveIndex(newIndex);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, events.length, activeIndex]);

    const getCardVariants = (index) => {
        const baseDelay =
            animationOrder === "simultaneous"
                ? 0
                : animationOrder === "staggered"
                    ? index * 0.2
                    : index * 0.3;

        const initialStates = {
            fade: { opacity: 0, y: 20 },
            slide: {
                x:
                    cardAlignment === "left"
                        ? -100
                        : cardAlignment === "right"
                            ? 100
                            : index % 2 === 0
                                ? -100
                                : 100,
                opacity: 0,
            },
            scale: { scale: 0.8, opacity: 0 },
            flip: { rotateY: 90, opacity: 0 },
            none: { opacity: 1 },
        };

        return {
            initial: initialStates[revealAnimation],
            whileInView: {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                rotateY: 0,
                transition: {
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0.25, 0.1, 0.25, 1.0],
                },
            },
            viewport: { once: false, margin: "-100px" },
        };
    };

    const getConnectorClasses = () => {
        const baseClasses = cn(
            "absolute left-1/2 transform -translate-x-1/2",
            lineColor
        );
        const widthStyle = `w-[${progressLineWidth}px]`;
        switch (connectorStyle) {
            case "dots":
                return cn(baseClasses, "w-1 rounded-full");
            case "dashed":
                return cn(
                    baseClasses,
                    widthStyle,
                    `[mask-image:linear-gradient(to_bottom,black_33%,transparent_33%,transparent_66%,black_66%)] [mask-size:1px_12px]`
                );
            case "line":
            default:
                return cn(baseClasses, widthStyle);
        }
    };

    const getCardClasses = (index) => {
        const baseClasses = "relative z-30 rounded-lg transition-all duration-300";
        const variantClasses = {
            default: "bg-card border border-[#CFCDCD] ",
            elevated: "bg-card border border-border/40 shadow-md",
            outlined: "bg-card/50 backdrop-blur border-2 border-primary/20",
            filled: "bg-primary/10 border border-primary/30",
        };
        const effectClasses = {
            none: "",
            glow: "hover:shadow-[0_0_15px_rgba(var(--primary-rgb)/0.5)]",
            shadow: "hover:shadow-lg hover:-translate-y-1",
            bounce: "hover:scale-[1.03] hover:shadow-md active:scale-[0.97]",
        };
        const alignmentClassesDesktop =
            cardAlignment === "alternating"
                ? index % 2 === 0
                    ? "lg:mr-[calc(50%+20px)]"
                    : "lg:ml-[calc(50%+20px)]"
                : cardAlignment === "left"
                    ? "lg:mr-auto lg:ml-0"
                    : "lg:ml-auto lg:mr-0";
        const perspectiveClass = perspective
            ? "transform transition-transform hover:rotate-y-1 hover:rotate-x-1"
            : "";

        return cn(
            baseClasses,
            variantClasses[cardVariant],
            effectClasses[cardEffect],
            alignmentClassesDesktop,
            "w-full lg:w-[calc(50%-40px)]"
        );
    };

    const labelColors = {
        Setup: {
            bg: "bg-[#FEF5E7]",
            text: "text-[#D8A135]"
        },
        Config: {
            bg: "bg-[#E6FFFA]",
            text: "text-[#43A29F]"
        },
        Training: {
            bg: "bg-[#E3F2FD]",
            text: "text-[#1976D2]"
        },
        Install: {
            bg: "bg-[#E6FFFA]",
            text: "text-[#43A29F]"
        },
        Integration: {
            bg: "bg-[#FAF5FF]",
            text: "text-[#805AD5]"
        },
        Launch: {
            bg: "bg-[#F0FFF4]",
            text: "text-[#38A169]"
        },
        Optimize: {
            bg: "bg-[#FFFAF0]",
            text: "text-[#DD6B20]"
        }
    };


    return (
        <div
            ref={scrollRef}
            className={cn(
                "relative min-h-screen w-full   px-6 md:px-[72px] my-10",
                darkMode ? "bg-background text-foreground" : "",
                className
            )}
        >
            <Heading heading={heading} />
            {
                heading1 && <Heading heading={heading1} />
            }


            <div className="relative px-5 ">
                <div className="relative mx-auto ">
                    <div
                        className={cn(getConnectorClasses(), "h-full absolute top-0 border z-10  sm:hidden")}
                    ></div>

                    {/* === MODIFICATION START === */}
                    {progressIndicator && (
                        <>
                            <motion.div
                                className="absolute top-0 z-10  sm:hidden"
                                style={{
                                    height: progressHeight,
                                    width: progressLineWidth,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    borderRadius:
                                        progressLineCap === "round" ? "9999px" : "0px",
                                    background: `linear-gradient(to bottom, #F5F7F9, #F1813B, #F1813B)`,
                                    boxShadow: `
                    0 0 15px rgba(241,129,59,0.5),
                    0 0 25px rgba(241,129,59,0.3)
                  `,
                                }}
                            />
                            <motion.div
                                className="absolute z-20  sm:hidden" 
                                style={{
                                    top: progressHeight,
                                    left: "50%",
                                    translateX: "-50%",
                                    translateY: "-50%",
                                }}
                            >
                                <motion.div
                                    className="w-5 h-5 rounded-full "
                                    style={{
                                        background:
                                            "radial-gradient(circle, rgba(241,129,59,0.8) 0%, rgba(241,180,120,0.5) 40%, rgba(241,129,59,0) 70%)",
                                        boxShadow: `
                      0 0 15px 4px rgba(241, 129, 59, 0.6),
                      0 0 25px 8px rgba(241, 180, 120, 0.4),
                      0 0 40px 15px rgba(241, 129, 59, 0.2)
                    `,
                                    }}
                                    animate={{
                                        scale: [1, 1.3, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </motion.div>
                        </>
                    )}
                    {/* === MODIFICATION END === */}

                    <div className="relative z-20">
                        {events.map((event, index) => {
                            const yOffset = useTransform(
                                smoothProgress,
                                [0, 1],
                                [parallaxIntensity * 100, -parallaxIntensity * 100]
                            );
                            return (
                                <div
                                    key={event.id || index}
                                    ref={(el) => {
                                        timelineRefs.current[index] = el;
                                    }}
                                    className={cn(
                                        "relative flex items-center mb-5 ",
                                        "flex-col lg:flex-row",
                                        cardAlignment === "alternating"
                                            ? index % 2 === 0
                                                ? "lg:justify-start"
                                                : "lg:flex-row-reverse lg:justify-start"
                                            : cardAlignment === "left"
                                                ? "lg:justify-start"
                                                : "lg:flex-row-reverse lg:justify-start"
                                    )}
                                >
                                    <div                    // circles
                                        className={cn(
                                            "absolute top-1/2 transform -translate-y-1/2 z-30",
                                            "left-1/2 -translate-x-1/2  sm:hidden  "
                                        )}
                                    >
                                        <motion.div
                                            className={cn(
                                                "w-6 h-6 rounded-full border-4 bg-background flex items-center justify-center",
                                                index <= activeIndex
                                                    ? "border-primary"
                                                    : "border bg-card"
                                            )}
                                            animate={
                                                index <= activeIndex
                                                    ? {
                                                        scale: [1, 1.3, 1],
                                                        boxShadow: [
                                                            "0 0 0px rgba(240, 160, 111, 0)",
                                                            "0 0 12px rgba(240, 160, 111, 0.6)",
                                                            "0 0 0px rgba(240, 160, 111, 0)",
                                                        ],
                                                    }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 0.8,
                                                repeat: Infinity,
                                                repeatDelay: 4,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    </div>
                                    <motion.div
                                        className={cn(getCardClasses(index), "mt-12 lg:mt-0 ")}
                                        variants={getCardVariants(index)}
                                        initial="initial"
                                        whileInView="whileInView"
                                        viewport={{ once: false, margin: "-100px" }}
                                        style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
                                    >
                                        {/* =========== cards ================== */}
                                        <Card className="bg-background ">
                                            <CardContent className="pb-6  ">
                                                <div className="flex items-center justify-between ">
                                                    <h3 className="text-[56px] font-unbounded font-semibold bg-gradient-to-b from-orange-200 to-white bg-clip-text text-transparent">
                                                        {event.no}
                                                    </h3>
                                                    <p className={`px-3 py-1 rounded-lg font-unbounded font-light text-[12px] 
                                                                    ${labelColors[event.label]?.bg || "bg-gray-100"} 
                                                                    ${labelColors[event.label]?.text || "text-gray-600"}`}>
                                                        {event.label}
                                                    </p>

                                                </div>

                                                <h2 className="text-muted-foreground text-[35px] font-semibold font-unbounded  w-[70%] mb-2">
                                                    {event.Milestone}
                                                </h2>
                                                <p className="text-[#F1813B] font-unbounded font-light text-[12px]">OUTCOME</p>

                                                <p className="text-muted-foreground font-montserrat text-[18px] bg-[#F8F8F8] p-2 rounded-xl border-l-4 border-[#F1813B] mt-3">
                                                    {event.Outcome}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
