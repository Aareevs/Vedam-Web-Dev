import { Lightbulb, Target, Rocket } from "lucide-react";

export function Vision() {
    return (
        <section className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Our Vision & Mission
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        We strive to create an ecosystem where innovation thrives and students are empowered to build the future.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Lightbulb className="h-8 w-8 text-indigo-600 dark:text-indigo-300" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Innovate</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Fostering a culture of creativity and problem-solving to address real-world challenges.
                        </p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Target className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Execute</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Turning ideas into action through hands-on workshops, hackathons, and mentorship.
                        </p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Rocket className="h-8 w-8 text-pink-600 dark:text-pink-300" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Scale</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Providing the resources and network needed to take startups to the next level.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
