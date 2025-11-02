"use client";

import { useState } from "react";
import ProductCard from "@/app/components/ProductCard";
import Pagination from "@/app/components/Pagination";
import { GoEye } from "react-icons/go";
import { TbDental } from "react-icons/tb";
import { BsLungs } from "react-icons/bs";
import { FaBaby } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";

type Product = {
    name: string;
    description: string;
    productlink: string;
    Brochure?: string;
};

type Props = {
    initialProducts: Product[];
};

export default function ProductsClient({ initialProducts }: Props) {
    const [displayedProducts, setDisplayedProducts] = useState<Product[]>(initialProducts);
    const [activeCard, setActiveCard] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const productsPerPage = 16;

    const categories = [
        { id: "Ophthalmology", name: "Ophthalmology", icon: <GoEye className="text-3xl" />, color: "from-blue-500 to-cyan-600", description: "Eye Care Equipment" },
        { id: "ICU", name: "ICU Equipment", icon: <BsLungs className="text-3xl" />, color: "from-red-500 to-pink-600", description: "Intensive Care Units" },
        { id: "Dental Instruments", name: "Dental Instruments", icon: <TbDental className="text-3xl" />, color: "from-green-500 to-emerald-600", description: "Dental Treatment Systems" },
        { id: "Neonatal/Pediatric", name: "Neonatal/Pediatric", icon: <FaBaby className="text-3xl" />, color: "from-purple-500 to-violet-600", description: "Child & Infant Care" },
        { id: "Nephrology", name: "Nephrology", icon: <GiKidneys className="text-3xl" />, color: "from-orange-500 to-amber-600", description: "Kidney Care Equipment" },
    ] as const;

    const filters: Record<string, (p: Product) => boolean> = {
        Ophthalmology: (p) => /eye care|topcon/i.test(p.name) || /eye care|topcon/i.test(p.description),
        ICU: (p) => /intensive care unit|icu/i.test(p.name) || /intensive care unit|icu/i.test(p.description),
        "Dental Instruments": (p) => /dental/i.test(p.name) || /dental/i.test(p.description),
        "Neonatal/Pediatric": (p) => /incubator|intensive care unit/i.test(p.name) || /incubator|intensive care unit/i.test(p.description),
        Nephrology: (p) => /nephrology|haemodialysis|kidney|renal/i.test(p.name) || /nephrology|haemodialysis|kidney|renal/i.test(p.description),
    };

    const handleCardClick = (cardId: string) => {
        if (activeCard === cardId) {
            setActiveCard("");
            setDisplayedProducts(initialProducts);
        } else {
            setActiveCard(cardId);
            setDisplayedProducts(initialProducts.filter(filters[cardId] ?? (() => false)));
        }
        setCurrentPage(1);
    };

    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const current = displayedProducts.slice(indexOfFirst, indexOfLast);

    const handlePageChange = (n: number) => {
        setCurrentPage(n);
        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="section-container">
            {/* Category Filters */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Browse by Category</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {categories.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => handleCardClick(c.id)}
                            className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 transform hover:scale-105 ${
                                activeCard === c.id ? "shadow-2xl ring-4 ring-primary-500" : "shadow-lg hover:shadow-xl"
                            }`}
                            aria-pressed={activeCard === c.id}
                            type="button"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-90 group-hover:opacity-100`} />
                            <div className="relative z-10 text-white flex flex-col items-center text-center space-y-3">
                                <div className="transform group-hover:scale-110">{c.icon}</div>
                                <h3 className="font-bold text-lg">{c.name}</h3>
                                <p className="text-sm opacity-90">{c.description}</p>
                            </div>
                            {activeCard === c.id && (
                                <div className="absolute top-2 right-2 z-20" aria-hidden>
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {activeCard && (
                    <div className="text-center mt-6">
                        <button
                            type="button"
                            onClick={() => {
                                setActiveCard("");
                                setDisplayedProducts(initialProducts);
                                setCurrentPage(1);
                            }}
                            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-lg"
                        >
                            Show All Products
                        </button>
                    </div>
                )}
            </div>

            {/* Products Grid */}
            {current.length > 0 ? (
                <>
                    <div className="mb-8">
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-gray-800">{indexOfFirst + 1}</span> to{" "}
                            <span className="font-semibold text-gray-800">{Math.min(indexOfLast, displayedProducts.length)}</span>{" "}
                            of <span className="font-semibold text-gray-800">{displayedProducts.length}</span> products
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                        {current.map((p, i) => (
                            <ProductCard
                                key={i}
                                productImage={p.productlink}
                                productTitle={p.name}
                                productDescription={p.description}
                                productBrochure={p.Brochure}
                            />
                        ))}
                    </div>

                    {displayedProducts.length > productsPerPage && (
                        <Pagination
                            productsPerPage={productsPerPage}
                            totalProducts={displayedProducts.length}
                            currentPage={currentPage}
                            paginate={handlePageChange}
                        />
                    )}
                </>
            ) : (
                <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-4">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Found</h3>
                    <p className="text-gray-600 mb-6">No products match your current filter selection.</p>
                    <button
                        type="button"
                        onClick={() => {
                            setActiveCard("");
                            setDisplayedProducts(initialProducts);
                            setCurrentPage(1);
                        }}
                        className="btn-primary"
                    >
                        View All Products
                    </button>
                </div>
            )}

            {/* Partners */}
            <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Manufacturing Partners</h3>
                <div className="flex justify-center">
                    <img
                        src="https://ik.imagekit.io/emtbd/emt_images/images/Capture.JPG"
                        alt="Manufacturing Partners"
                        className="max-w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}
