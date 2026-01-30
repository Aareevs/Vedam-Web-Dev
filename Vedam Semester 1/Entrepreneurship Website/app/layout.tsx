import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "EVC Vedam - Entrepreneurship Club",
    description: "The official website of EVC Vedam, the Entrepreneurship Club of Vedam School of Technology.",
};

import Providers from "@/components/providers/SessionProvider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "min-h-screen flex flex-col")}>
                <Providers>
                    <Navbar />
                    <main className="flex-grow pt-16">
                        {children}
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
