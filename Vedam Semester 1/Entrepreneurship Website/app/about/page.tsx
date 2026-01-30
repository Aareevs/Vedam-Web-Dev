import { Vision } from "@/components/sections/Vision";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div>
            {/* Hero Section for About Page */}
            <section className="bg-indigo-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About EVC Vedam</h1>
                    <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
                        Building the next generation of leaders, innovators, and disruptors.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://placehold.co/800x600?text=Our+Story"
                                alt="Our Story"
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                EVC Vedam started with a simple idea: to create a space where students could experiment, fail, and succeed in the world of entrepreneurship. What began as a small group of enthusiasts has now grown into a vibrant community of hundreds of students.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                We believe that entrepreneurship is not just about starting a company; it's a mindset. It's about seeing problems as opportunities and having the courage to solve them.
                            </p>
                            <Link href="/team">
                                <Button variant="outline">Meet Our Team</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reuse Vision Section */}
            <Vision />

            {/* CTA Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Ready to start your journey?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Join EVC Vedam today and become part of a community that supports your dreams.
                    </p>
                    <Link href="/auth/register">
                        <Button size="lg">Join Now</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
