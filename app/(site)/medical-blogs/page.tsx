// app/medical-blogs/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import MedicalBlogs from "./_components/MedicalBlogs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
const PATH = "/medical-blogs";

export const metadata: Metadata = {
    title: "Medical Insights | Evolution Medical Technologies",
    description:
        "Stay informed about the latest verified medical innovations and breakthrough technologies shaping modern healthcare.",
    alternates: { canonical: SITE_URL ? `${SITE_URL}${PATH}` : PATH },
    openGraph: {
        title: "Medical Insights | Evolution Medical Technologies",
        description:
            "Stay informed about the latest verified medical innovations and breakthrough technologies shaping modern healthcare.",
        url: SITE_URL ? `${SITE_URL}${PATH}` : PATH,
        type: "website",
    },
    robots: { index: true, follow: true },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListOrder: "Descending",
    };
    return (
        <>
            <Script id="ld-blog-list" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <MedicalBlogs />
        </>
    );
}
