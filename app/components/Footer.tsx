import Link from "next/link";
import Image from "next/image";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaHeart,
    FaClock,
} from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
            itemScope
            itemType="http://schema.org/Organization"
        >
            {/* Trust Badge */}
            <div className="border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                                <FaHeart className="text-xl" aria-hidden />
                            </div>
                            <div>
                                <p className="font-bold text-lg">Trusted Since 1982</p>
                                <p className="text-sm text-gray-400">40+ years serving healthcare</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <FaClock className="text-emerald-400" aria-hidden />
                            <div>
                                <p className="font-semibold">Available Mon–Sat</p>
                                <p className="text-gray-400">9:00 AM – 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 lg:[grid-template-columns:1fr_1fr_1fr_1.8fr]">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <div className="relative w-16 h-16 mb-4">
                                <Image
                                    src="https://ik.imagekit.io/emtbd/emt_images/emt_logo/EMT-green.png"
                                    alt="EMT Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                    sizes="64px"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2" itemProp="name">
                                Evolution Medical Technologies
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed" itemProp="description">
                                Leading distributor of world-class bio-medical equipment in Bangladesh.
                                Committed to excellence in healthcare technology.
                            </p>
                        </div>

                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Quick links">
                        <h3 className="text-lg font-bold mb-6 text-emerald-400">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about-us"
                                    className="text-gray-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products"
                                    className="text-gray-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                                    Products
                                </Link>
                            </li>
                            <Link
                                href="/medical-blogs"
                                className="text-gray-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                                Medical Blogs
                            </Link>
                            <li>
                                <Link
                                    href="/contact-us"
                                    className="text-gray-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Product Categories (display only, no links) */}
                    <section aria-label="Product categories">
                        <h3 className="text-lg font-bold mb-6 text-cyan-400">Product Categories</h3>
                        <ul className="list-none m-0 p-0 space-y-3">
                            <li className="flex items-center gap-2 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                Ophthalmology
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                Dental Equipment
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                ICU Equipment
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                Nephrology
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                Neonatal/Pediatric
                            </li>
                        </ul>
                    </section>


                    {/* Contact Info (wider + phone on one line) */}
                    <section aria-label="Contact information" className="lg:pl-4 xl:pl-6">
                        <h3 className="text-lg font-bold mb-6 text-emerald-400">Contact Us</h3>
                        <address
                            className="not-italic space-y-4"
                            itemProp="address"
                            itemScope
                            itemType="http://schema.org/PostalAddress"
                        >
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-emerald-400 mt-1 flex-shrink-0" aria-hidden />
                                <span className="text-gray-300 text-sm" itemProp="streetAddress">
                  House # 12, Road # 17, Sector # 11<br />
                  <span itemProp="addressLocality">Uttara</span>,{" "}
                                    <span itemProp="addressRegion">Dhaka</span>-1230,{" "}
                                    <span itemProp="addressCountry">Bangladesh</span>
                </span>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaPhone className="text-emerald-400 mt-1 flex-shrink-0" aria-hidden />
                                <div className="flex items-center gap-3 whitespace-nowrap">
                                    <a
                                        href="tel:+8801713013770"
                                        className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                                        itemProp="telephone"
                                    >
                                        +880 1713-013770
                                    </a>
                                    <span className="text-gray-500">|</span>
                                    <a
                                        href="tel:+8801727072868"
                                        className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                                        itemProp="telephone"
                                    >
                                        +880 1727-072868
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaEnvelope className="text-emerald-400 mt-1 flex-shrink-0" aria-hidden />
                                <a
                                    href="mailto:hasan@emtbd.com"
                                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                                    itemProp="email"
                                >
                                    hasan@emtbd.com
                                </a>
                            </div>
                        </address>
                    </section>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                        <p>
                            &copy; <time dateTime={`${currentYear}`}>{currentYear}</time>{" "}
                            <span itemProp="name">Evolution Medical Technologies</span>. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
