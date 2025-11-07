// app/(site)/products/_components/ProductCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { Building2 } from "lucide-react";
import products from "@/app/data/product-api";

type ApiProduct = (typeof products)[number];

type ProductCardProps = {
    product: ApiProduct;
    className?: string;
};

export default function ProductCard({ product, className }: ProductCardProps) {
    const { productLink, name, description, brochure, company } = product;
    const [imgOk, setImgOk] = React.useState(true);

    return (
        <article
            className={[
                "group relative flex h-full min-h-[420px] sm:min-h-[440px] lg:min-h-[470px] flex-col overflow-hidden rounded-2xl bg-white",
                "shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-lg focus-within:shadow-lg",
                className ?? "",
            ].join(" ")}
            aria-label={name}
        >
            {/* Image */}
            <div className="relative w-full overflow-hidden bg-slate-50 aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9]">
                {imgOk && productLink ? (
                    <Image
                        src={productLink}
                        alt={name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        onError={() => setImgOk(false)}
                        priority={false}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-slate-400">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                            <rect x="3" y="3" width="18" height="14" rx="2" ry="2" />
                            <circle cx="8" cy="8" r="1.5" />
                            <path d="M21 21l-6-6-3 3-6-6-3 3" />
                        </svg>
                    </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-start p-5 sm:p-6">
                <div className="flex flex-col gap-2 sm:gap-2.5">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug line-clamp-2 break-words">
                        {name}
                    </h3>

                    {company ? (
                        <span
                            className="
                inline-flex w-fit items-center gap-2 rounded-full
                border border-indigo-200 bg-indigo-50/80 text-indigo-800
                px-3 py-1 text-[11px] sm:text-xs font-medium
                ring-1 ring-inset ring-indigo-100 shadow-[0_1px_0_rgba(99,102,241,0.15)]
              "
                            aria-label={`Company: ${company}`}
                        >
              <Building2 className="h-3.5 w-3.5" aria-hidden />
              <span className="truncate">{company}</span>
            </span>
                    ) : null}

                    {description ? (
                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 break-words">
                            {description}
                        </p>
                    ) : null}
                </div>
            </div>

            {/* CTA */}
            <div className="mt-auto p-5 pt-0 sm:p-6 sm:pt-0">
                {brochure ? (
                    <a
                        href={brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
                        aria-label={`Download brochure for ${name}`}
                    >
                        <FaDownload className="text-sm" />
                        <span>Download Brochure</span>
                    </a>
                ) : (
                    <div className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-500">
                        <FaDownload className="text-sm" />
                        <span>Brochure not available</span>
                    </div>
                )}
            </div>
        </article>
    );
}
