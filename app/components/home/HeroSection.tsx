import Link from "next/link";
import { FaUsers, FaAward } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-primary-50 to-blue-50 py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, gray 1px, transparent 0)", backgroundSize: "40px 40px" }} />
            </div>

            <div className="section-container relative z-10">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 transform transition-all duration-300 hover:shadow-3xl hover:scale-105">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4">
                                <FaAward className="text-white text-3xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800">Distributor of Top Quality Medical Equipment</h2>
                        </div>

                        <div className="mb-6 pb-6 border-b-2 border-primary-200">
                            <h3 className="text-xl font-semibold text-secondary-600 mb-2">Your Complete Medical Solutions Provider since 1982</h3>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                We at <span className="font-semibold text-primary-600">Evolution Medical Technologies Limited</span> are proud to be a subsidiary of National Trading Syndicate Limited, one of the oldest companies in Bangladesh…
                            </p>
                            <p>We strive to provide hospitals, clinics, and medical professionals with access to top-quality, cost-effective medical equipment…</p>
                            <p>Our product specialists are constantly updating their knowledge to stay on top of the latest research and developments…</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-secondary-50 to-cyan-50 rounded-2xl shadow-2xl p-8 md:p-10 transform transition-all duration-300 hover:shadow-3xl hover:scale-105">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                                <FaUsers className="text-white text-3xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
                        </div>

                        <div className="mb-6 pb-6 border-b-2 border-secondary-200">
                            <h3 className="text-xl font-semibold text-secondary-700 mb-2">One of the Most Experienced Teams in the Country</h3>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Our team is led by our Managing Director, <span className="font-semibold text-secondary-700">Engineer Mohammad Taufique Hasan</span>…</p>
                            <p><span className="font-semibold text-secondary-700">Dr. Nazrul Islam</span> oversees the general operations…</p>
                            <p>Our engineering team… seasoned professionals with 15–20+ years of experience.</p>
                        </div>

                        <div className="mt-8 pt-6 border-t-2 border-secondary-200">
                            <Link
                                href="/about-us"
                                className="inline-block bg-gradient-to-r from-secondary-600 to-cyan-600 hover:from-secondary-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
