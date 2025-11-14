// app/medical-blogs/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import MedicalBlogs from "./_components/MedicalBlogs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://emtbd.com";
const PATH = "/medical-blogs";

export const metadata: Metadata = {
    title: "Medical Insights & Healthcare Innovation | Evolution Medical Technologies",
    description:
        "Stay informed about the latest verified medical innovations, breakthrough technologies, and healthcare industry insights from Evolution Medical Technologies Bangladesh.",
    keywords: [
        "medical innovations Bangladesh",
        "healthcare technology",
        "medical equipment news",
        "Baxter medical updates",
        "Topcon ophthalmology news",
        "dialysis technology",
        "medical industry insights",
    ],
    alternates: {
        canonical: SITE_URL ? `${SITE_URL}${PATH}` : PATH
    },
    openGraph: {
        title: "Medical Insights & Healthcare Innovation | Evolution Medical Technologies",
        description:
            "Stay informed about the latest verified medical innovations and breakthrough technologies shaping modern healthcare in Bangladesh.",
        url: SITE_URL ? `${SITE_URL}${PATH}` : PATH,
        type: "website",
        siteName: "Evolution Medical Technologies",
    },
    twitter: {
        card: "summary_large_image",
        title: "Medical Insights | Evolution Medical Technologies",
        description: "Latest medical innovations and healthcare technology insights",
    },
    robots: {
        index: true,
        follow: true
    },
};

function JsonLd() {
    const blogList = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Evolution Medical Technologies Blog",
        description: "Medical insights, innovations, and healthcare technology updates",
        url: SITE_URL ? `${SITE_URL}${PATH}` : PATH,
        publisher: {
            "@type": "Organization",
            name: "Evolution Medical Technologies",
        },
    };

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
            {
                "@type": "ListItem",
                position: 2,
                name: "Medical Insights",
                item: SITE_URL ? `${SITE_URL}${PATH}` : PATH,
            },
        ],
    };

    return (
        <>
            <Script
                id="ld-blog-list"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogList) }}
            />
            <Script
                id="ld-breadcrumb-blogs"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    );
}

export default function Page() {
    return (
        <>
            <JsonLd />
            <MedicalBlogs />
        </>
    );
}