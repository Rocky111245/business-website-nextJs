"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Stethoscope, HeartPulse } from "lucide-react";

const images = [
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/IMG_9768.HEIC?updatedAt=1709968888244", caption: "Ophthalmological Society of Bangladesh (OSB) – 2024" },
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/IMG_9949.HEIC?updatedAt=1709969701613", caption: "Ophthalmological Society of Bangladesh (OSB) – 2024" },
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/422315621_910507494414250_9126567905570027216_n.jpg?updatedAt=1714435799234", caption: "Grameen GC Eye Hospital-Bogra Installation & Training – 2024" },
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/422263657_910507617747571_556902053030439337_n.jpg?updatedAt=1714435799124", caption: "Grameen GC Eye Hospital-Bogra Installation & Training – 2024" },
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/IMG_9783.HEIC?updatedAt=1709969838863", caption: "Ophthalmological Society of Bangladesh (OSB) – 2024" },
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/IMG_9938.HEIC?updatedAt=1709969838562", caption: "Ophthalmological Society of Bangladesh (OSB) – 2024" },
    { url: "https://ik.imagekit.io/emtbd/emt_images/images/IMG_9846.heic?updatedAt=1709969838655", caption: "Ophthalmological Society of Bangladesh (OSB) – 2024" },
] as const;

export default function MedicalCarousel() {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    useEffect(() => {
        if (isPaused) return;
        const t = setInterval(next, 5000);
        return () => clearInterval(t);
    }, [isPaused]);

    return (
        <section className="relative w-full overflow-hidden bg-slate-50 py-16 lg:py-10">
            <div className="pointer-events-none absolute inset-0 opacity-30">
                <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="ecg" x="0" y="0" width="160" height="80" patternUnits="userSpaceOnUse">
                        <path d="M0 40h20l10-10 20 60 10-70 20 50 10-40 20 40h20" stroke="#0ea5e9" strokeWidth="1.2" fill="none" strokeDasharray="4 4"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#ecg)"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-cyan-50/50"/>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-cyan-100 text-cyan-800 rounded-full text-base font-semibold">
                        <HeartPulse className="w-5 h-5" />
                        <span>Trusted by Healthcare Leaders</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
                        Over 40 Years of Experience in the Medical Industry
                    </h2>

                    <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
                        Partnering with leading healthcare institutions and professionals across Bangladesh to deliver cutting-edge medical technologies and unparalleled service.
                    </p>

                    <div className="flex items-center gap-5 pt-3">
                        <Stethoscope className="w-12 h-12 text-cyan-600" />
                        <div>
                            <p className="font-bold text-slate-700 text-lg">Nationwide Support</p>
                            <p className="text-base text-slate-500">Installation • Training • After-sales Service</p>
                        </div>
                    </div>
                </div>

                {/* ---------- Carousel block ---------- */}
                <div
                    className="relative w-full aspect-[16/10] rounded-2xl shadow-2xl shadow-slate-300/40 overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* images */}
                    <div className="flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                        {images.map(({ url, caption }, i) => (
                            <figure key={i} className="w-full flex-shrink-0 relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={url} alt={caption} className="w-full h-full object-cover" />
                            </figure>
                        ))}
                    </div>

                    {/* caption (above dots) */}
                    <div className="absolute bottom-14 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 pb-3 pt-6">
                        <p className="text-white text-xl font-medium tracking-wide drop-shadow-md">
                            {images[index].caption}
                        </p>
                    </div>

                    {/* prev / next */}
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 grid place-items-center w-12 h-12 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-lg transition"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 grid place-items-center w-12 h-12 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-lg transition"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-3 h-3 rounded-full transition ${i === index ? "bg-white scale-125" : "bg-white/60 hover:bg-white/80"}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}