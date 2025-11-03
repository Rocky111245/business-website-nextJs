"use client";


// ========================= File: components/Specialties.tsx =========================
import React from "react";
import { Eye, Syringe, Activity, ShieldAlert, Droplet } from "lucide-react";


/**
 * Specialties (full-width rows)
 * - Modern, larger, sleek icon chips (no playful/babyish glyphs)
 * - Neutral typography, strong contrast
 * - Each item spans container width; great for scanning
 */
export function Specialties() {
    const items: { label: string; icon: React.ElementType; accent: string }[] = [
        { icon: Eye, label: "Ophthalmology", accent: "from-indigo-600 to-sky-500" },
        { icon: Syringe, label: "Dental Treatment Delivery System", accent: "from-fuchsia-600 to-pink-500" },
        { icon: Activity, label: "ICU Equipment", accent: "from-cyan-600 to-blue-500" },
        { icon: ShieldAlert, label: "Neonatal/Pediatric", accent: "from-amber-600 to-orange-500" },
        { icon: Droplet, label: "Nephrology", accent: "from-emerald-600 to-teal-500" },
    ];


    return (
        <section aria-labelledby="specialties-title" className="w-full">
            <header className="mb-7">
                <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-800 text-sm sm:text-base font-medium">
                    We Specialize in 5 Branches
                </p>
                <h2 id="specialties-title" className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                    Comprehensive medical equipment solutions across multiple specialties
                </h2>
            </header>


            <div className="space-y-4">
                {items.map(({ icon: Icon, label, accent }) => (
                    <article
                        key={label}
                        className="group relative flex items-center gap-5 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm hover:shadow-lg transition-all"
                    >
                        {/* left accent bar */}
                        <span className={`absolute left-0 top-0 h-full w-[6px] rounded-l-2xl bg-gradient-to-b ${accent}`} aria-hidden />


                        {/* modern icon chip */}
                        <span
                            className={`relative grid place-items-center rounded-2xl p-3.5 bg-gradient-to-br ${accent} text-white shadow-md
ring-1 ring-white/30 after:absolute after:inset-0 after:rounded-2xl after:ring-1 after:ring-white/20 after:pointer-events-none`}
                        >
<Icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.75} />
</span>


                        <div className="flex-1 min-w-0">
                            <p className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">{label}</p>
                        </div>
                    </article>
                ))}
            </div>


            <div className="mt-8">
                <p className="text-slate-600 mb-3">Explore our comprehensive range of medical equipment</p>
                <a
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-sky-700 transition"
                >
                    View All Products
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
            </div>
        </section>
    );
}