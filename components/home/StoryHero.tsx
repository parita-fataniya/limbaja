"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeaderControl } from "@/context/HeaderControlContext";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const slides = [
    {
        id: 0,
        type: "welcome",
        title: "Welcome to Limbaja Energy",
        subtitle: "Energy • Efficiency • Excellence",
        image: "", // No image for welcome slide
    },
    {
        id: 1,
        type: "story",
        image: "/hero-section/hero-1.jpeg",
        title: "Precision Energy Auditing",
        subtitle: "Unlocking efficiency through detailed analysis and state-of-the-art measurement.",
    },
    {
        id: 2,
        type: "story",
        image: "/hero-section/hero-2.jpeg",
        title: "Industrial Performance",
        subtitle: "Optimizing large-scale industrial plants with sustainable energy solutions.",
    },
    {
        id: 3,
        type: "story",
        image: "/hero-section/hero-3.jpeg",
        title: "Advanced Conservation",
        subtitle: "Reducing carbon footprints while maximizing operational cost savings.",
    },
    {
        id: 4,
        type: "story",
        image: "/hero-section/hero-4.jpeg",
        title: "Expert Measurement",
        subtitle: "High-precision diagnostic tools for accurate energy performance indicators.",
    },
    {
        id: 5,
        type: "story",
        image: "/hero-section/hero-save-energy.jpg",
        title: "Save Energy",
        subtitle: "Leading the way in energy management and environmental stewardship.",
    },
    {
        id: 6,
        type: "video",
        image: "",
        video: "/limbaja-story.mp4",
        title: "See Our Impact",
        subtitle: "Watch our story unfold in action.",
    },
];

export default function StoryHero() {
    const { setHeaderHidden } = useHeaderControl();
    const [current, setCurrent] = useState(0);
    const [isStoryMode, setIsStoryMode] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    // Auto-scroll state
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

    const containerRef = useRef<HTMLDivElement>(null);
    const scrolling = useRef(false);
    const touchStart = useRef(0);
    const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

    // Initial Check
    useEffect(() => {
        const seen = sessionStorage.getItem("limbaja_story_seen");
        if (seen) {
            setIsStoryMode(false);
            setCurrent(slides.length - 1);
            setHeaderHidden(false);
            setIsAutoScrolling(false);
        } else {
            setIsStoryMode(true);
            setCurrent(0); // Start at Welcome slide
            setHeaderHidden(true);
            document.body.style.overflow = "hidden";
        }
        setHasLoaded(true);

        return () => {
            document.body.style.overflow = "";
            setHeaderHidden(false);
            if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);
        };
    }, [setHeaderHidden]);

    const completeStory = useCallback(() => {
        sessionStorage.setItem("limbaja_story_seen", "true");
        setIsStoryMode(false);
        setIsAutoScrolling(false);
        document.body.style.overflow = "";
        setHeaderHidden(false);
        setCurrent(slides.length - 1);
        if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);
    }, [setHeaderHidden]);

    // Auto-scroll Logic
    useEffect(() => {
        if (!isStoryMode || !isAutoScrolling) {
            if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);
            return;
        }

        autoScrollTimer.current = setTimeout(() => {
            if (current < slides.length - 1) {
                setCurrent(prev => prev + 1);
            } else {
                completeStory();
            }
        }, 2000);

        return () => {
            if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);
        };
    }, [isStoryMode, isAutoScrolling, current, completeStory]);

    const stopAutoScroll = () => {
        if (isAutoScrolling) {
            setIsAutoScrolling(false);
            if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);
        }
    };

    // Video Slide Logic: Show Header & Stop Auto Scroll
    useEffect(() => {
        if (!isStoryMode) return;

        const currentSlide = slides[current];
        const isVideoSlide = currentSlide.type === "video" || current === slides.length - 1;

        if (isVideoSlide) {
            setHeaderHidden(false);
            stopAutoScroll();
        } else {
            setHeaderHidden(true);
        }
    }, [current, isStoryMode, setHeaderHidden]);

    // Scroll Handler
    useEffect(() => {
        if (!isStoryMode) return;

        const handleWheel = (e: WheelEvent) => {
            if (scrolling.current) return;

            if (Math.abs(e.deltaY) < 20) return;

            scrolling.current = true;

            if (e.deltaY > 0) {
                // Scroll Down
                if (current < slides.length - 1) {
                    setCurrent((prev) => prev + 1);
                    setTimeout(() => scrolling.current = false, 1000);
                } else {
                    completeStory();
                }
            } else {
                // Scroll Up
                if (current > 0) {
                    setCurrent((prev) => prev - 1);
                    setTimeout(() => scrolling.current = false, 1000);
                } else {
                    scrolling.current = false;
                }
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStart.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (scrolling.current) return;
            e.preventDefault();

            const touchY = e.touches[0].clientY;
            const diff = touchStart.current - touchY;

            if (Math.abs(diff) < 50) return;

            scrolling.current = true;

            if (diff > 0) { // Swipe Up (Scroll Down)
                if (current < slides.length - 1) {
                    setCurrent((prev) => prev + 1);
                    setTimeout(() => scrolling.current = false, 1000);
                } else {
                    completeStory();
                }
            } else { // Swipe Down (Scroll Up)
                if (current > 0) {
                    setCurrent((prev) => prev - 1);
                    setTimeout(() => scrolling.current = false, 1000);
                } else {
                    scrolling.current = false;
                }
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            // Remove stopAutoScroll()
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isStoryMode, current, completeStory, isAutoScrolling]); // Added isAutoScrolling dependency though stopAutoScroll keeps it fresh via ref/state update pattern if needed, but here simple state is enough.

    if (!hasLoaded) {
        return (
            <div className="fixed inset-0 z-[60] bg-gradient-to-br from-slate-900 via-[#0f3433] to-slate-900 animate-gradient-slow flex items-center justify-center">
            </div>
        );
    }

    const Wrapper = isStoryMode ? "div" : "section";
    const wrapperClass = isStoryMode
        ? "fixed inset-0 z-[60] text-white bg-gradient-to-br from-slate-900 via-[#0f3433] to-slate-900 bg-[length:400%_400%] animate-gradient-slow"
        : "relative h-screen w-full overflow-hidden text-white bg-gradient-to-br from-slate-900 via-[#0f3433] to-slate-900 bg-[length:400%_400%] animate-gradient-slow";

    const currentSlide = slides[current];
    const isWelcome = currentSlide.type === "welcome";

    return (
        <Wrapper className={wrapperClass} ref={containerRef}>
            <AnimatePresence mode="popLayout">
                {isWelcome ? (
                    <motion.div
                        key="welcome"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-20"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-4 text-center px-4"
                        >
                            {currentSlide.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-lg md:text-xl text-slate-400 uppercase tracking-widest text-center"
                        >
                            {currentSlide.subtitle}
                        </motion.p>
                    </motion.div>
                ) : (
                    <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        {currentSlide.type === "video" ? (
                            <video
                                src={(currentSlide as any).video}
                                className="object-cover w-full h-full"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        ) : (
                            <Image
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent z-10" />
                        <div className="absolute inset-0 bg-black/20 z-10" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content info for Story Slides */}
            {
                !isWelcome && (
                    <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-8 md:px-20 lg:px-32 pointer-events-none">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="max-w-4xl"
                            >
                                <div className="h-1 bg-primary mb-8" />
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter mix-blend-overlay opacity-90">
                                    {currentSlide.title}
                                </h1>
                                <p className="text-lg md:text-xl text-slate-200 max-w-xl mb-10 font-medium leading-relaxed drop-shadow-md">
                                    {currentSlide.subtitle}
                                </p>

                                {/* Final Slide CTA */}
                                {current === slides.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="flex flex-wrap gap-5 pointer-events-auto"
                                    >
                                        <Link href="/service" className="group relative inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-xl shadow-primary/20 active:scale-95">
                                            <span>Explore Services</span>
                                            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                                        </Link>
                                        <Link href="/contact-us" className="group px-8 py-4 bg-white/5 border border-white/20 text-white hover:bg-white hover:text-slate-900 font-bold rounded-xl transition-all md:backdrop-blur-md uppercase tracking-widest text-sm active:scale-95">
                                            Get In Touch
                                        </Link>
                                    </motion.div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                )
            }

            {/* Progress / Scroll Indicator */}
            {
                isStoryMode && (
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
                        <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                            {isAutoScrolling ? "Auto" : "Scroll"}
                        </span>
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <ChevronDown className="text-white/50" />
                        </motion.div>
                    </div>
                )
            }

            {/* Story Progress Dots */}
            {
                isStoryMode && (
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
                        {slides.map((slide, idx) => (
                            <div
                                key={idx}
                                onClick={() => {
                                    // Removed stopAutoScroll(); so clicking dots also keeps auto-scroll alive
                                    setCurrent(idx);
                                }}
                                className={`w-1 transition-all duration-500 rounded-full cursor-pointer ${idx === current ? "h-8 bg-primary" : "h-2 bg-white/20"}`}
                            />
                        ))}
                    </div>
                )
            }
        </Wrapper >
    );
}
