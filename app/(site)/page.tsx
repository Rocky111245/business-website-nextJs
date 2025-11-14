// app/(site)/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import HeroSection from "@/app/(site)/home/_components/HeroSection";
import ProductShowcase from "@/app/(site)/home/_components/ProductShowcase";
import MissionVisionSection from "@/app/(site)/home/_components/MissionVisionSection";
import MedicalCarousel from "@/app/(site)/home/_components/MedicalCarousel";
import EquipmentAndOffers from "@/app/(site)/home/_components/EquipmentAndOffers";
import PartnersShowcase from "@/app/(site)/home/_components/PartnersShowcase";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://emtbd.com";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: "Evolution Medical Technologies - Medical Equipment Supplier Bangladesh | Baxter, Topcon",
    description:
        "Leading medical equipment supplier in Bangladesh. Authorized distributor of Baxter dialysis machines, Topcon ophthalmology equipment, ICU, neonatal & dental products. Formerly National Trading Syndicate (NTS Bangladesh).",
    keywords: [
        "medical equipment Bangladesh",
        "Baxter Bangladesh",
        "Topcon Bangladesh",
        "dialysis fluid Bangladesh",
        "dialysis machine Bangladesh",
        "eye equipment Bangladesh",
        "ophthalmology equipment Dhaka",
        "National Trading Syndicate",
        "NTS Bangladesh",
        "NTSBD",
        "medical equipment supplier Dhaka",
        "hospital equipment Bangladesh",
        "ICU equipment Bangladesh",
        "dental equipment Bangladesh",
    ],
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        type: "website",
        locale: "en_BD",
        url: SITE_URL,
        siteName: "Evolution Medical Technologies",
        title: "Evolution Medical Technologies - Medical Equipment Bangladesh",
        description:
            "Authorized Baxter & Topcon distributor in Bangladesh. Premium medical equipment for dialysis, ophthalmology, ICU & more. Formerly NTS Bangladesh.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Evolution Medical Technologies - Medical Equipment Bangladesh",
        description: "Leading medical equipment supplier - Baxter, Topcon & more",
    },
    robots: {
        index: true,
        follow: true,
    },
};

function JsonLd() {
    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
            },
        ],
    };

    return (
        <Script
            id="ld-breadcrumb-home"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
    );
}

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <JsonLd />
            <HeroSection />
            <MedicalCarousel />
            <PartnersShowcase/>
            <EquipmentAndOffers/>
            <ProductShowcase />
            <MissionVisionSection />
        </div>
    );
}