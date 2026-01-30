import { EventCard } from "@/components/sections/EventCard";

const currentEvents = [
    {
        id: "1",
        title: "Startup Weekend 2024",
        description: "A 54-hour weekend event, during which groups of developers, business managers, startup enthusiasts, marketing gurus, graphic artists and more pitch ideas for new startup companies, form teams around those ideas, and work to develop a working prototype, demo/presentation by Sunday evening.",
        date: "Nov 25, 2024",
        time: "5:00 PM",
        location: "Main Auditorium",
        image: "https://placehold.co/600x400?text=Startup+Weekend",
        isPast: false,
    },
    {
        id: "2",
        title: "Guest Lecture: Zero to One",
        description: "Learn the secrets of building a successful startup from scratch with our special guest speaker.",
        date: "Dec 02, 2024",
        time: "2:00 PM",
        location: "Seminar Hall A",
        image: "https://placehold.co/600x400?text=Guest+Lecture",
        isPast: false,
    },
];

const pastEvents = [
    {
        id: "3",
        title: "Ideathon 2023",
        description: "An intense brainstorming session where students came up with innovative solutions to campus problems.",
        date: "Oct 15, 2023",
        time: "10:00 AM",
        location: "Innovation Hub",
        image: "https://placehold.co/600x400?text=Ideathon",
        isPast: true,
    },
    {
        id: "4",
        title: "E-Summit 2023",
        description: "Our flagship annual entrepreneurship summit featuring keynote speakers, panel discussions, and startup expo.",
        date: "Aug 20, 2023",
        time: "9:00 AM",
        location: "Campus Grounds",
        image: "https://placehold.co/600x400?text=E-Summit",
        isPast: true,
    },
    {
        id: "5",
        title: "Workshop: Design Thinking",
        description: "A hands-on workshop on design thinking principles and how to apply them in product development.",
        date: "July 10, 2023",
        time: "3:00 PM",
        location: "Design Studio",
        image: "https://placehold.co/600x400?text=Design+Thinking",
        isPast: true,
    },
];

export default function EventsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-16">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4">
                    Upcoming Events
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4">
                    Past Events
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pastEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
}
