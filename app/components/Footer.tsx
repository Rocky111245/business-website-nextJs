"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company */}
                    <div>
                        <Image
                            src="https://ik.imagekit.io/emtbd/emt_images/emt_logo/EMT-green.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673822808512"
                            alt="EMT Logo"
                            width={160}
                            height={48}
                            className="h-12 w-auto mb-4 invert"
                        />
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Leading distributor of world-class medical equipment in Bangladesh since our establishment.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                               className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                                <FaFacebook />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                               className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-primary-400">Home</Link></li>
                            <li><Link href="/about-us" className="text-gray-300 hover:text-primary-400">About Us</Link></li>
                            <li><Link href="/products" className="text-gray-300 hover:text-primary-400">Products</Link></li>
                            <li><Link href="/contact-us" className="text-gray-300 hover:text-primary-400">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Product Categories</h3>
                        <ul className="space-y-2">
                            <li><Link href="/products" className="text-gray-300 hover:text-primary-400">Ophthalmology</Link></li>
                            <li><Link href="/products" className="text-gray-300 hover:text-primary-400">Dental Equipment</Link></li>
                            <li><Link href="/products" className="text-gray-300 hover:text-primary-400">ICU Equipment</Link></li>
                            <li><Link href="/products" className="text-gray-300 hover:text-primary-400">Neonatal/Pediatric</Link></li>
                            <li><Link href="/products" className="text-gray-300 hover:text-primary-400">Nephrology</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-primary-400 mt-1" />
                                <span className="text-gray-300 text-sm">
                  House # 12, Road # 17, Sector # 11<br />
                  Uttara, Dhaka-1230, Bangladesh
                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaPhone className="text-primary-400" />
                                <a href="tel:+8801713141783" className="text-gray-300 hover:text-primary-400">
                                    +880 1713-141783
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaEnvelope className="text-primary-400" />
                                <a href="mailto:info@emtbd.com" className="text-gray-300 hover:text-primary-400">
                                    info@emtbd.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Evolution Medical Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
