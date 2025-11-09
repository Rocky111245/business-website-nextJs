"use client";

import {useEffect, useMemo, useRef, useState, KeyboardEvent, MouseEvent} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {
    Menu, X, ChevronDown, Phone, Mail, Eye, Stethoscope, Activity, Baby, HeartPulse, MapPin
} from "lucide-react";

const PRODUCT_CATEGORIES = [
    { icon: "Eye",          label: "Ophthalmology",      href: "/products?cat=ophthalmology",   color: "text-blue-600" },
    { icon: "Stethoscope",  label: "Dental Equipment",   href: "/products?cat=dental",          color: "text-emerald-600" },
    { icon: "Activity",     label: "ICU Equipment",      href: "/products?cat=icu",             color: "text-purple-600" },
    { icon: "Baby",         label: "Neonatal/Pediatric", href: "/products?cat=neonatal",        color: "text-pink-600" },
    { icon: "HeartPulse",   label: "Nephrology",         href: "/products?cat=nephrology",      color: "text-red-600" },
] as const;

const ICONS = { Eye, Stethoscope, Activity, Baby, HeartPulse } as const;

export default function Navbar() {
    const pathname = usePathname();

    // UI state
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    // Refs for click-outside/focus mgmt
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const productsBtnRef = useRef<HTMLButtonElement | null>(null);
    const mobileRef = useRef<HTMLDivElement | null>(null);
    const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Derived: list of menu links (single source-of-truth)
    const mainLinks = useMemo(
        () => [
            { href: "/",           label: "Home" },
            { href: "/about-us",   label: "About Us" },
            { href: "/medical-blogs", label: "Medical Blogs" },
            { href: "/contact-us", label: "Contact Us", cta: true },
        ],
        []
    );

    // Close popovers/menus on route change
    useEffect(() => {
        setMobileOpen(false);
        setProductsOpen(false);
    }, [pathname]);

    // Cleanup timers
    useEffect(() => {
        return () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); };
    }, []);

    // Click outside handlers
    useEffect(() => {
        function onDocClick(e: MouseEvent | globalThis.MouseEvent) {
            const t = e.target as Node;
            if (productsOpen &&
                dropdownRef.current &&
                productsBtnRef.current &&
                !dropdownRef.current.contains(t) &&
                !productsBtnRef.current.contains(t)) {
                setProductsOpen(false);
            }
            if (mobileOpen && mobileRef.current && !mobileRef.current.contains(t)) {
                setMobileOpen(false);
            }
        }
        function onEsc(e: KeyboardEvent | globalThis.KeyboardEvent) {
            if (e.key === "Escape") {
                setProductsOpen(false);
                setMobileOpen(false);
                productsBtnRef.current?.focus();
            }
        }
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("keyup", onEsc);
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("keyup", onEsc);
        };
    }, [productsOpen, mobileOpen]);

    // Hover open/close with small delay (prevents flicker)
    const openProductsHover = () => {
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
        setProductsOpen(true);
    };
    const closeProductsHover = () => {
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
        hoverTimer.current = setTimeout(() => setProductsOpen(false), 120);
    };

    // Keyboard nav inside products menu
    const onProductsKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setProductsOpen(true);
            // focus first item after opening
            queueMicrotask(() => {
                dropdownRef.current?.querySelector<HTMLElement>('[role="menuitem"]')?.focus();
            });
        }
        if (e.key === "Escape") {
            setProductsOpen(false);
            productsBtnRef.current?.focus();
        }
    };

    const onMenuListKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        const items = Array.from(
            dropdownRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []
        );
        if (!items.length) return;

        const idx = items.indexOf(document.activeElement as HTMLElement);
        if (e.key === "ArrowDown") {
            e.preventDefault();
            items[(idx + 1) % items.length].focus();
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            items[(idx - 1 + items.length) % items.length].focus();
        } else if (e.key === "Home") {
            e.preventDefault(); items[0].focus();
        } else if (e.key === "End") {
            e.preventDefault(); items[items.length - 1].focus();
        } else if (e.key === "Escape") {
            setProductsOpen(false);
            productsBtnRef.current?.focus();
        }
    };

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-lg">
            {/* Top Info Bar (static content) */}
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
                                href="tel:+8801713141783"
                                className="flex items-center gap-2 hover:text-emerald-300 transition-colors group"
                            >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                                <span className="font-semibold">+880 1713-141783</span>
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
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4 group" aria-label="EMT — Home">
                        <div className="relative w-14 h-14 flex-shrink-0">
                            <Image
                                src="https://ik.imagekit.io/emtbd/emt_images/emt_logo/EMT-green.png"
                                alt="EMT Logo"
                                fill
                                sizes="(max-width: 640px) 56px, 56px"
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block">
              <span className="text-xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Evolution Medical Technologies
              </span>
                            <p className="text-sm text-slate-600 font-medium tracking-wide mt-1">
                                ADVANCING HEALTHCARE EXCELLENCE
                            </p>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
                        {/* Home */}
                        <NavItem href="/" label="Home" active={isActive("/")} />

                        {/* Products (dropdown) */}
                        <div
                            className="relative"
                            onMouseEnter={openProductsHover}
                            onMouseLeave={closeProductsHover}
                        >
                            <button
                                ref={productsBtnRef}
                                type="button"
                                className="flex items-center gap-1 px-6 py-3 text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300 relative group"
                                aria-haspopup="menu"
                                aria-expanded={productsOpen}
                                aria-controls="products-menu"
                                onClick={() => setProductsOpen((v) => !v)}
                                onKeyDown={onProductsKeyDown}
                            >
                                Products
                                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-4/5 transition-all duration-300" />
                            </button>

                            {productsOpen && (
                                <div
                                    id="products-menu"
                                    ref={dropdownRef}
                                    role="menu"
                                    aria-label="Medical Specialties"
                                    tabIndex={-1}
                                    className="absolute left-0 top-full pt-2 w-80"
                                    onKeyDown={onMenuListKeyDown}
                                >
                                    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
                                        <div className="p-3 bg-gradient-to-r from-blue-50 to-teal-50">
                                            <h3 className="text-lg font-bold text-slate-800 text-center">Medical Specialties</h3>
                                        </div>
                                        <div className="p-3">
                                            {PRODUCT_CATEGORIES.map(({icon, label, href, color}) => {
                                                const Icon = ICONS[icon as keyof typeof ICONS];
                                                return (
                                                    <Link
                                                        key={label}
                                                        href={href}
                                                        role="menuitem"
                                                        className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-700 hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-200 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    >
                            <span className={`w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-white flex items-center justify-center ${color} group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="w-6 h-6" aria-hidden />
                            </span>
                                                        <span className="flex flex-col">
                              <span className="text-[15px] font-semibold">{label}</span>
                              <span className="text-xs text-slate-500">Explore Equipment</span>
                            </span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Other links */}
                        {mainLinks.slice(1).map((l) =>
                            l.cta ? (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="ml-4 px-8 py-3 text-[15px] font-bold text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    {l.label}
                                </Link>
                            ) : (
                                <NavItem key={l.href} href={l.href} label={l.label} active={isActive(l.href)} />
                            )
                        )}
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
                        ref={mobileRef}
                        className="lg:hidden border-t border-slate-200 py-6 bg-white/95 backdrop-blur-md"
                    >
                        <nav className="flex flex-col gap-2" aria-label="Mobile Primary">
                            <MobileLink href="/" label="Home" onNavigate={() => setMobileOpen(false)} active={isActive("/")} />

                            <div className="px-6 py-3">
                                <div className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                    Medical Products
                                </div>
                                <div className="space-y-3">
                                    {PRODUCT_CATEGORIES.map(({icon, label, href, color}) => {
                                        const Icon = ICONS[icon as keyof typeof ICONS];
                                        return (
                                            <Link
                                                key={label}
                                                href={href}
                                                onClick={() => setMobileOpen(false)}
                                                className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-700 hover:bg-white hover:shadow-lg border border-slate-100 transition-all duration-300"
                                            >
                        <span className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center ${color}`}>
                          <Icon className="w-5 h-5" aria-hidden />
                        </span>
                                                <span className="text-[15px] font-semibold">{label}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {mainLinks.slice(1).map((l) =>
                                l.cta ? (
                                    <Link
                                        key={l.href}
                                        href={l.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="mx-6 mt-2 px-8 py-4 text-[16px] font-bold text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-xl transition-all duration-300 shadow-lg text-center"
                                    >
                                        {l.label}
                                    </Link>
                                ) : (
                                    <MobileLink
                                        key={l.href}
                                        href={l.href}
                                        label={l.label}
                                        onNavigate={() => setMobileOpen(false)}
                                        active={isActive(l.href)}
                                    />
                                )
                            )}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

/** Small helpers **/
function NavItem({ href, label, active }: { href: string; label: string; active?: boolean }) {
    return (
        <Link
            href={href}
            aria-current={active ? "page" : undefined}
            className={`px-6 py-3 text-[15px] font-semibold transition-all duration-300 relative group ${
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
                        href, label, onNavigate, active,
                    }: { href: string; label: string; onNavigate: () => void; active?: boolean }) {
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
