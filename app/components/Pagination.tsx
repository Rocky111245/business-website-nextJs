"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination({ productsPerPage, totalProducts, currentPage, paginate }) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const nums = Array.from({ length: totalPages }, (_, i) => i + 1);

    const visible = () => {
        if (totalPages <= 7) return nums;
        if (currentPage <= 4) return [...nums.slice(0, 5), "...", totalPages];
        if (currentPage >= totalPages - 3) return [1, "...", ...nums.slice(totalPages - 5)];
        return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
    };

    const goPrev = () => {
        if (currentPage > 1) paginate(currentPage - 1);
    };
    const goNext = () => {
        if (currentPage < totalPages) paginate(currentPage + 1);
    };

    return (
        <nav className="flex justify-center items-center space-x-2" aria-label="Pagination">
            <button
                onClick={goPrev}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                    currentPage === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white text-primary-600 hover:bg-primary-600 hover:text-white shadow-md"
                }`}
                aria-label="Previous page"
            >
                <FaChevronLeft className="text-sm" />
            </button>

            {visible().map((n, i) =>
                    n === "..." ? (
                        <span key={`d${i}`} className="px-3 py-2 text-gray-500">
            …
          </span>
                    ) : (
                        <button
                            key={n}
                            onClick={() => {
                                if (typeof n === "number") paginate(n);
                            }}
                            className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                                currentPage === n
                                    ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg scale-110"
                                    : "bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md"
                            }`}
                            aria-current={currentPage === n ? "page" : undefined}
                        >
                            {n}
                        </button>
                    )
            )}

            <button
                onClick={goNext}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                    currentPage === totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white text-primary-600 hover:bg-primary-600 hover:text-white shadow-md"
                }`}
                aria-label="Next page"
            >
                <FaChevronRight className="text-sm" />
            </button>
        </nav>
    );
}
