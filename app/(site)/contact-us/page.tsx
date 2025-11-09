// app/(site)/contact-us/page.tsx
import Link from "next/link";
import Script from "next/script";
import { Mail, Phone, Clock, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

/**
 * ----------
 * Site / Business constants
 * ----------
 */
const SITE_NAME = "Evolution Medical Technologies";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || ""; // e.g., https://emtbd.com (optional)
const CONTACT_PATH = "/contact-us";

const EMAIL = "hasan@emtbd.com" as const;
const PHONE_PRIMARY_DISPLAY = "+880 1727-072868" as const;
const PHONE_PRIMARY_TEL = "+8801727072868" as const;
const PHONE_SECONDARY_DISPLAY = "+880 1713-013770" as const;
const PHONE_SECONDARY_TEL = "+8801713013770" as const;

const WHATSAPP_PHONE = "8801727072868"; // example: if your primary line is on WhatsApp
const WHATSAPP_MESSAGE =
    "Hello Evolution Medical Technologies, I’d like to learn more.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


const ADDRESS_LINES = [
    "House # 12, Road # 17, Sector # 11",
    "Uttara Model Town, Dhaka-1230",
    "Bangladesh",
] as const;

/**
 * ----------
 * Metadata (SEO)
 * ----------
 */
export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://emtbd.com"),
    title: `Contact Us | ${SITE_NAME}`,
    description:
        "Reach Evolution Medical Technologies — address, phone, email, WhatsApp, and business hours.",
    alternates: {
        canonical: SITE_URL ? `${SITE_URL}${CONTACT_PATH}` : CONTACT_PATH,
    },
    openGraph: {
        title: `Contact Us | ${SITE_NAME}`,
        description:
            "Reach Evolution Medical Technologies — address, phone, email, WhatsApp, and business hours.",
        url: SITE_URL ? `${SITE_URL}${CONTACT_PATH}` : CONTACT_PATH,
        siteName: SITE_NAME,
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: `Contact Us | ${SITE_NAME}`,
        description:
            "Reach Evolution Medical Technologies — address, phone, email, WhatsApp, and business hours.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

/**
 * ----------
 * Structured Data (JSON-LD)
 * ----------
 */
function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: SITE_NAME,
        url: SITE_URL || undefined,
        email: EMAIL,
        telephone: PHONE_PRIMARY_TEL,
        address: {
            "@type": "PostalAddress",
            streetAddress: ADDRESS_LINES[0],
            addressLocality: "Dhaka",
            postalCode: "1230",
            addressCountry: "BD",
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Saturday",
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                ],
                opens: "09:00",
                closes: "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Friday"],
                opens: "00:00",
                closes: "00:00",
            },
        ],
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: PHONE_PRIMARY_TEL,
                email: EMAIL,
                contactType: "customer support",
                availableLanguage: ["en", "bn"],
            },
        ],
        sameAs: [
            // Add official profiles if available (Facebook, LinkedIn, etc.)
        ],
    } as const;

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL || "/",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Contact Us",
                item: SITE_URL ? `${SITE_URL}${CONTACT_PATH}` : CONTACT_PATH,
            },
        ],
    } as const;

    return (
        <>
            <Script
                id="ld-localbusiness"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="ld-breadcrumbs"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    );
}

export default function ContactUsPage() {
    return (
        <div className="bg-white">
            {/* JSON-LD for SEO */}
            <JsonLd />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                <div className="absolute inset-0 opacity-5" aria-hidden>
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: "32px 32px",
                        }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                            Get in touch
                        </h1>
                        <p className="mt-3 text-slate-300 text-lg leading-relaxed">
                            The fastest way to reach us is by email or WhatsApp. Message us directly for the fastest response. We typically respond within 24 hours.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href={`mailto:${EMAIL}`}
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2 text-slate-900 text-sm font-semibold shadow-lg hover:bg-slate-100"
                                aria-label="Email us"
                            >
                                <Mail className="w-4 h-4" /> Email us
                            </a>
                            <a
                                href={WHATSAPP_HREF}
                                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2 text-white text-sm font-semibold hover:bg-emerald-600"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Chat with us on WhatsApp"
                            >
                                <MessageSquare className="w-4 h-4" /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Soft divider */}
            <div className="h-3 bg-gradient-to-b from-indigo-900/20 via-blue-200/30 to-slate-50" />

            <div className="bg-slate-50">
                {/* Contact cards + Map */}
                <section className="py-12 lg:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-6">
                        {/* Cards */}
                        <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {/* Address */}
                            <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-slate-900">Address</h2>
                                        <address className="not-italic mt-1 text-base text-slate-700 leading-relaxed">
                                            {ADDRESS_LINES.map((line, i) => (
                                                <span key={line}>
                          {line}
                                                    {i < ADDRESS_LINES.length - 1 && <br />}
                        </span>
                                            ))}
                                        </address>
                                        {/* Internal hash link should use next/link */}
                                        <Link
                                            href="#map"
                                            prefetch={false}
                                            className="mt-3 inline-flex items-center gap-1 text-base font-medium text-blue-700 hover:underline"
                                            aria-label="View address on map"
                                        >
                                            View on map <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>

                            {/* Phone & Email */}
                            <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-slate-900">Phone</h2>
                                        <p className="mt-1 text-sm text-slate-700">
                                            <a href={`tel:${PHONE_PRIMARY_TEL}`} className="hover:underline" aria-label="Call primary number">
                                                {PHONE_PRIMARY_DISPLAY}
                                            </a>
                                        </p>
                                        <p className="mt-1 text-sm text-slate-700">
                                            <a href={`tel:${PHONE_SECONDARY_TEL}`} className="hover:underline" aria-label="Call secondary number">
                                                {PHONE_SECONDARY_DISPLAY}
                                            </a>
                                        </p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <a
                                                href={WHATSAPP_HREF}
                                                className="inline-flex items-center gap-1 rounded-md bg-emerald-500 px-3 py-1.5 text-base font-semibold text-white hover:bg-emerald-600"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="WhatsApp chat"
                                            >
                                                WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 flex items-start gap-3">
                                    <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-slate-900">Email</h2>
                                        <a
                                            href={`mailto:${EMAIL}`}
                                            className="mt-1 inline-block text-base font-medium text-blue-700 hover:underline"
                                            aria-label="Send us an email"
                                        >
                                            {EMAIL}
                                        </a>
                                        <p className="bold mt-1 text-sm text-green-800">We typically reply within one business day.</p>
                                    </div>
                                </div>
                            </article>

                            {/* Hours */}
                            <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-slate-900">Business Hours</h2>
                                        <ul className="mt-1 text-base text-slate-700">
                                            <li>Saturday – Thursday: 9:00 AM – 6:00 PM</li>
                                            <li>Friday: Closed</li>
                                        </ul>
                                        <p className="mt-2 text-sm text-slate-500">Asia/Dhaka (GMT+6)</p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* Map */}
                        <div className="lg:col-span-3">
                            <div
                                id="map"
                                className="rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-200"
                            >
                                {/* Fill the container width; set a responsive fixed height so the iframe fully fills it */}
                                <div className="w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[560px]">
                                    <iframe
                                        title="EMT Location Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.2891234567!2d90.3912345!3d23.8756789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUyJzMyLjQiTiA5MMKwMjMnMjguNCJF!5e0!3m2!1sen!2sbd!4v1234567890"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-full border-0"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                            {/* Keep the helper text below the map with consistent spacing and readable size */}
                            <p className="mt-3 text-xs sm:text-sm text-slate-500">
                                If the map doesn't load on your network, open in{" "}
                                <a
                                    className="font-medium text-blue-700 hover:underline"
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Google Maps
                                </a>{" "}
                                and search for our address.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Guidance CTA */}
                <section className="pb-12">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 p-8 lg:p-12">
                            <div className="absolute inset-0 opacity-5" aria-hidden>
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                        backgroundSize: "32px 32px",
                                    }}
                                />
                            </div>
                            <div className="relative text-center">
                                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                                    Message us directly — it's faster
                                </h2>
                                <p className="text-slate-300 mb-6 leading-relaxed">
                                    Email for proposals and documentation, WhatsApp for quick questions, and phone for urgent matters.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <a
                                        href={`mailto:${EMAIL}`}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-lg transition-colors shadow-lg"
                                        aria-label="Email address"
                                    >
                                        <Mail className="w-5 h-5" /> {EMAIL}
                                    </a>
                                    <a
                                        href={WHATSAPP_HREF}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Open WhatsApp chat"
                                    >
                                        <MessageSquare className="w-5 h-5" /> WhatsApp us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
