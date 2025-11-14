"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-lg">
            {/* Top Info Bar */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-emerald-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-3 text-sm">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="font-semibold">Since 1982</span>
                            </div>
                            <div className="hidden lg:flex items-center gap-2 text-blue-200">
                                <MapPin className="w-4 h-4" />
                                <span>Leading Medical Equipment Distributor in Bangladesh</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <a
                                href="tel:+8801727072868"
                                className="flex items-center gap-2 hover:text-emerald-300 transition-colors group"
                            >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                                <span className="font-semibold">+880 1727-072868</span>
                            </a>
                            <a
                                href="mailto:hasan@emtbd.com"
                                className="hidden sm:flex items-center gap-2 hover:text-emerald-300 transition-colors group"
                            >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                                <span>hasan@emtbd.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <Link href="/" className="flex items-center gap-4 group" aria-label="EMT — Home">
                        <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                                src="https://ik.imagekit.io/emtbd/emt_images/emt_logo/EMT-green.png"
                                alt="EMT Logo"
                                fill
                                sizes="(max-width: 640px) 64px, 64px"
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block">
              <span className="text-2xl font-bold leading-tight">
  <span className="text-slate-900">Evolution</span>{" "}
                  <span className="text-[#782B90]">Medical Technologies</span>
</span>

                            <p className="text-base text-slate-600 font-medium tracking-wide mt-1">
                                Advancing Healthcare Excellence
                            </p>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
                        <NavItem href="/" label="Home" active={isActive("/")} />
                        <NavItem href="/products" label="Products" active={isActive("/products")} />
                        <NavItem href="/about-us" label="About Us" active={isActive("/about-us")} />
                        <NavItem href="/medical-blogs" label="Medical Blogs" active={isActive("/medical-blogs")} />
                        {/* CTA */}
                        <Link
                            href="/contact-us"
                            aria-current={isActive("/contact-us") ? "page" : undefined}
                            className="ml-4 px-9 py-4 text-[16px] font-bold text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileOpen((s) => !s)}
                        className="lg:hidden p-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
                        aria-label="Toggle menu"
                        aria-controls="mobile-menu"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div
                        id="mobile-menu"
                        className="lg:hidden border-t border-slate-200 py-6 bg-white/95 backdrop-blur-md"
                    >
                        <nav className="flex flex-col gap-2" aria-label="Mobile Primary">
                            <MobileLink
                                href="/"
                                label="Home"
                                onNavigate={() => setMobileOpen(false)}
                                active={isActive("/")}
                            />
                            <MobileLink
                                href="/products"
                                label="Products"
                                onNavigate={() => setMobileOpen(false)}
                                active={isActive("/products")}
                            />
                            <MobileLink
                                href="/about-us"
                                label="About Us"
                                onNavigate={() => setMobileOpen(false)}
                                active={isActive("/about-us")}
                            />
                            <MobileLink
                                href="/medical-blogs"
                                label="Medical Blogs"
                                onNavigate={() => setMobileOpen(false)}
                                active={isActive("/medical-blogs")}
                            />

                            {/* CTA */}
                            <Link
                                href="/contact-us"
                                onClick={() => setMobileOpen(false)}
                                aria-current={isActive("/contact-us") ? "page" : undefined}
                                className="mx-6 mt-2 px-8 py-4 text-[16px] font-bold text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-xl transition-all duration-300 shadow-lg text-center"
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

/** Small helpers **/
function NavItem({
                     href,
                     label,
                     active,
                 }: {
    href: string;
    label: string;
    active?: boolean;
}) {
    return (
        <Link
            href={href}
            aria-current={active ? "page" : undefined}
            className={`px-7 py-4 text-[16px] font-semibold transition-all duration-300 relative group ${
                active ? "text-blue-700" : "text-slate-700 hover:text-blue-600"
            }`}
        >
            {label}
            <span
                className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-300 ${
                    active ? "w-4/5" : "w-0 group-hover:w-4/5"
                }`}
            />
        </Link>
    );
}

function MobileLink({
                        href,
                        label,
                        onNavigate,
                        active,
                    }: {
    href: string;
    label: string;
    onNavigate: () => void;
    active?: boolean;
}) {
    return (
        <Link
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`px-6 py-4 text-[16px] font-semibold rounded-xl transition-all duration-300 border ${
                active
                    ? "text-blue-700 bg-blue-50 border-blue-100"
                    : "text-slate-700 hover:text-blue-600 hover:bg-blue-50 border-transparent hover:border-blue-100"
            }`}
        >
            {label}
        </Link>
    );
}
