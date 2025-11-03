"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TrustedBrandsSection() {
    const [v1, setV1] = useState(false);
    const [v2, setV2] = useState(false);
    const r1 = useRef<HTMLDivElement | null>(null);
    const r2 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.target === r1.current && e.isIntersecting) setV1(true);
                if (e.target === r2.current && e.isIntersecting) setTimeout(() => setV2(true), 300);
            });
        }, { threshold: 0.2 });

        if (r1.current) obs.observe(r1.current);
        if (r2.current) obs.observe(r2.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="bg-gradient-to-br from-neutral-50 to-sky-50 py-16">
            <div className="section-container">
                <div className="text-center mb-12">
                    <h2 className="title-xl mb-4">Trusted by Leading Healthcare Institutions</h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Partnering with world-renowned manufacturers to deliver excellence in medical technology
                    </p>
                </div>

                <div className="flex flex-col items-center space-y-12">
                    <div
                        ref={r1}
                        className={`w-full max-w-4xl bg-white rounded-2xl shadow-xl p-12 transition-all duration-1000 ${v1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <Image
                            src="https://ik.imagekit.io/emtbd/emt_images/images/Screenshot_2023-02-07_044037.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675773664532"
                            alt="Trusted Healthcare Partner"
                            width={1200}
                            height={400}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div
                        ref={r2}
                        className={`w-full max-w-4xl bg-white rounded-2xl shadow-xl p-12 transition-all duration-1000 ${v2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <Image
                            src="https://ik.imagekit.io/emtbd/emt_images/images/topcon.png?updatedAt=1678505026033"
                            alt="Topcon Corporation Partner"
                            width={1200}
                            height={400}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/about-us"
                        className="inline-block bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        View All Our Partners
                    </Link>
                </div>
            </div>
        </section>
    );
}
