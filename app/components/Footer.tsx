import Link from "next/link";
import Image from "next/image";
import {
    FaFacebook,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaHeart,
    FaClock,
} from "react-icons/fa";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Products", href: "/products" },
    { label: "Contact Us", href: "/contact-us" },
] as const;

const productCategories = [
    { label: "Ophthalmology", href: "/products" },
    { label: "Dental Equipment", href: "/products" },
    { label: "ICU Equipment", href: "/products" },
    { label: "Neonatal/Pediatric", href: "/products" },
    { label: "Nephrology", href: "/products" },
] as const;

const contactInfo = [
    {
        icon: FaMapMarkerAlt,
        content: (
            <>
                House # 12, Road # 17, Sector # 11
                <br />
                Uttara, Dhaka-1230, Bangladesh
            </>
        ),
    },
    {
        icon: FaPhone,
        content: "+880 1713-141783 | 880 1727-072868",
        href: "tel:+8801713141783",
    },
    {
        icon: FaEnvelope,
        content: "hasan@emtbd.com",
        href: "mailto:hasan@emtbd.com",
    },
] as const;

const socialLinks = [
    {
        name: "Facebook",
        icon: FaFacebook,
        href: "https://facebook.com",
        color: "hover:bg-blue-600",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        href: "https://linkedin.com",
        color: "hover:bg-blue-700",
    },
] as const;

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Trust Badge */}
            <div className="border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                                <FaHeart className="text-xl" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">Trusted Since 1982</p>
                                <p className="text-sm text-gray-400">
                                    35+ years serving healthcare
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <FaClock className="text-emerald-400" />
                            <div>
                                <p className="font-semibold">Available Mon-Sat</p>
                                <p className="text-gray-400">9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <div className="relative w-16 h-16 mb-4">
                                <Image
                                    src="https://ik.imagekit.io/emtbd/emt_images/emt_logo/EMT-green.png"
                                    alt="EMT Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Evolution Medical Technologies
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Leading distributor of world-class bio-medical equipment in
                                Bangladesh. Committed to excellence in healthcare technology.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map(({ name, icon: Icon, href, color }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-200 ${color} hover:scale-110`}
                                    aria-label={name}
                                >
                                    <Icon className="text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-emerald-400">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-gray-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Categories */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-cyan-400">
                            Product Categories
                        </h3>
                        <ul className="space-y-3">
                            {productCategories.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-gray-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-emerald-400">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            {contactInfo.map(({ icon: Icon, content, href }, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Icon className="text-emerald-400 mt-1 flex-shrink-0" />
                                    {href ? (
                                        <a
                                            href={href}
                                            className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                                        >
                                            {content}
                                        </a>
                                    ) : (
                                        <span className="text-gray-300 text-sm">{content}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                        <p>
                            &copy; {currentYear} Evolution Medical Technologies. All rights
                            reserved.
                        </p>
                        <p className="text-xs">
                            Built with <FaHeart className="inline text-red-500 text-xs" /> for
                            better healthcare
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}