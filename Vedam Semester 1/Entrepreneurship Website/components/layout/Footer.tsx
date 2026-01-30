import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
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
                        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                            Empowering the next generation of entrepreneurs at Vedam School of Technology.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {["Home", "About Us", "Events", "Gallery", "Blogs", "Team"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-base text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-3">
                            <li className="text-base text-gray-600 dark:text-gray-400">
                                email@evcvedam.com
                            </li>
                            <li className="text-base text-gray-600 dark:text-gray-400">
                                +91 123 456 7890
                            </li>
                            <li className="text-base text-gray-600 dark:text-gray-400">
                                Vedam School of Technology
                            </li>
                        </ul>
                        <div className="mt-6 flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} EVC Vedam. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
