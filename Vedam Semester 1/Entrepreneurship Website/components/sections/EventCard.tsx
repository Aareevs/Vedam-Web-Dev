import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface EventProps {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image: string;
    isPast?: boolean;
}

export function EventCard({ event }: { event: EventProps }) {
    const { data: session } = useSession();

    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-48 w-full">
                <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <CardHeader>
                <CardTitle className="text-xl line-clamp-1">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {event.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                {event.isPast ? (
                    <Link href={`/events/${event.id}`} className="w-full">
                        <Button variant="outline" className="w-full">
                            View Recap
                        </Button>
                    </Link>
                ) : session ? (
                    <Button className="w-full">Register Now</Button>
                ) : (
                    <Link href="/auth/signin" className="w-full">
                        <Button className="w-full">Login to Register</Button>
                    </Link>
                )}
            </CardFooter>
        </Card>
    );
}
