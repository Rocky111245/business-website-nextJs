// app/(site)/about-us/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, Target, Eye, Calendar, Users, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Evolution Medical Technologies",
    description:
        "Leading bio-medical equipment distributor in Bangladesh since 1982. Specializing in ophthalmology, nephrology, ICU, dental, and neonatal equipment.",
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/about-us`,
    },
    openGraph: {
        title: "About Us | Evolution Medical Technologies",
        description:
            "Bangladesh's premier biomedical equipment distributor since 1982. Ophthalmology, nephrology, ICU, dental & neonatal solutions.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/about-us`,
        type: "website",
        siteName: "Evolution Medical Technologies",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Evolution Medical Technologies",
        description:
            "Bangladesh's premier biomedical equipment distributor since 1982.",
    },
    robots: { index: true, follow: true },
};

interface Partner {
    name: string;
    subtitle?: string;
    description: string;
    logo: string;
}

export default function AboutUsPage() {
    const mainPartners: Partner[] = [
        {
            name: "Topcon Corporation",
            subtitle: "Japan - Ophthalmic Division",
            description:
                "Japanese manufacturer of optical equipment for ophthalmology and surveying",
            logo:
                "https://ik.imagekit.io/emtbd/emt_images/images/Topcon-Logo.wine.png",
        },
        {
            name: "Baxter International",
            subtitle: "USA",
            description:
                "Focuses on products to treat hemophilia, kidney disease, immune disorders and chronic medical conditions",
            logo:
                "https://ik.imagekit.io/emtbd/emt_images/images/Baxter_logo_blue.png?updatedAt=1673881487679",
        },
    ];

    const companyStats = [
        { icon: Calendar, value: "1982", label: "Established" },
        { icon: Users, value: "32", label: "Team Members" },
        { icon: Award, value: "40+", label: "Years Experience" },
    ];

    const capabilities = [
        "Ophthalmology",
        "Nephrology",
        "ICU Equipment",
        "Cardiology",
        "Neonatal/Pediatric",
        "Dental Equipment",
    ];

    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
    const ORG_JSONLD = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Evolution Medical Technologies",
        url: SITE_URL || undefined,
        foundingDate: "1982",
        description:
            "Leading bio-medical equipment distributor in Bangladesh since 1982.",
        sameAs: [],
        address: {
            "@type": "PostalAddress",
            addressCountry: "BD",
        },
    };

    const BREADCRUMB_JSONLD = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL || "/" },
            {
                "@type": "ListItem",
                position: 2,
                name: "About Us",
                item: SITE_URL ? `${SITE_URL}/about-us` : "/about-us",
            },
        ],
    };

    return (
        <div className="min-h-screen bg-white">
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }}
            />

            {/* Hero (unchanged font sizes) */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 0)`,
                            backgroundSize: "50px 50px",
                            animation: "float 20s ease-in-out infinite",
                        }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm">
                                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                <span className="text-sm font-medium text-blue-300">
                  Trusted Since 1982
                </span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Advancing Healthcare Through
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                                    Innovative Technology
                </span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-relaxed">
                                Bangladesh's premier biomedical equipment distributor, bringing
                                40+ years of expertise and world-class medical technology to
                                healthcare institutions nationwide.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    Partner With Us
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    href="/products"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 border border-blue-500 hover:scale-105"
                                >
                                    View Products
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {companyStats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                                    >
                                        <Icon className="w-8 h-8 text-blue-400 mb-3" />
                                        <div className="flex items-baseline gap-1">
                                            <div className="text-2xl lg:text-3xl font-bold text-white">
                                                {stat.value}
                                            </div>
                                            {"suffix" in stat && stat.suffix ? (
                                                <div className="text-lg text-blue-300 font-semibold">
                                                    {/* @ts-expect-error optional */}
                                                    {stat.suffix}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="text-sm text-slate-300 mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            className="fill-white"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            className="fill-white"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="fill-white"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* Combined Content (font sizes increased from here) */}
            <section className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Column */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Who We Are */}
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-5">
                                    Who We Are
                                </h2>
                                <div className="space-y-4 text-slate-600">
                                    <p className="text-xl leading-relaxed">
                                        Evolution Medical Technologies Ltd. was established to
                                        participate in the evolution of Bangladesh&apos;s medical
                                        equipment industry, offering the latest medical technologies
                                        to healthcare providers.
                                    </p>
                                    <p className="text-xl leading-relaxed">
                                        Led by{" "}
                                        <strong className="text-slate-900">
                                            Engineer Mohammad Taufique Hasan
                                        </strong>
                                        , Managing Director with experience since the 1990s, we are
                                        the sister concern of National Trading Syndicate Ltd., the
                                        oldest biomedical equipment company in Bangladesh,
                                        established in 1982.
                                    </p>
                                </div>
                            </div>

                            {/* Mission & Vision */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <Target className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            Our Mission
                                        </h3>
                                    </div>
                                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                                        To bring the latest medical technologies to Bangladesh,
                                        providing reliable distribution, exceptional after-sales
                                        service, and building lasting partnerships with healthcare
                                        providers.
                                    </p>
                                </div>

                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                                            <Eye className="w-5 h-5 text-slate-700" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            Our Vision
                                        </h3>
                                    </div>
                                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                                        To be Bangladesh&apos;s most trusted biomedical equipment
                                        distributor, recognized for excellence in medical technology
                                        solutions and customer service.
                                    </p>
                                </div>
                            </div>

                            {/* Medical Specialties */}
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Medical Specialties
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {capabilities.map((capability, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                            <span className="text-base text-slate-700 font-medium">
                        {capability}
                      </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Partners Sidebar */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Our Global Partners
                                </h3>
                                <p className="text-xl text-slate-600 mb-6">
                                    World-leading manufacturers we proudly represent
                                </p>
                            </div>

                            <div className="space-y-4">
                                {mainPartners.map((partner, index) => (
                                    <div
                                        key={index}
                                        className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-blue-300 transition-all"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="relative w-16 h-12 flex-shrink-0">
                                                <Image
                                                    src={partner.logo}
                                                    alt={`${partner.name}${
                                                        partner.subtitle ? ` — ${partner.subtitle}` : ""
                                                    }`}
                                                    fill
                                                    className="object-contain"
                                                    sizes="64px"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-base font-bold text-slate-900">
                                                    {partner.name}
                                                </h4>
                                                {partner.subtitle && (
                                                    <p className="text-sm text-blue-600 font-semibold">
                                                        {partner.subtitle}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {partner.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA (also enlarged) */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Join Us in Shaping the Future of Healthcare
                        </h3>
                        <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
                            Partner with a company that combines four decades of expertise
                            with innovative medical technology solutions to advance healthcare
                            across Bangladesh.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Get In Touch
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                            >
                                Explore Solutions
                            </Link>
                        </div>

                        <div className="mt-8 text-base sm:text-lg text-slate-400">
                            <p>
                                Ready to transform your healthcare facility? Let&apos;s discuss
                                your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
