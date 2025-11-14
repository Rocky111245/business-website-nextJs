// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://emtbd.com";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Evolution Medical Technologies - Medical Equipment Supplier Bangladesh",
        template: "%s | Evolution Medical Technologies",
    },
    description:
        "Leading medical equipment supplier in Bangladesh. Authorized distributor of Baxter dialysis products, Topcon ophthalmology equipment, ICU, dental & neonatal supplies. Formerly National Trading Syndicate (NTS Bangladesh).",
    keywords: [
        // Brand Names
        "Baxter Bangladesh",
        "Topcon Bangladesh",
        "Topcon office Bangladesh",

        // Product Categories - Dialysis
        "dialysis fluid Bangladesh",
        "dialysis machine Bangladesh",
        "Baxter dialysis fluid",
        "peritoneal dialysis fluid",

        // Product Categories - Ophthalmology
        "eye equipment Bangladesh",
        "ophthalmic equipment Bangladesh",
        "ophthalmology equipment Dhaka",
        "Topcon auto refractor",
        "fundus camera Bangladesh",

        // Medical Specialties
        "ICU equipment Bangladesh",
        "neonatal equipment Bangladesh",
        "dental equipment Bangladesh",

        // Company Names
        "National Trading Syndicate",
        "NTS Bangladesh",
        "NTSBD",
        "Evolution Medical Technologies",

        // Supplier/Distributor Terms
        "medical equipment supplier Bangladesh",
        "medical equipment distributor Dhaka",
        "authorized Baxter dealer Bangladesh",
        "Topcon authorized distributor",
        "hospital equipment supplier",
    ],
    authors: [{ name: "Evolution Medical Technologies" }],
    creator: "Evolution Medical Technologies",
    publisher: "Evolution Medical Technologies",
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
            "Authorized Baxter & Topcon distributor in Bangladesh. Medical equipment for dialysis, ophthalmology, ICU, dental & more. Formerly NTS Bangladesh.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Evolution Medical Technologies Bangladesh",
        description: "Leading medical equipment supplier - Baxter, Topcon & more",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

function GlobalJsonLd() {
    const organization = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "@id": `${SITE_URL}/#organization`,
        name: "Evolution Medical Technologies",
        alternateName: [
            "National Trading Syndicate",
            "NTS Bangladesh",
            "NTSBD",
            "EMT Bangladesh",
        ],
        url: SITE_URL,
        description:
            "Authorized distributor of Baxter dialysis equipment, Topcon ophthalmology devices, and premium medical equipment in Bangladesh.",
        email: "hasan@emtbd.com",
        telephone: "+8801727072868",
        address: {
            "@type": "PostalAddress",
            streetAddress: "2nd floor, 41/1 Kazi Nazrul Islam Avenue, Zennath Bhaban",
            addressLocality: "Dhaka",
            addressRegion: "Dhaka",
            postalCode: "1215",
            addressCountry: "BD",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 23.752608,
            longitude: 90.391943,
        },
        areaServed: [
            {
                "@type": "Country",
                name: "Bangladesh",
            },
            {
                "@type": "City",
                name: "Dhaka",
            },
        ],
        brand: [
            { "@type": "Brand", name: "Baxter" },
            { "@type": "Brand", name: "Topcon" },
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Medical Equipment Catalog",
            itemListElement: [
                {
                    "@type": "OfferCatalog",
                    name: "Dialysis Equipment",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Product",
                                name: "Baxter Dialysis Machines & Fluids",
                                brand: { "@type": "Brand", name: "Baxter" },
                                description: "Dialysis machines, dialysis fluid, peritoneal dialysis solutions",
                            },
                        },
                    ],
                },
                {
                    "@type": "OfferCatalog",
                    name: "Ophthalmology Equipment",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Product",
                                name: "Topcon Eye Equipment",
                                brand: { "@type": "Brand", name: "Topcon" },
                                description: "Auto refractors, fundus cameras, slit lamps, tonometers",
                            },
                        },
                    ],
                },
            ],
        },
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Evolution Medical Technologies",
        alternateName: "NTS Bangladesh",
        publisher: {
            "@id": `${SITE_URL}/#organization`,
        },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${SITE_URL}/products?search={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <>
            <Script
                id="ld-organization"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
            />
            <Script
                id="ld-website"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
            />
        </>
    );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta name="theme-color" content="#1e3a8a" />
            {/* Geographic targeting */}
            <meta name="geo.region" content="BD-13" />
            <meta name="geo.placename" content="Dhaka" />
            <meta name="geo.position" content="23.752608;90.391943" />
            <meta name="ICBM" content="23.752608, 90.391943" />
        </head>
        <body className={`${inter.className} min-h-screen bg-neutral-50`} suppressHydrationWarning>
        <GlobalJsonLd />
        {children}
        </body>
        </html>
    );
}