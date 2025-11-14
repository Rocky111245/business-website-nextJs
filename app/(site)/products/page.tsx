// app/(site)/products/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import ProductsClient from "@/app/(site)/products/_components/ProductsClient";

/** ---- Site constants ---- */
const SITE_NAME = "Evolution Medical Technologies";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://emtbd.com";
const PATH = "/products";
const PAGE_URL = `${SITE_URL}${PATH}`;

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        absolute: `Products – Medical Equipment | ${SITE_NAME}`,
    },
    description:
        "Browse our catalog of medical equipment across specialties including ophthalmology, dental, ICU, neonatal/pediatric, nephrology and more.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        type: "website",
        url: PAGE_URL,
        siteName: SITE_NAME,
        title: `Products – Medical Equipment | ${SITE_NAME}`,
        description:
            "Explore our full range of medical equipment categories, specs, and brochures.",
    },
    twitter: {
        card: "summary_large_image",
        title: `Products – Medical Equipment | ${SITE_NAME}`,
        description:
            "Explore our full range of medical equipment categories, specs, and brochures.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

/** ---- JSON-LD (CollectionPage + Breadcrumbs) ---- */
function JsonLd() {
    const collectionPage = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `Products – Medical Equipment | ${SITE_NAME}`,
        url: PAGE_URL,
        description:
            "Browse our catalog of medical equipment across multiple specialties with brochures and specifications.",
        isPartOf: {
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
        },
    } as const;

    const breadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Products", item: PAGE_URL },
        ],
    } as const;

    return (
        <>
            <Script
                id="ld-products-collection"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }}
            />
            <Script
                id="ld-breadcrumbs-products"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
            />
        </>
    );
}

export default function ProductsPage() {
    return (
        <main>
            <JsonLd />
            <ProductsClient />
        </main>
    );
}
