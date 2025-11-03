// components/ProductCard.tsx
"use client";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { Tag } from "lucide-react";
import { motion } from "framer-motion";

export interface ApiProduct {
    productlink: string;
    name: string;
    description: string;
    Brochure?: string;
}

export interface ExplicitProductProps {
    productImage?: string;
    productTitle?: string;
    productDescription?: string;
    productBrochure?: string;
}

export type ProductCardProps =
    | { product: ApiProduct; className?: string; onTagClick?: (tag: string, kind: "category" | "brand") => void }
    | (ExplicitProductProps & { className?: string; onTagClick?: (tag: string, kind: "category" | "brand") => void });

function parseMeta(desc?: string) {
    if (!desc) return { headline: "", category: "", brand: "", tags: [] as string[] };
    const parts = desc.split(",").map((s) => s.trim()).filter(Boolean);
    const brand = parts.length >= 2 ? parts[parts.length - 1] : "";
    const category = parts.length >= 2 ? parts[parts.length - 2] : parts[0] ?? "";
    const headline = parts[0] ?? "";
    const tags = parts;
    return { headline, category, brand, tags };
}

export default function ProductCard(props: ProductCardProps) {
    const product = "product" in props ? props.product : undefined;
    const className = "className" in props ? props.className : undefined;
    const onTagClick = "onTagClick" in props ? props.onTagClick : undefined;

    const image = product?.productlink ?? (props as ExplicitProductProps).productImage ?? "";
    const title = product?.name ?? (props as ExplicitProductProps).productTitle ?? "Untitled Product";
    const description = product?.description ?? (props as ExplicitProductProps).productDescription ?? "";
    const brochure = product?.Brochure ?? (props as ExplicitProductProps).productBrochure;

    const meta = parseMeta(description);
    const [imgOk, setImgOk] = React.useState(true);

    return (
        <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={[
                "group relative flex w-full flex-col overflow-hidden rounded-2xl bg-white",
                "shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-xl focus-within:shadow-xl",
                className ?? "",
            ].join(" ")}
            aria-label={title}
            data-brand={meta.brand || undefined}
            data-category={meta.category || undefined}
        >
            {/* Image: fill container, no extra padding; responsive via aspect ratio */}
            <div className="relative w-full overflow-hidden bg-slate-50 aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9]">
                {imgOk && image ? (
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        onError={() => setImgOk(false)}
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
                {/* Title smaller per request */}
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug line-clamp-2 break-words">
                    {title}
                </h3>

                {/* Badges */}
                <div className="mt-2 flex flex-wrap gap-2">
                    {meta.category && (
                        <button
                            type="button"
                            onClick={onTagClick ? () => onTagClick(meta.category, "category") : undefined}
                            className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-50 px-2.5 py-1.5 text-[11px] sm:text-xs font-medium text-slate-800 hover:bg-slate-100"
                        >
                            <Tag className="h-3.5 w-3.5" /> <span className="truncate">{meta.category}</span>
                        </button>
                    )}
                    {meta.brand && (
                        <button
                            type="button"
                            onClick={onTagClick ? () => onTagClick(meta.brand, "brand") : undefined}
                            className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1.5 text-[11px] sm:text-xs font-medium text-blue-800 hover:bg-blue-100"
                        >
                            <Tag className="h-3.5 w-3.5" /> <span className="truncate">{meta.brand}</span>
                        </button>
                    )}
                </div>

                {/* Description (kept compact) */}
                {meta.headline && meta.headline !== meta.category ? (
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2 break-words">
                        {meta.headline}
                    </p>
                ) : description ? (
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2 break-words">
                        {description}
                    </p>
                ) : null}
            </div>

            {/* CTA */}
            <div className="mt-auto p-5 pt-0 sm:p-6 sm:pt-0">
                {brochure ? (
                    <a
                        href={brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w/full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
                        aria-label={`Download brochure for ${title}`}
                    >
                        <FaDownload className="text-sm" />
                        <span>Download Brochure</span>
                    </a>
                ) : (
                    <div className="inline-flex w/full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-500">
                        <FaDownload className="text-sm" />
                        <span>Brochure not available</span>
                    </div>
                )}
            </div>
        </motion.article>
    );
}
