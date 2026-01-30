import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Mock data function (in a real app, this would fetch from DB)
function getEvent(id: string) {
    // Just returning a generic event for any ID for demo purposes
    return {
        id,
        title: "Startup Weekend 2024",
        description: "A 54-hour weekend event, during which groups of developers, business managers, startup enthusiasts, marketing gurus, graphic artists and more pitch ideas for new startup companies, form teams around those ideas, and work to develop a working prototype, demo/presentation by Sunday evening. This event is designed to provide superior experiential education for technical and non-technical entrepreneurs.",
        fullDescription: `
      <p>Startup Weekend is a global network of passionate leaders and entrepreneurs on a mission to inspire, educate, and empower individuals, teams, and communities. Come share ideas, form teams, and launch startups.</p>
      <br />
      <h3>What to expect:</h3>
      <ul>
        <li>Friday: Pitch your idea and form a team.</li>
        <li>Saturday: Work on your product, validate your idea, and practice your pitch.</li>
        <li>Sunday: Final polish and presentations to judges.</li>
      </ul>
      <br />
      <p>Food and drinks will be provided throughout the weekend. Bring your laptop and your energy!</p>
    `,
        date: "Nov 25, 2024",
        time: "5:00 PM",
        location: "Main Auditorium, Vedam School of Technology",
        image: "https://placehold.co/1200x600?text=Startup+Weekend+Full",
        isPast: false,
    };
}

export default function EventDetailsPage({ params }: { params: { id: string } }) {
    const event = getEvent(params.id);

    return (
        <div className="container mx-auto px-4 py-12">
            <Link href="/events" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
            </Link>

            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8 shadow-lg">
                <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        {event.title}
                    </h1>
                    <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                        <div dangerouslySetInnerHTML={{ __html: event.fullDescription }} />
                    </div>
                </div>

                <div className="md:col-span-1">
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm sticky top-24">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Event Details
                        </h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <Calendar className="h-5 w-5 text-indigo-600 mt-0.5" />
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Date</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{event.date}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock className="h-5 w-5 text-indigo-600 mt-0.5" />
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Time</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{event.time}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-indigo-600 mt-0.5" />
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{event.location}</p>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full text-lg py-6">
                            Register Now
                        </Button>
                        <p className="text-xs text-center text-gray-500 mt-4">
                            *Registration requires login
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
