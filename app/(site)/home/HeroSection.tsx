"use client";

import { Activity, Users, Award } from "lucide-react";

export default function HeroVariation() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-white">
            {/* Background Tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-emerald-50/40 to-sky-50/60" />

            {/* Background Effects */}
            <div className="absolute inset-0 opacity-25">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sky-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Diagonal Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 80%)' }} />
            <div className="absolute inset-0 bg-gradient-to-tl from-emerald-50/30 to-transparent" style={{ clipPath: 'polygon(0 100%, 100% 80%, 100% 100%, 0 100%)' }} />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-in">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full shadow-sm">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                            <span className="text-emerald-700 text-sm font-medium tracking-wider">SINCE 1982 • EXCELLENCE</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                                Evolution
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600">
                                    Medical Technologies
                                </span>
                            </h1>

                            <div className="flex items-center gap-3">
                                <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full" />
                                <p className="text-xl sm:text-2xl text-slate-600 font-light">Medical Technology. Delivered.</p>
                            </div>
                        </div>

                        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                            Leading biomedical equipment distributor in Bangladesh with over three decades of excellence in delivering cutting-edge medical solutions.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/20 hover:shadow-indigo-600/30 transition-all duration-300 hover:scale-105">
                                Explore Products
                                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </button>

                            <button className="px-8 py-4 bg-white hover:bg-emerald-50 text-slate-800 font-semibold rounded-lg border-2 border-emerald-200 hover:border-emerald-300 shadow-md transition-all duration-300">
                                Contact Us
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {['Ophthalmology', 'Nephrology', 'ICU Equipment', 'Cardiology', 'Neonatal/Pediatric', 'Dental Equipment'].map((item) => (
                                <span key={item} className="px-4 py-2 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-slate-700 text-sm rounded-full shadow-sm transition-all duration-300">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Stats */}
                    <div className="space-y-6 animate-fade-in-delay">
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Activity, value: '35+', label: 'Years Experience', colors: 'from-indigo-50 to-white border-indigo-200 hover:border-indigo-300', iconBg: 'from-indigo-600 to-indigo-700', iconColor: 'text-white', accentBg: 'from-indigo-100' },
                                { icon: Users, value: '32', label: 'Team Members', colors: 'from-emerald-50 to-white border-emerald-200 hover:border-emerald-300', iconBg: 'from-emerald-600 to-emerald-700', iconColor: 'text-white', accentBg: 'from-emerald-100' }
                            ].map((stat) => (
                                <div key={stat.label} className={`group relative p-8 bg-gradient-to-br ${stat.colors} border-2 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg`}>
                                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.accentBg} to-transparent rounded-bl-3xl rounded-tr-2xl`} />
                                    <div className="relative">
                                        <div className={`inline-flex p-3 bg-gradient-to-br ${stat.iconBg} rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                                            <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                                        </div>
                                        <div className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                        <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-white border-2 border-slate-200 rounded-xl shadow-md">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-md">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-semibold">Trusted Partner</p>
                                    <p className="text-slate-600 text-sm">Government & Private Healthcare Institutions</p>
                                </div>
                            </div>
                        </div>

                        {/* Medical Certifications Badge */}
                        <div className="p-6 bg-gradient-to-br from-indigo-50 to-emerald-50 border-2 border-indigo-200 rounded-xl shadow-md">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-indigo-700 font-semibold text-sm mb-1">Quality Assured</p>
                                    <p className="text-slate-600 text-xs">International Standards • Premium Care</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                                        <span className="text-white font-bold text-xs">ISO</span>
                                    </div>
                                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                                        <span className="text-white font-bold text-xs">FDA</span>
                                    </div>
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