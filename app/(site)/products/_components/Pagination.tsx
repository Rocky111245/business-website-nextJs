"use client";
import React from "react";

interface PaginationProps {
    page: number;               // 1-based
    totalPages: number;
    onChange: (page: number) => void;
    className?: string;
    siblingCount?: number;      // numbers around current page
    boundaryCount?: number;     // numbers at the ends
}

function range(start: number, end: number) {
    return Array.from({ length: Math.max(0, end - start + 1) }, (_, i) => start + i);
}

const DOTS = "..." as const;
type PageItem = number | typeof DOTS;

export default function Pagination({
                                       page,
                                       totalPages,
                                       onChange,
                                       className,
                                       siblingCount = 1,
                                       boundaryCount = 1,
                                   }: PaginationProps) {
    if (totalPages <= 1) return null;

    const startPages = range(1, Math.min(boundaryCount, totalPages));
    const endPages = range(Math.max(totalPages - boundaryCount + 1, boundaryCount + 1), totalPages);

    const leftSibling = Math.max(page - siblingCount, Math.max(...startPages) + 1);
    const rightSibling = Math.min(page + siblingCount, Math.min(...endPages) - 1);

    const showLeftDots = leftSibling > Math.max(...startPages) + 1;
    const showRightDots = rightSibling < Math.min(...endPages) - 1;

    const middlePages = range(leftSibling, rightSibling);
    const items: PageItem[] = [
        ...startPages,
        ...(showLeftDots ? [DOTS] : []),
        ...middlePages,
        ...(showRightDots ? [DOTS] : []),
        ...endPages,
    ];

    const btn =
        "px-3 py-2 rounded-lg border text-sm bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed";

    return (
        <nav
            className={["mt-8 flex items-center justify-center gap-2", className || ""].join(" ")}
            role="navigation"
            aria-label="Pagination"
        >
            <button
                type="button"
                onClick={() => onChange(Math.max(1, page - 1))}
                disabled={page === 1}
                className={btn}
                aria-label="Previous page"
            >
                Prev
            </button>

            {items.map((it, idx) =>
                it === DOTS ? (
                    <span key={`dots-${idx}`} className="px-2 text-slate-500 select-none">…</span>
                ) : (
                    <button
                        key={it}
                        type="button"
                        onClick={() => onChange(it)}
                        aria-current={page === it ? "page" : undefined}
                        className={[btn, page === it ? "border-blue-600 text-blue-700 font-semibold" : "border-slate-200 text-slate-700"].join(" ")}
                    >
                        {it}
                    </button>
                )
            )}

            <button
                type="button"
                onClick={() => onChange(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className={btn}
                aria-label="Next page"
            >
                Next
            </button>
        </nav>
    );
}
