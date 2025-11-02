"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import products from "../../data/products.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Product = { name: string; description: string; productlink: string; Brochure?: string };

export default function ProductShowcase() {
    const showcaseProducts: Product[] = (products as Product[]).slice(0, 10);
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const id = setInterval(() => setCurrent(p => (p + 1) % showcaseProducts.length), 4000);
        return () => clearInterval(id);
    }, [isHovered, showcaseProducts.length]);

    const next = () => setCurrent(p => (p + 1) % showcaseProducts.length);
    const prev = () => setCurrent(p => (p === 0 ? showcaseProducts.length - 1 : p - 1));

    return (
        <section className="bg-white py-16">
            <div className="section-container">
                <div className="text-center mb-12">
                    <h2 className="title-xl mb-4">Featured Products</h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Discover our selection of high-quality medical equipment from world-leading manufacturers
                    </p>
                </div>

                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="bg-gradient-to-br from-neutral-50 to-sky-50 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="p-8 md:p-12">
                            <div className="flex flex-col items-center">
                                <div className="w-full max-w-md h-80 mb-8 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={showcaseProducts[current].productlink}
                                            alt={showcaseProducts[current].name}
                                            fill
                                            className="object-contain transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>

                                <div className="text-center space-y-4 mb-6">
                                    <h3 className="text-2xl font-bold text-neutral-800 px-4">
                                        {showcaseProducts[current].name}
                                    </h3>
                                    <p className="text-lg text-neutral-600 max-w-2xl px-4">
                                        {showcaseProducts[current].description}
                                    </p>
                                </div>

                                <Link
                                    href="/products"
                                    className="inline-block bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    Learn More About Our Products
                                </Link>
                            </div>
                        </div>

                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                            aria-label="Previous product"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                            aria-label="Next product"
                        >
                            <FaChevronRight />
                        </button>

                        <div className="pb-6 flex justify-center space-x-2">
                            {showcaseProducts.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`transition-all duration-300 rounded-full ${
                                        i === current ? "bg-blue-700 w-8 h-2" : "bg-neutral-300 hover:bg-neutral-400 w-2 h-2"
                                    }`}
                                    aria-label={`Go to product ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-6 text-neutral-600">
            <span className="text-lg font-medium">
              Product {current + 1} of {showcaseProducts.length}
            </span>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-neutral-600 mb-4">See our complete catalog of medical equipment</p>
                    <Link
                        href="/products"
                        className="inline-block text-blue-700 hover:text-blue-800 font-semibold text-lg border-b-2 border-blue-700 hover:border-blue-800 transition-colors duration-200"
                    >
                        View All {products.length}+ Products →
                    </Link>
                </div>
            </div>
        </section>
    );
}
