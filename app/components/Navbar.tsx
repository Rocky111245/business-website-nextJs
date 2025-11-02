"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { TbDental } from "react-icons/tb";
import { BsLungs } from "react-icons/bs";
import { FaBaby } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-4 group" aria-label="Go to homepage">
                        <Image
                            src="https://ik.imagekit.io/emtbd/emt_images/emt_logo/EMT-green.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673822808512"
                            alt="EMT Logo"
                            width={56}
                            height={56}
                            className="h-14 w-auto transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="hidden lg:block">
                            <h1 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                                Evolution Medical Technologies
                            </h1>
                            <p className="text-sm text-gray-600 font-medium">Medical Technology. Delivered.</p>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center space-x-1" aria-label="Primary">
                        <Link
                            href="/"
                            className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200"
                        >
                            Home
                        </Link>

                        {/* Products dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsProductsDropdownOpen(true)}
                            onMouseLeave={() => setIsProductsDropdownOpen(false)}
                        >
                            <Link
                                href="/products"
                                className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200 flex items-center space-x-1"
                                aria-haspopup="true"
                                aria-expanded={isProductsDropdownOpen}
                            >
                                <span>Products</span>
                                <FaChevronDown className={`text-xs transition-transform duration-200 ${isProductsDropdownOpen ? "rotate-180" : ""}`} />
                            </Link>

                            <div
                                className={`absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                                    isProductsDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                                }`}
                            >
                                <div className="py-2">
                                    <Link href="/products" className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors group">
                                        <GoEye className="text-blue-600 text-xl group-hover:scale-110 transition-transform" />
                                        <span className="text-gray-700 font-medium group-hover:text-primary-600">Ophthalmology</span>
                                    </Link>
                                    <Link href="/products" className="flex items-center space-x-3 px-4 py-3 hover:bg-green-50 transition-colors group">
                                        <TbDental className="text-green-600 text-xl group-hover:scale-110 transition-transform" />
                                        <span className="text-gray-700 font-medium group-hover:text-primary-600">Dental Treatment</span>
                                    </Link>
                                    <Link href="/products" className="flex items-center space-x-3 px-4 py-3 hover:bg-red-50 transition-colors group">
                                        <BsLungs className="text-red-600 text-xl group-hover:scale-110 transition-transform" />
                                        <span className="text-gray-700 font-medium group-hover:text-primary-600">ICU Equipment</span>
                                    </Link>
                                    <Link href="/products" className="flex items-center space-x-3 px-4 py-3 hover:bg-purple-50 transition-colors group">
                                        <FaBaby className="text-purple-600 text-xl group-hover:scale-110 transition-transform" />
                                        <span className="text-gray-700 font-medium group-hover:text-primary-600">Neonatal/Pediatric</span>
                                    </Link>
                                    <Link href="/products" className="flex items-center space-x-3 px-4 py-3 hover:bg-orange-50 transition-colors group">
                                        <GiKidneys className="text-orange-600 text-xl group-hover:scale-110 transition-transform" />
                                        <span className="text-gray-700 font-medium group-hover:text-primary-600">Nephrology</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/about-us"
                            className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact-us"
                            className="ml-2 px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Mobile toggle */}
                    <button onClick={() => setIsMobileMenuOpen(v => !v)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
                        {isMobileMenuOpen ? <FaTimes className="text-2xl text-gray-700" /> : <FaBars className="text-2xl text-gray-700" />}
                    </button>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-top border-gray-200">
                        <nav className="flex flex-col space-y-2" aria-label="Mobile">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium">
                                Home
                            </Link>

                            <div className="px-4 py-3">
                                <div className="font-medium text-gray-800 mb-2">Products</div>
                                <div className="pl-4 space-y-2">
                                    <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 py-2 text-gray-600 hover:text-primary-600">
                                        <GoEye /><span>Ophthalmology</span>
                                    </Link>
                                    <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 py-2 text-gray-600 hover:text-primary-600">
                                        <TbDental /><span>Dental Treatment</span>
                                    </Link>
                                    <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 py-2 text-gray-600 hover:text-primary-600">
                                        <BsLungs /><span>ICU Equipment</span>
                                    </Link>
                                    <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 py-2 text-gray-600 hover:text-primary-600">
                                        <FaBaby /><span>Neonatal/Pediatric</span>
                                    </Link>
                                    <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 py-2 text-gray-600 hover:text-primary-600">
                                        <GiKidneys /><span>Nephrology</span>
                                    </Link>
                                </div>
                            </div>

                            <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium">
                                About Us
                            </Link>
                            <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="mx-4 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold text-center hover:from-primary-700 hover:to-secondary-700">
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
