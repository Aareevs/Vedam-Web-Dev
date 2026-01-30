"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-black">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        Igniting <span className="text-indigo-600">Innovation</span> <br />
                        at Vedam
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
                        EVC Vedam is the heartbeat of entrepreneurship at Vedam School of Technology. We build, we launch, we lead.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/auth/register">
                            <Button size="lg" className="text-lg px-8">
                                Join the Club
                            </Button>
                        </Link>
                        <Link href="/events">
                            <Button variant="outline" size="lg" className="text-lg px-8">
                                Explore Events
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
