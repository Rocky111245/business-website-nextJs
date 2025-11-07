// app/(site)/products/_components/ProductsClient.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductCard from "@/app/(site)/products/_components/ProductCard";
import Pagination from "./Pagination";
import catalog from "@/app/data/product-api";
import ProductsFilterPanel from "./ProductsFilterPanel";

// Derive item type straight from the single source
type Product = (typeof catalog)[number];

// 10–15 per page depending on viewport width
function getPageSizeByWidth(w: number) {
    if (w >= 1280) return 15;
    if (w >= 768) return 12;
    return 10;
}

// ✅ Local, pure helper (replaces ProductsFilter.ts)
function buildFilterOptions(products: ReadonlyArray<Product>) {
    const companies = new Set<string>();
    const equipmentTypes = new Set<string>();
    for (const p of products) {
        companies.add(p.company);
        equipmentTypes.add(p.equipmentType);
    }
    return {
        companies: Array.from(companies).sort(),
        equipmentTypes: Array.from(equipmentTypes).sort(),
    };
}

export default function ProductsClient() {
    // Single source of truth
    const products = catalog as ReadonlyArray<Product>;

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Page from URL (fallback to 1)
    const pageParam = Number(searchParams.get("page") || "1");
    const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;

    // Hydration-safe default; becomes responsive post-mount
    const [pageSize, setPageSize] = useState<number>(12);
    useEffect(() => {
        const compute = () => setPageSize(getPageSizeByWidth(window.innerWidth));
        compute();
        window.addEventListener("resize", compute);
        return () => window.removeEventListener("resize", compute);
    }, []);

    // Filters (only Company and Equipment Type, plus Search)
    const [selectedCompany, setSelectedCompany] = useState<string>("All");
    const [selectedType, setSelectedType] = useState<string>("All");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const contentTopRef = useRef<HTMLDivElement | null>(null);

    // Build filter options directly from source (no inference)
    const { companies, equipmentTypes } = useMemo(
        () => buildFilterOptions(products),
        [products]
    );

    // Apply filters + search
    const filtered = useMemo(() => {
        const q = searchTerm.toLowerCase();
        return products.filter((p) => {
            const inSearch =
                !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
            const inCompany = selectedCompany === "All" || p.company === selectedCompany;
            const inType = selectedType === "All" || p.equipmentType === selectedType;
            return inSearch && inCompany && inType;
        });
    }, [products, searchTerm, selectedCompany, selectedType]);

    // Pagination
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const clampedPage = Math.min(page, totalPages);
    const start = (clampedPage - 1) * pageSize;
    const end = Math.min(start + pageSize, total);
    const pageItems = filtered.slice(start, end);

    // 1-based for display (avoid SSR/CSR mismatch like "0–X")
    const startDisplay = total === 0 ? 0 : start + 1;

    const setUrlPage = (nextPage: number) => {
        const params = new URLSearchParams(searchParams);
        if (nextPage <= 1) params.delete("page");
        else params.set("page", String(nextPage));
        router.replace(params.size ? `${pathname}?${params}` : pathname, { scroll: false });
    };

    const handlePageChange = (next: number) => {
        setUrlPage(next);
        if (contentTopRef.current) {
            contentTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const onCompanyChange = (v: string) => { setSelectedCompany(v); setUrlPage(1); };
    const onTypeChange = (v: string) => { setSelectedType(v); setUrlPage(1); };
    const onSearchChange = (v: string) => { setSearchTerm(v); setUrlPage(1); };
    const clearFilters = () => {
        setSelectedCompany("All");
        setSelectedType("All");
        setSearchTerm("");
        setUrlPage(1);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <div className="relative isolate overflow-hidden bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600">
                <div className="container mx-auto px-4">
                    <header className="py-3 lg:py-4 text-white">
                        <nav className="text-sm/6 mb-4" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 opacity-90">
                                <li><Link href="/" className="hover:underline">Home</Link></li>
                                <li aria-hidden="true">/</li>
                                <li className="opacity-90">Products</li>
                            </ol>
                        </nav>
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">Explore Our Products</h1>
                                <p className="my-4 text-white/90">
                                    High-quality medical equipment from trusted manufacturers. Filter, search, and compare to find exactly what you need.
                                </p>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
                </div>
            </div>

            {/* Main */}
            <div className="mx-auto px-8 py-8 flex flex-col min-h-screen">
                <div ref={contentTopRef} />
                <main className="mt-2 grid gap-6 lg:grid-cols-[400px_1fr] flex-1">
                    {/* Sidebar */}
                    <ProductsFilterPanel
                        companies={companies}
                        equipmentTypes={equipmentTypes}
                        selectedCompany={selectedCompany}
                        selectedType={selectedType}
                        searchTerm={searchTerm}
                        onCompanyChange={onCompanyChange}
                        onTypeChange={onTypeChange}
                        onSearchChange={onSearchChange}
                        clearFilters={clearFilters}
                    />

                    {/* Content */}
                    <section className="flex flex-col min-h-[60vh]">
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-slate-600">
                                Showing {startDisplay}–{end} of {total} products
                                <span className="text-slate-400"> &nbsp;•&nbsp; Page {clampedPage} of {totalPages}</span>
                            </p>
                        </div>

                        <div
                            className="
                grid items-stretch gap-4
                grid-cols-[repeat(auto-fill,minmax(250px,1fr))]
                sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]
                lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
                2xl:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]
              "
                        >
                            {pageItems.length ? (
                                pageItems.map((product, i) => (
                                    <ProductCard key={`${product.name}-${start + i}`} product={product} />
                                ))
                            ) : (
                                <div className="col-span-full text-center py-12">
                                    <div className="text-slate-400 mb-4">
                                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">No products found</h3>
                                    <p className="text-slate-600 mb-4">Try adjusting your filters or search terms.</p>
                                    <button
                                        onClick={clearFilters}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>

                        <Pagination
                            page={clampedPage}
                            totalPages={totalPages}
                            onChange={handlePageChange}
                            className="mt-10"
                        />
                    </section>
                </main>
            </div>
        </div>
    );
}
