import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import Link from "next/link";

const blogs = [
    {
        id: 1,
        title: "5 Steps to Validate Your Startup Idea",
        excerpt: "Before you build, you must validate. Here is a step-by-step guide to ensuring your idea has market potential.",
        author: "Jane Doe",
        date: "Nov 10, 2024",
        image: "https://placehold.co/600x400?text=Validation",
        category: "Guide",
    },
    {
        id: 2,
        title: "The Future of AI in Entrepreneurship",
        excerpt: "How artificial intelligence is reshaping the startup landscape and what it means for new founders.",
        author: "John Smith",
        date: "Oct 28, 2024",
        image: "https://placehold.co/600x400?text=AI+Startup",
        category: "Tech",
    },
    {
        id: 3,
        title: "Recap: E-Summit 2023",
        excerpt: "Highlights from our biggest event of the year, featuring key takeaways from industry leaders.",
        author: "EVC Team",
        date: "Sep 05, 2023",
        image: "https://placehold.co/600x400?text=E-Summit+Recap",
        category: "Event",
    },
];

export default function BlogsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Latest Insights
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                        <div className="relative h-48 w-full">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                {blog.category}
                            </div>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-xl line-clamp-2">{blog.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                {blog.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto">
                                <div className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    <span>{blog.author}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    <span>{blog.date}</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link href={`/blogs/${blog.id}`} className="w-full">
                                <Button variant="outline" className="w-full">
                                    Read More
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
