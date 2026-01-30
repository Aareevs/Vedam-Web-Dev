import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
    {
        name: "President Name",
        role: "President",
        image: "https://placehold.co/400x400?text=President",
        quote: "Leading with vision and purpose.",
    },
    {
        name: "Vice President Name",
        role: "Vice President",
        image: "https://placehold.co/400x400?text=Vice+President",
        quote: "Empowering the team to achieve greatness.",
    },
    {
        name: "Operations Head Name",
        role: "Operations Head",
        image: "https://placehold.co/400x400?text=Operations",
        quote: "Ensuring smooth execution of every initiative.",
    },
    {
        name: "Tech Lead Name",
        role: "Tech Lead",
        image: "https://placehold.co/400x400?text=Tech+Lead",
        quote: "Building the digital foundation of our club.",
    },
    {
        name: "Marketing Head Name",
        role: "Marketing Head",
        image: "https://placehold.co/400x400?text=Marketing",
        quote: "Spreading the word and building our brand.",
    },
    {
        name: "Outreach Head Name",
        role: "Outreach Head",
        image: "https://placehold.co/400x400?text=Outreach",
        quote: "Connecting with the wider community.",
    },
    {
        name: "Copy Head Name",
        role: "Copy Head",
        image: "https://placehold.co/400x400?text=Copy",
        quote: "Crafting compelling narratives.",
    },
    {
        name: "Social Media Lead Name",
        role: "Social Media Lead",
        image: "https://placehold.co/400x400?text=Social+Media",
        quote: "Engaging our audience online.",
    },
    {
        name: "Graphics & Video Name",
        role: "Graphics and Video Designer",
        image: "https://placehold.co/400x400?text=Designer",
        quote: "Visualizing our ideas.",
    },
    {
        name: "Finance Manager Name",
        role: "Finance Manager",
        image: "https://placehold.co/400x400?text=Finance",
        quote: "Managing resources effectively.",
    },
    {
        name: "Event Manager Name",
        role: "Event Manager",
        image: "https://placehold.co/400x400?text=Events",
        quote: "Creating memorable experiences.",
    },
    {
        name: "Logistics Coord Name",
        role: "Logistics Coordinator",
        image: "https://placehold.co/400x400?text=Logistics",
        quote: "Handling the details that matter.",
    },
    {
        name: "Sponsorship Lead Name",
        role: "Sponsorship Lead",
        image: "https://placehold.co/400x400?text=Sponsorship",
        quote: "Fueling our growth with partnerships.",
    },
    {
        name: "Guest Relations Name",
        role: "Guest Relations Lead",
        image: "https://placehold.co/400x400?text=Guest+Relations",
        quote: "Welcoming our esteemed guests.",
    },
    {
        name: "Partnerships Lead Name",
        role: "Institutional Partnerships Lead",
        image: "https://placehold.co/400x400?text=Partnerships",
        quote: "Building bridges with institutions.",
    },
];

export default function TeamPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Meet the Team
                </h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    The passionate individuals driving EVC Vedam forward.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none shadow-md group">
                        <div className="relative h-80 w-full overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <div className="flex space-x-4">
                                    <a href="#" className="text-white hover:text-indigo-400 transition-colors">
                                        <Linkedin className="h-6 w-6" />
                                    </a>
                                    <a href="#" className="text-white hover:text-indigo-400 transition-colors">
                                        <Twitter className="h-6 w-6" />
                                    </a>
                                    <a href="#" className="text-white hover:text-indigo-400 transition-colors">
                                        <Mail className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <CardContent className="text-center p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {member.name}
                            </h3>
                            <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                                "{member.quote}"
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
