"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const albums = [
    {
        id: 1,
        title: "Startup Weekend 2023",
        cover: "https://placehold.co/600x400?text=Album+1",
        images: [
            "https://placehold.co/800x600?text=Photo+1",
            "https://placehold.co/800x600?text=Photo+2",
            "https://placehold.co/800x600?text=Photo+3",
        ],
    },
    {
        id: 2,
        title: "E-Summit 2023",
        cover: "https://placehold.co/600x400?text=Album+2",
        images: [
            "https://placehold.co/800x600?text=Photo+4",
            "https://placehold.co/800x600?text=Photo+5",
        ],
    },
    {
        id: 3,
        title: "Workshop Series",
        cover: "https://placehold.co/600x400?text=Album+3",
        images: [
            "https://placehold.co/800x600?text=Photo+6",
            "https://placehold.co/800x600?text=Photo+7",
            "https://placehold.co/800x600?text=Photo+8",
            "https://placehold.co/800x600?text=Photo+9",
        ],
    },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Gallery
            </h1>

            <div className="space-y-16">
                {albums.map((album) => (
                    <div key={album.id}>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pl-4 border-l-4 border-indigo-600">
                            {album.title}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {album.images.map((image, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="cursor-pointer overflow-hidden rounded-lg shadow-md aspect-video"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img
                                        src={image}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-8 w-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={selectedImage}
                            alt="Full screen"
                            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
