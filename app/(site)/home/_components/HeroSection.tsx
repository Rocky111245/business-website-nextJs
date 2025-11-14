"use client";

import Link from "next/link";
import { Activity, Users, Award, Landmark, Wrench } from "lucide-react";
import {playfair} from "@/app/components/fonts";

export default function HeroVariation() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-white">
            {/* Background Tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-emerald-50/40 to-sky-50/60" />

            {/* Background Effects */}
            <div className="absolute inset-0 opacity-25">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl animate-pulse" />
                <div
                    className="absolute top-1/2 left-1/3 w-64 h-64 bg-sky-200 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
            </div>

            {/* Diagonal Overlays */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 80%)" }}
            />
            <div
                className="absolute inset-0 bg-gradient-to-tl from-emerald-50/30 to-transparent"
                style={{ clipPath: "polygon(0 100%, 100% 80%, 100% 100%, 0 100%)" }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-2 sm:px-4 lg:px-8 py-10 lg:py-5">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-in">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full shadow-sm">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                            <span className="text-emerald-700 text-sm font-medium tracking-wider">
                SINCE 1982 • EXCELLENCE
              </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                                <span className={`${playfair.className} tracking-wide text-slate-900`}>Evolution</span>

                                <span className="block text-[#782B90]">
    Medical Technologies
  </span>
                            </h1>


                            <div className="flex items-center gap-3">
                                <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full" />
                                <p className="text-xl sm:text-2xl text-slate-600 font-light">
                                    Medical Technology. Delivered.
                                </p>
                            </div>
                        </div>

                        {/* Company summary (generic) */}
                        <div className="space-y-3 text-slate-700">
                            <p className="text-xl leading-relaxed">
                                We are one of Bangladesh’s oldest biomedical distributors, active since 1982.
                                Evolution Medical Technologies Ltd focuses on bio-medical devices, while our sister
                                company, National Trading Syndicate Ltd. concentrates on specialized pharmaceuticals.
                            </p>
                            <p className="text-lg leading-relaxed text-slate-600">
                                We maintain a nationwide sales network and a trained service team—supporting
                                government, non-government, and commercial customers through long-standing
                                participation in public tenders.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/products?cat=dental"
                                className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/20 hover:shadow-indigo-600/30 transition-all duration-300 hover:scale-105"
                            >
                                Explore Portfolio
                                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
                            </Link>

                            <Link
                                href="/contact-us"
                                className="px-8 py-4 bg-white hover:bg-emerald-50 text-slate-800 font-semibold rounded-lg border-2 border-emerald-200 hover:border-emerald-300 shadow-md transition-all duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Focus areas chips */}
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Ophthalmology",
                                "Dental Equipment",
                                "ICU Equipment",
                                "Neonatal/Pediatric",
                                "Nephrology",
                                "Cardiology",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="px-4 py-2 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-slate-700 text-sm rounded-full shadow-sm transition-all duration-300"
                                >
                  {item}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Metrics / Proof points */}
                    <div className="space-y-6 animate-fade-in-delay">
                        <div className="grid grid-cols-2 gap-6">
                            <MetricCard
                                icon={Activity}
                                value="40+"
                                label="Years in Biomedical Distribution"
                                colors="from-indigo-50 to-white border-indigo-200 hover:border-indigo-300"
                                iconBg="from-indigo-600 to-indigo-700"
                                iconColor="text-white"
                                accentBg="from-indigo-100"
                            />

                            <MetricCard
                                icon={Users}
                                value="Nationwide"
                                label="Sales Network & Service Team"
                                colors="from-emerald-50 to-white border-emerald-200 hover:border-emerald-300"
                                iconBg="from-emerald-600 to-emerald-700"
                                iconColor="text-white"
                                accentBg="from-emerald-100"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <MetricCard
                                icon={Landmark}
                                value="Decades"
                                label="Government & NGO Tender Expertise"
                                colors="from-sky-50 to-white border-sky-200 hover:border-sky-300"
                                iconBg="from-sky-600 to-sky-700"
                                iconColor="text-white"
                                accentBg="from-sky-100"
                            />

                            {/* Generic partnerships metric (no specific brand) */}
                            <MetricCard
                                icon={Award}
                                value="25+ Years"
                                label="Long-Term OEM Partnerships"
                                colors="from-violet-50 to-white border-violet-200 hover:border-violet-300"
                                iconBg="from-violet-600 to-violet-700"
                                iconColor="text-white"
                                accentBg="from-violet-100"
                            />
                        </div>

                        {/* Service commitment stripe */}
                        <div className="p-6 bg-white border-2 border-slate-200 rounded-xl shadow-md">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-md">
                                    <Wrench className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-semibold">After-Sales Service</p>
                                    <p className="text-slate-600 text-sm">
                                        Product-trained engineers • Continuous upskilling • Nationwide response
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-24 sm:h-32 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,60 1200,80 L1200,120 L0,120 Z" />
                </svg>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
      `}</style>
        </section>
    );
}

/** Small metric card helper */
function MetricCard({
                        icon: Icon,
                        value,
                        label,
                        colors,
                        iconBg,
                        iconColor,
                        accentBg,
                    }: {
    icon: any;
    value: string;
    label: string;
    colors: string;
    iconBg: string;
    iconColor: string;
    accentBg: string;
}) {
    return (
        <div
            className={`group relative p-8 bg-gradient-to-br ${colors} border-2 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg`}
        >
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${accentBg} to-transparent rounded-bl-3xl rounded-tr-2xl`} />
            <div className="relative">
                <div className={`inline-flex p-3 bg-gradient-to-br ${iconBg} rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-1">{value}</div>
                <div className="text-sm text-slate-600 font-medium">{label}</div>
            </div>
        </div>
    );
}
