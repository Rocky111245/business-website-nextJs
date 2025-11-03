"use client";

import Image from "next/image";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVisionShowcase() {
    const missionImg =
        "https://ik.imagekit.io/emtbd/emt_images/images/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673968937853";
    const visionImg =
        "https://ik.imagekit.io/emtbd/emt_images/images/analysis-2030265.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673883338760";

    return (
        <section className="relative isolate overflow-hidden">
            {/* Soft blue backdrop with radial glow */}
            <div className="absolute inset-0 -z-10 bg-sky-50" />
            <div
                className="absolute inset-0 -z-10 opacity-70"
                style={{
                    background:
                        "radial-gradient(60% 50% at 50% 10%, rgba(56,189,248,0.25) 0%, rgba(56,189,248,0.10) 40%, rgba(255,255,255,0) 70%)",
                }}
            />

            <div className="mx-auto max-w-[100rem] px-6 sm:px-8 lg:px-10 py-20 lg:py-28">
                <div className="text-center mb-12 sm:mb-14">
          <span className="inline-block rounded-full bg-white/80 px-3 py-1 text-sm font-semibold tracking-wide text-slate-700 ring-1 ring-slate-200">
            Who We Are
          </span>
                    <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                        Mission & Vision
                    </h2>
                </div>

                {/* Compact side-by-side cards */}
                <div className="grid lg:grid-cols-2 gap-6 xl:gap-8">
                    {/* Mission Card */}
                    <article className="relative flex overflow-hidden rounded-2xl border border-slate-200 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md">
                        {/* Text */}
                        <div className="flex-1 p-6 sm:p-8 xl:p-10">
                            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs sm:text-sm font-bold text-sky-900 ring-1 ring-sky-200">
                                <FaBullseye className="h-4 w-4" /> Mission
                            </div>
                            <h3 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                                Be the most reliable and committed partner
                            </h3>
                            <p className="mt-2 text-slate-700 leading-relaxed text-base sm:text-lg max-w-prose">
                                We deliver quality medical equipment and attentive service that clinicians trust, patients feel,
                                and administrators rely on—on time, every time.
                            </p>
                        </div>
                        {/* Image */}
                        <div className="relative hidden sm:block w-1/2 min-h-[260px] xl:min-h-[360px]">
                            <Image
                                src={missionImg}
                                alt="Mission imagery"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-white/70 via-white/40 to-transparent" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/50" />
                        </div>
                    </article>

                    {/* Vision Card */}
                    <article className="relative flex overflow-hidden rounded-2xl border border-slate-200 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md">
                        {/* Image */}
                        <div className="relative hidden sm:block w-1/2 min-h-[260px] xl:min-h-[360px] order-last lg:order-first">
                            <Image
                                src={visionImg}
                                alt="Vision imagery"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/50" />
                        </div>
                        {/* Text */}
                        <div className="flex-1 p-6 sm:p-8 xl:p-10">
                            <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs sm:text-sm font-bold text-rose-900 ring-1 ring-rose-200">
                                <FaEye className="h-4 w-4" /> Vision
                            </div>
                            <h3 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                                Lead biomedical distribution in Bangladesh
                            </h3>
                            <p className="mt-2 text-slate-700 leading-relaxed text-base sm:text-lg max-w-prose">
                                Set the benchmark for availability, support, and education—accelerating access to safe, modern care nationwide.
                            </p>
                        </div>
                    </article>
                </div>

                {/* Subtle divider + supporting copy */}
                <div className="mt-14 flex items-center gap-4 text-slate-500">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                    <span className="text-xs uppercase tracking-wider">Grounded by values</span>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-200 to-transparent" />
                </div>
            </div>

            {/* Bottom soft wave */}
            <svg className="-mb-px block w-full text-white/90" height="56" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden>
                <path fill="currentColor" d="M0,24 C240,56 480,0 720,12 C960,24 1200,66 1440,40 L1440,56 L0,56 Z" opacity="0.8" />
            </svg>
        </section>
    );
}
