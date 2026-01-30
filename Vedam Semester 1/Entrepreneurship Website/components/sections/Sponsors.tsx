"use client";

import { motion } from "framer-motion";

const sponsors = [
    { name: "Google", logo: "https://placehold.co/200x80?text=Google" },
    { name: "Microsoft", logo: "https://placehold.co/200x80?text=Microsoft" },
    { name: "Amazon", logo: "https://placehold.co/200x80?text=Amazon" },
    { name: "Meta", logo: "https://placehold.co/200x80?text=Meta" },
    { name: "Apple", logo: "https://placehold.co/200x80?text=Apple" },
    { name: "Netflix", logo: "https://placehold.co/200x80?text=Netflix" },
    { name: "Tesla", logo: "https://placehold.co/200x80?text=Tesla" },
    { name: "SpaceX", logo: "https://placehold.co/200x80?text=SpaceX" },
];

export function Sponsors() {
    return (
        <section className="py-16 bg-white dark:bg-black overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
                    Our Sponsors
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                    Proudly supported by industry leaders
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    className="flex py-12 whitespace-nowrap"
                    animate={{
                        x: [0, -1035], // Adjust based on total width of items
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...sponsors, ...sponsors].map((sponsor, index) => (
                        <div
                            key={index}
                            className="mx-8 flex items-center justify-center min-w-[200px] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="h-12 object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
