// app/(site)/products/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import ProductsClient from "@/app/(site)/products/_components/ProductsClient";

/** ---- Site constants ---- */
const SITE_NAME = "Evolution Medical Technologies";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://emtbd.com";
const PATH = "/products";
const PAGE_URL = `${SITE_URL}${PATH}`;

// app/(site)/products/page.tsx
export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        absolute: `Medical Equipment Products - Baxter, Topcon & More | ${SITE_NAME}`,
    },
    description:
        "Leading medical equipment supplier in Bangladesh. Authorized distributor of Baxter dialysis machines, Topcon ophthalmology equipment, ICU, neonatal & dental products. Formerly National Trading Syndicate (NTS Bangladesh).",
    keywords: [
        "medical equipment bangladesh",
        "Baxter dialysis fluid bangladesh",
        "Topcon products bangladesh",
        "National Trading Syndicate",
        "NTS Bangladesh",
        "dialysis machine bangladesh",
        "ophthalmology equipment bangladesh",
        "medical supplies dhaka",
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        type: "website",
        url: PAGE_URL,
        siteName: SITE_NAME,
        title: `Medical Equipment - Baxter, Topcon | ${SITE_NAME}`,
        description:
            "Authorized distributor of Baxter dialysis equipment, Topcon ophthalmology devices & premium medical products in Bangladesh. Formerly NTS Bangladesh.",
    },
    twitter: {
        card: "summary_large_image",
        title: `Medical Equipment - Baxter, Topcon | ${SITE_NAME}`,
        description:
            "Premium medical equipment supplier in Bangladesh. Baxter, Topcon & more.",
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
