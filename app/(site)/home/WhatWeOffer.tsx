// ========================= File: components/WhatWeOffer.tsx =========================
import React from "react";
import { CheckCircle2 } from "lucide-react";


/** Simple, stylized bullet list (sits alongside specialties or standalone) */
export function WhatWeOffer() {
    const bullets = [
        { title: "Responsive Support", desc: "Skilled engineers ready to help during business hours." },
        { title: "Expertise and Experience", desc: "20+ years of medical equipment expertise for precise troubleshooting." },
        { title: "Extended Warranty", desc: "10+ years of warranty on many products for long-term reliability." },
        { title: "Comprehensive After-Sales Service", desc: "Thorough support and servicing to maintain performance." },
        { title: "Global Quality Standards", desc: "Sourcing only from globally renowned manufacturers." },
        { title: "Nationwide Delivery", desc: "Fast, reliable delivery services across the nation." },
        { title: "Expert Communication", desc: "Engineers collaborate closely with clinicians to meet needs." },
        { title: "Innovative Solutions", desc: "Technologies that transform care and outcomes." },
    ];


    return (
        <section aria-labelledby="offer-title" className="w-full">
            <header className="mb-6">
                <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-800 text-sm sm:text-base font-medium">What We Offer</p>
                <h2 id="offer-title" className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">Simple, reliable support with a focus on outcomes</h2>
            </header>
            <ul className="space-y-4">
                {bullets.map((b) => (
                    <li key={b.title} className="flex gap-3">
                        <span className="mt-1 shrink-0 text-sky-600"><CheckCircle2 className="w-5 h-5" /></span>
                        <div>
                            <p className="font-semibold text-slate-900">{b.title}</p>
                            <p className="text-slate-600 text-sm mt-0.5">{b.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}