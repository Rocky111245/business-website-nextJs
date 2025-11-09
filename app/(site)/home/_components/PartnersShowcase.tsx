"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useId } from "react";

export default function PartnersSection() {
    const pid = useId().replace(/:/g, "");
    const patternId = `ecg-${pid}`;
    const gradId = `grad-${pid}`;

    return (
        <section aria-labelledby="partners-title" className="relative w-full overflow-hidden bg-white">
            <BackgroundSVG patternId={patternId} gradId={gradId} />

            <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
                {/* Section header */}
                <header className="mx-auto max-w-5xl text-center mb-10 lg:mb-14">
                    <h2
                        id="partners-title"
                        className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                    >
                        Trusted Partnerships. Clinical Impact.
                    </h2>
                    <p className="mt-4 text-slate-600 text-base sm:text-lg">
                        Evidence-based devices, field-proven service, and a clinician-first delivery model.
                    </p>
                </header>

                {/* Content grid */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-stretch">
                    {/* Left: Partner visuals — bigger containers, object-contain (no crop) */}
                    <div className="lg:col-span-6 xl:col-span-7">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-1">
                            {/* Card 1 */}
                            <figure className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-md transition-all hover:shadow-xl">
                                {/* Taller container + containment */}
                                <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[420px] xl:h-[460px] bg-slate-50 flex items-center justify-center">
                                    <Image
                                        src="https://ik.imagekit.io/emtbd/emt_images/images/Screenshot_2023-02-07_044037.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675773664532"
                                        alt="Trusted Healthcare Partner"
                                        fill
                                        sizes="(min-width: 1280px) 820px, (min-width: 1024px) 700px, 100vw"
                                        className="object-contain p-4 md:p-6"
                                        priority={false}
                                    />
                                </div>
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-50/30 via-transparent to-emerald-50/50 opacity-0 transition-opacity group-hover:opacity-100" />
                            </figure>

                            {/* Card 2 */}
                            <figure className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-md transition-all hover:shadow-xl">
                                <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[420px] xl:h-[460px] bg-slate-50 flex items-center justify-center">
                                    <Image
                                        src="https://ik.imagekit.io/emtbd/emt_images/images/topcon.png?updatedAt=1678505026033"
                                        alt="Topcon"
                                        fill
                                        sizes="(min-width: 1280px) 820px, (min-width: 1024px) 700px, 100vw"
                                        className="object-contain p-4 md:p-6"
                                        priority={false}
                                    />
                                </div>
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-50/30 via-transparent to-teal-50/50 opacity-0 transition-opacity group-hover:opacity-100" />
                            </figure>
                        </div>
                    </div>

                    {/* Right: shorter, tighter copy + bullets + stats */}
                    <div className="lg:col-span-6 xl:col-span-5 flex">
                        <div className="my-auto">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Partnerships that elevate care delivery
                            </h3>

                            <p className="mt-4 text-slate-700 text-lg">
                                For 40+ years we’ve delivered evidence-based technology to hospitals and clinics—helping
                                teams work safer, diagnose faster, and improve outcomes across ophthalmology, ICU,
                                neonatal/pediatric, nephrology, and dental care.
                            </p>

                            <p className="mt-3 text-slate-700 text-lg">
                                Our direct model uses sales engineers who also perform installs, calibration, training,
                                and first-line repairs—tightening feedback between clinicians and OEMs and shortening time to resolution.
                            </p>

                            <ul className="mt-6 space-y-3 text-slate-800">
                                {[
                                    "Regulatory-compliant devices with proven clinical efficacy",
                                    "Seamless lifecycle support—installation, calibration, training",
                                    "Nationwide service network with rapid response SLAs",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                    <span
                        className={[
                            "mt-2 inline-block h-2.5 w-2.5 rounded-full",
                            i === 0 ? "bg-emerald-500" : i === 1 ? "bg-sky-500" : "bg-violet-500",
                        ].join(" ")}
                    />
                                        <span className="text-[15px] leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <dl className="mt-7 grid grid-cols-3 gap-4 sm:gap-6">
                                <Stat label="Avg. Uptime" value="99.4%" />
                                <Stat label="Installs" value="2,400+" />
                                <Stat label="1st-line Response" value="&lt; 6 hrs" />
                            </dl>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <Link
                                    href="/products"
                                    className="rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:from-sky-700 hover:to-emerald-700"
                                >
                                    Explore Products
                                </Link>
                                <Link
                                    href="/contact-us"
                                    className="rounded-xl border border-slate-300 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition-colors hover:bg-white"
                                >
                                    Talk to an Engineer
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* --------------------------------- Helpers -------------------------------- */

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-center shadow-sm backdrop-blur">
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</dt>
            <dd className="mt-1 text-xl font-extrabold text-slate-900">{value}</dd>
        </div>
    );
}

function BackgroundSVG({ patternId, gradId }: { patternId: string; gradId: string }) {
    return (
        <Fragment>
            {/* soft color glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 -left-24 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-sky-100 via-teal-100 to-emerald-100 blur-3xl opacity-70" />
                <div className="absolute -bottom-40 -right-20 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-cyan-100 via-sky-100 to-indigo-100 blur-3xl opacity-70" />
            </div>

            {/* ECG pattern */}
            <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-30">
                <defs>
                    <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>

                    <pattern id={patternId} x="0" y="0" width="180" height="90" patternUnits="userSpaceOnUse">
                        <path
                            d="M0 60h24l10-12 18 72 10-84 18 60 12-40 18 40h24"
                            stroke={`url(#${gradId})`}
                            strokeWidth="1.3"
                            strokeDasharray="6 6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>

            {/* soft white veil */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-white/10" />
        </Fragment>
    );
}
