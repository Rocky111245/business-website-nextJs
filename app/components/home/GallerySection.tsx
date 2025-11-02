"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/IMG_9768.HEIC?updatedAt=1709968888244", caption: "Ophthalmological Society of Bangladesh (OSB) - 2024" },
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/IMG_9949.HEIC?updatedAt=1709969701613", caption: "Ophthalmological Society of Bangladesh (OSB) - 2024" },
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/422315621_910507494414250_9126567905570027216_n.jpg?updatedAt=1714435799234", caption: "Grameen GC Eye Hospital-Bogra Installation and Training - 2024" },
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/422263657_910507617747571_556902053030439337_n.jpg?updatedAt=1714435799124", caption: "Grameen GC Eye Hospital-Bogra Installation and Training - 2024" },
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/IMG_9783.HEIC?updatedAt=1709969838863", caption: "Ophthalmological Society of Bangladesh (OSB) - 2024" },
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/IMG_9938.HEIC?updatedAt=1709969838562", caption: "Ophthalmological Society of Bangladesh (OSB) - 2024" },
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/IMG_9846.heic?updatedAt=1709969838655", caption: "Ophthalmological Society of Bangladesh (OSB) - 2024" },
] as const;

export default function GallerySection() {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const id = setInterval(() => setCurrent(p => (p + 1) % images.length), 4000);
        return () => clearInterval(id);
    }, [isHovered]);

    const next = () => setCurrent(p => (p + 1) % images.length);
    const prev = () => setCurrent(p => (p === 0 ? images.length - 1 : p - 1));

    return (
        <section className="bg-gradient-to-b from-neutral-50 to-sky-50 py-16">
            <div className="section-container">
                <div className="text-center mb-12">
                    <h2 className="title-xl mb-4">Over 40 Years of Experience in the Medical Industry</h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Partnering with leading healthcare institutions and professionals across Bangladesh
                    </p>
                </div>

                <div
                    className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative h-[500px] md:h-[600px]">
                        {images.map((img, i) => (
                            <div key={i} className={`absolute inset-0 transition-all duration-700 ${i === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"}`}>
                                <div className="relative w-full h-full">
                                    <Image src={img.url} alt={img.caption} fill className="object-cover" />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-900/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                                    <p className="text-lg md:text-xl font-semibold">{img.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-lg"
                        aria-label="Previous image"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-lg"
                        aria-label="Next image"
                    >
                        <FaChevronRight />
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"}`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-6 text-neutral-600">
                    <span className="text-lg font-medium">{current + 1} / {images.length}</span>
                </div>
            </div>
        </section>
    );
}
