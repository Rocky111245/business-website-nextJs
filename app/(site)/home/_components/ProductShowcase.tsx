"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import products from "../../../data/products.json";

type Product = {
    name: string;
    description: string;
    productLink: string;
    brochure?: string;
    company?: string;
    equipmentType?: string;
};

export default function ProductShowcase() {
    // Compute product list first - this is always executed
    const productList = useMemo(() => {
        return (products as unknown as Product[])
            .filter(p => p?.name && p.productLink)
            .slice(0, 15);
    }, []);

    // Hooks must be called unconditionally at the top level
    const [idx, setIdx] = useState(0);
    const [pause, setPause] = useState(false);
    const wrapRef = useRef<HTMLDivElement>(null);

    const prefersReduced = useMemo(() =>
            typeof window !== "undefined" &&
            window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
        []
    );

    // Auto-advance effect
    useEffect(() => {
        if (productList.length === 0) return; // Early return inside effect is fine
        if (pause || prefersReduced || productList.length <= 1) return;

        let visible = true;
        const io = new IntersectionObserver(
            ([entry]) => { visible = entry?.isIntersecting ?? true; },
            { threshold: 0.15 }
        );

        if (wrapRef.current) io.observe(wrapRef.current);

        const id = setInterval(() => {
            if (visible) setIdx(p => (p + 1) % productList.length);
        }, 5500);

        return () => {
            clearInterval(id);
            io.disconnect();
        };
    }, [pause, prefersReduced, productList.length]);

    // Keyboard navigation
    useEffect(() => {
        if (productList.length === 0) return; // Early return inside effect is fine

        const handleKeyDown = (e: KeyboardEvent) => {
            if (!wrapRef.current?.matches(":focus-within")) return;
            if (e.key === "ArrowRight") setIdx(p => (p + 1) % productList.length);
            if (e.key === "ArrowLeft") setIdx(p => (p - 1 + productList.length) % productList.length);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [productList.length]);

    // Early return must come AFTER all hooks
    if (productList.length === 0) {
        return null;
    }

    const current = productList[idx];
    const specs = parseSpecs(current?.description);

    const next = () => setIdx(p => (p + 1) % productList.length);
    const prev = () => setIdx(p => (p - 1 + productList.length) % productList.length);

    return (
        <section className="relative w-full overflow-hidden py-16 lg:py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-sky-100" />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-4">
                        Featured Product
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">
                        {current?.name ?? "—"}
                    </h2>
                    {current?.equipmentType && (
                        <p className="text-lg text-slate-600">{current.equipmentType}</p>
                    )}
                </div>

                {/* Main Card */}
                <div
                    ref={wrapRef}
                    className="relative grid lg:grid-cols-[1.2fr_1fr] items-stretch gap-10 rounded-3xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-2xl p-6 sm:p-8 focus-within:ring-2 focus-within:ring-sky-400"
                    onMouseEnter={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    tabIndex={-1}
                    aria-label="Product showcase"
                >
                    {/* Image Gallery */}
                    <div className="relative rounded-2xl border border-slate-200 bg-white min-h-[280px] lg:min-h-[400px] group">
                        <div className="absolute inset-0 p-6">
                            <div className="relative w-full h-full overflow-hidden">
                                <div
                                    className="flex h-full transition-transform duration-700 ease-in-out"
                                    style={{ transform: `translateX(-${idx * 100}%)` }}
                                >
                                    {productList.map((p, i) => (
                                        <div key={`${p.name}-${i}`} className="w-full flex-shrink-0 relative">
                                            <Image
                                                src={p.productLink.trim()}
                                                alt={p.name}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 1024px) 100vw, 640px"
                                                priority={i === 0}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Controls */}
                        {productList.length > 1 && (
                            <>
                                <button
                                    onClick={prev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 text-slate-800 shadow-lg border border-slate-200 transition-all hover:scale-110 opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
                                    aria-label="Previous product"
                                >
                                    <FaChevronLeft className="mx-auto" />
                                </button>
                                <button
                                    onClick={next}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 text-slate-800 shadow-lg border border-slate-200 transition-all hover:scale-110 opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
                                    aria-label="Next product"
                                >
                                    <FaChevronRight className="mx-auto" />
                                </button>

                                {/* Dots Indicator */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                                    {productList.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setIdx(i)}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                i === idx ? "bg-sky-600 w-6" : "bg-slate-400 hover:bg-slate-500"
                                            }`}
                                            aria-label={`Go to product ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-between space-y-6">
                        <div className="space-y-6">
                            {/* Specifications */}
                            <dl className="space-y-4">
                                {Object.keys(specs).length > 0 ? (
                                    Object.entries(specs).map(([key, value]) => (
                                        <div key={key} className="flex gap-4 py-2 border-b border-slate-100 last:border-b-0">
                                            <dt className="text-slate-600 font-medium min-w-[140px]">{key}</dt>
                                            <dd className="text-slate-900 font-semibold">{value}</dd>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-slate-700 leading-relaxed">{current?.description}</p>
                                )}
                            </dl>

                            {/* Metadata Cards */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {current?.equipmentType && (
                                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                        <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">Type</p>
                                        <p className="text-slate-900 font-bold text-lg">{current.equipmentType}</p>
                                    </div>
                                )}

                                {current?.company && (
                                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                        <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">Manufacturer</p>
                                        <p className="text-slate-900 font-bold text-lg">{current.company}</p>
                                    </div>
                                )}

                                {"Origin" in specs && (
                                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                        <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">Origin</p>
                                        <p className="text-slate-900 font-bold text-lg">{specs.Origin}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            {current?.brochure && (
                                <Link
                                    href={current.brochure}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
                                >
                                    Download Brochure
                                </Link>
                            )}
                            <Link
                                href="/contact-us"
                                className="px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Page Indicator */}
                {productList.length > 1 && (
                    <div className="mt-6 text-center text-slate-600">
                        {idx + 1} of {productList.length}
                    </div>
                )}
            </div>
        </section>
    );
}

/** Parse key:value pairs from description */
function parseSpecs(desc?: string): Record<string, string> {
    if (!desc) return {};

    const specs: Record<string, string> = {};
    const pattern = /([\w/ -]+?):\s*([^,;]+)(?=[,;]|$)/g;
    let match;

    while ((match = pattern.exec(desc)) !== null) {
        specs[match[1].trim()] = match[2].trim();
    }

    return specs;
}