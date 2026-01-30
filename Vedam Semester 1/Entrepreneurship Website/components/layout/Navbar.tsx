"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSession, signOut } from "next-auth/react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Team", href: "/team" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { data: session } = useSession();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-black/80"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative h-10 w-10">
                            <Image
                                src="/logo.jpg"
                                alt="EVC Vedam Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold text-indigo-900 dark:text-white">
                            EVC Vedam
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        {session ? (
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {session.user?.name}
                                </span>
                                <Button onClick={() => signOut()} variant="outline" size="sm">
                                    Sign Out
                                </Button>
                            </div>
                        ) : (
                            <Link href="/auth/register">
                                <Button>Register / Login</Button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 px-3">
                            {session ? (
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Signed in as {session.user?.name}
                                    </p>
                                    <Button onClick={() => signOut()} variant="outline" className="w-full">
                                        Sign Out
                                    </Button>
                                </div>
                            ) : (
                                <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full">Register / Login</Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
