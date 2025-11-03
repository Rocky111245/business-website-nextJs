// ========================= File: sections/EquipmentAndOffers.tsx =========================
import React from "react";
import { Specialties } from "./Specialties"; // adjust path
import { WhatWeOffer } from "./WhatWeOffer"; // adjust path


/**
 * Parent layout with an ECG-variant background (different from earlier heartbeat)
 * - Uses a smooth diagnostic waveform pattern with subtle gradient wash
 */
export default function EquipmentAndOffers() {
    return (
        <section className="relative w-full overflow-hidden bg-slate-50 py-16 lg:py-20">
            {/* subtle background pattern + gradient (ECG-variant) */}
            <div className="pointer-events-none absolute inset-0 opacity-30">
                <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* smoother bezier waveform vs. the spiky ECG shown earlier */}
                    <pattern id="diagWave" x="0" y="0" width="200" height="90" patternUnits="userSpaceOnUse">
                        <path d="M0 45 C 25 10, 55 10, 80 45 S 135 80, 160 45 S 195 10, 220 45" stroke="#0284c7" strokeWidth="1.1" fill="none" strokeDasharray="3 5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#diagWave)" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-cyan-50/50" />
            </div>


            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
                <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
                    <Specialties />
                    <div className="lg:pt-12">
                        <WhatWeOffer />
                    </div>
                </div>
            </div>
        </section>
    );
}
