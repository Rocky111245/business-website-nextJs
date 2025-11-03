"use client";
import React, { useMemo, useState } from "react";
import ProductCard, { ApiProduct } from "@/app/(site)/products/_components/ProductCard";
import { extractFilterOptions } from "./ProductsFilter";

interface ProductsClientProps {
    initialProducts: ApiProduct[];
}

// Local extension so we can read company/equipmentType even if ApiProduct doesn't declare them yet.
type ProductWithMeta = ApiProduct & {
    company?: string;
    equipmentType?: string;
    description?: string;
};

export default function ProductsClient({ initialProducts }: ProductsClientProps) {
    const products = initialProducts as ProductWithMeta[];

    const [selectedCompany, setSelectedCompany] = useState<string>("All");
    const [selectedType, setSelectedType] = useState<string>("All");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filterOptions = useMemo(() => extractFilterOptions(products), [products]);

    const filteredProducts = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();

        return products.filter((p) => {
            const company = (p.company ?? "").trim();
            const type = (p.equipmentType ?? "").trim();


            const matchesSearch =
                term === "" ||
                p.name.toLowerCase().includes(term) ||
                (p.description ?? "").toLowerCase().includes(term);

            // Company filter (explicit fields preferred; falls back to empty string)
            const matchesCompany = selectedCompany === "All" || company === selectedCompany;

            // Equipment Type filter
            const matchesType = selectedType === "All" || type === selectedType;

            // Decision: AND logic (typical UX expectation: both filters must match)
            return matchesSearch && matchesCompany && matchesType;
        });
    }, [products, selectedCompany, selectedType, searchTerm]);

    const handleTagClick = (tag: string, kind: "category" | "brand") => {
        if (kind === "brand") {
            setSelectedCompany(tag);
        } else {
            setSelectedType(tag);
        }
    };

    const clearFilters = () => {
        setSelectedCompany("All");
        setSelectedType("All");
        setSearchTerm("");
    };

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Discover our comprehensive range of medical equipment and solutions from world-leading manufacturers.
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="md:col-span-2">
                            <label htmlFor="search" className="block text-sm font-medium text-slate-700 mb-2">
                                Search Products
                            </label>
                            <input
                                type="text"
                                id="search"
                                placeholder="Search by product name or description..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Company */}
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                                Company
                            </label>
                            <select
                                id="company"
                                value={selectedCompany}
                                onChange={(e) => setSelectedCompany(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="All">All Companies</option>
                                {filterOptions.companies.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Equipment Type */}
                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">
                                Equipment Type
                            </label>
                            <select
                                id="type"
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="All">All Equipment Types</option>
                                {filterOptions.equipmentTypes.map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Active Filters & Clear */}
                    <div className="flex flex-wrap items-center justify-between mt-4">
                        <div className="flex flex-wrap gap-2">
                            {selectedCompany !== "All" && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Company: {selectedCompany}
                                    <button onClick={() => setSelectedCompany("All")} className="ml-2 hover:text-blue-600">
                    ×
                  </button>
                </span>
                            )}
                            {selectedType !== "All" && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Type: {selectedType}
                                    <button onClick={() => setSelectedType("All")} className="ml-2 hover:text-green-600">
                    ×
                  </button>
                </span>
                            )}
                            {searchTerm && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  Search: {searchTerm}
                                    <button onClick={() => setSearchTerm("")} className="ml-2 hover:text-orange-600">
                    ×
                  </button>
                </span>
                            )}
                        </div>

                        {(selectedCompany !== "All" || selectedType !== "All" || searchTerm) && (
                            <button onClick={clearFilters} className="text-sm text-slate-600 hover:text-slate-800 underline">
                                Clear all filters
                            </button>
                        )}
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-slate-600">
                        Showing {filteredProducts.length} of {products.length} products
                    </p>
                </div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={`${product.name}-${index}`} product={product} onTagClick={handleTagClick} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-slate-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
        </div>
    );
}
