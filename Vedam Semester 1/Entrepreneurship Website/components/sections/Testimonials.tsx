"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Founder, TechStart",
        content:
            "EVC Vedam gave me the platform to launch my startup. The mentorship and networking opportunities are unmatched.",
        image: "https://placehold.co/100x100?text=AJ",
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "Product Manager, Google",
        content:
            "The workshops organized by EVC were instrumental in shaping my product thinking. Highly recommend joining!",
        image: "https://placehold.co/100x100?text=SW",
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "CEO, InnovateX",
        content:
            "A vibrant community of dreamers and doers. EVC Vedam is where ideas turn into reality.",
        image: "https://placehold.co/100x100?text=MC",
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    What People Say
                </h2>

                <div className="relative max-w-4xl mx-auto h-[400px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            className="absolute w-full"
                        >
                            <Card className="bg-white dark:bg-gray-800 border-none shadow-xl">
                                <CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
                                    <Quote className="h-12 w-12 text-indigo-200 mb-6" />
                                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-8">
                                        "{testimonials[currentIndex].content}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div className="text-left">
                                            <h4 className="font-bold text-gray-900 dark:text-white">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-sm text-indigo-600">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 z-10"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 z-10"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    </button>
                </div>
            </div>
        </section>
    );
}
