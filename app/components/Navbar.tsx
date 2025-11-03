"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Menu,
    X,
    ChevronDown,
    Phone,
    Mail,
    Eye,
    Stethoscope,
    Activity,
    Baby,
    HeartPulse,
} from "lucide-react";

const productCategories = [
    { icon: Eye, label: "Ophthalmology", href: "/products" },
    { icon: Stethoscope, label: "Dental Equipment", href: "/products" },
    { icon: Activity, label: "ICU Equipment", href: "/products" },
    { icon: Baby, label: "Neonatal/Pediatric", href: "/products" },
    { icon: HeartPulse, label: "Nephrology", href: "/products" },
] as const;

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
            }
        };
    }, []);

    const handleMouseEnterDropdown = () => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setIsProductsDropdownOpen(true);
    };

    const handleMouseLeaveDropdown = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setIsProductsDropdownOpen(false);
        }, 150);
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
            {/* Top Info Bar */}
            <div className="bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-2.5 text-xs">
                        <div className="flex items-center gap-6">
                            <p className="hidden md:flex items-center gap-2 font-medium">
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Trusted Since 1982
                            </p>
                            <span className="hidden lg:block text-slate-400">|</span>
                            <p className="hidden lg:block text-slate-300">
                                Leading Bio-Medical Equipment Distributor
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                href="tel:+8801713141783"
                                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                            >
                                <Phone className="w-3.5 h-3.5" />
                                <span className="font-medium">+880 1713-141783</span>
                            </a>
                            <span className="text-slate-600">|</span>
                            <a
                                href="mailto:info@emtbd.com"
                                className="hidden sm:flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                            >
                                <Mail className="w-3.5 h-3.5" />
                                <span>info@emtbd.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group"
                        aria-label="Evolution Medical Technologies — Home"
                    >
                        <div className="relative w-12 h-12 flex-shrink-0">
                            <Image
                                src="https://ik.imagekit.io/emtbd/emt_images/emt_logo/EMT-green.png"
                                alt="EMT Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-lg font-bold text-slate-900 leading-tight tracking-tight">
                                Evolution Medical Technologies
                            </h1>
                            <p className="text-xs text-blue-600 font-medium tracking-wide">
                                MEDICAL TECHNOLOGY. DELIVERED.
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        <Link
                            href="/"
                            className="px-5 py-2 text-[15px] font-medium text-slate-700 hover:text-slate-900 transition-colors relative group"
                        >
                            Home
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300" />
                        </Link>

                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnterDropdown}
                            onMouseLeave={handleMouseLeaveDropdown}
                        >
                            <button
                                className="flex items-center gap-1 px-5 py-2 text-[15px] font-medium text-slate-700 hover:text-slate-900 transition-colors relative group"
                                aria-haspopup="menu"
                                aria-expanded={isProductsDropdownOpen}
                                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                            >
                                Products
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                        isProductsDropdownOpen ? "rotate-180" : ""
                                    }`}
                                />
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300" />
                            </button>

                            {/* Dropdown Menu */}
                            {isProductsDropdownOpen && (
                                <div
                                    className="absolute left-0 top-full pt-1 w-72"
                                    onMouseEnter={handleMouseEnterDropdown}
                                    onMouseLeave={handleMouseLeaveDropdown}
                                >
                                    <div className="bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden">
                                        <div className="p-2">
                                            {productCategories.map(({ icon: Icon, label, href }) => (
                                                <Link
                                                    key={label}
                                                    href={href}
                                                    className="flex items-center gap-3 px-4 py-3 rounded-md text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                                                >
                                                    <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center text-slate-600 group-hover:text-blue-600 transition-colors">
                                                        <Icon className="w-5 h-5" strokeWidth={2} />
                                                    </div>
                                                    <span className="text-[15px] font-medium">{label}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/about-us"
                            className="px-5 py-2 text-[15px] font-medium text-slate-700 hover:text-slate-900 transition-colors relative group"
                        >
                            About Us
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300" />
                        </Link>

                        <Link
                            href="/contact-us"
                            className="ml-3 px-6 py-2.5 text-[15px] font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm hover:shadow-md"
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen((s) => !s)}
                        className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" strokeWidth={2} />
                        ) : (
                            <Menu className="w-6 h-6" strokeWidth={2} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-slate-200 py-4">
                        <nav className="flex flex-col gap-1">
                            <Link
                                href="/"
                                className="px-4 py-3 text-[15px] font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                            >
                                Home
                            </Link>

                            <div className="px-4 py-2">
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Products
                                </div>
                                <div className="space-y-1">
                                    {productCategories.map(({ icon: Icon, label, href }) => (
                                        <Link
                                            key={label}
                                            href={href}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                        >
                                            <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                                                <Icon className="w-4 h-4" strokeWidth={2} />
                                            </div>
                                            <span className="text-[15px] font-medium">{label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/about-us"
                                className="px-4 py-3 text-[15px] font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                            >
                                About Us
                            </Link>

                            <Link
                                href="/contact-us"
                                className="mx-4 mt-2 px-6 py-3 text-[15px] font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center shadow-sm"
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