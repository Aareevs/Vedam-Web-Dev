import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Briefcase, Mic } from "lucide-react";

const activities = [
    {
        title: "Workshops",
        description: "Hands-on sessions on coding, design, marketing, and business strategy.",
        icon: Briefcase,
        color: "text-blue-500",
    },
    {
        title: "Events",
        description: "Hackathons, pitch competitions, and networking mixers.",
        icon: Calendar,
        color: "text-green-500",
    },
    {
        title: "Startups",
        description: "Incubation support for student-led startups from idea to MVP.",
        icon: Rocket, // Need to import Rocket or use another icon
        color: "text-purple-500",
    },
    {
        title: "Networking",
        description: "Connect with alumni, industry experts, and fellow entrepreneurs.",
        icon: Users,
        color: "text-orange-500",
    },
];

import { Rocket } from "lucide-react"; // Importing Rocket here to fix the reference

export function WhatWeDo() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        What We Do
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We provide a comprehensive platform for students to explore entrepreneurship through various initiatives.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activities.map((activity, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-none shadow-md">
                            <CardHeader>
                                <div className={`w-12 h-12 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center mb-4 ${activity.color}`}>
                                    <activity.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{activity.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {activity.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
