import Link from "next/link";
import { GoEye } from "react-icons/go";
import { TbDental } from "react-icons/tb";
import { BsLungs } from "react-icons/bs";
import { FaBaby } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";

export default function CategorySection() {
    const categories = [
        { icon: <GoEye className="text-6xl" />,  title: "Ophthalmology",                         color: "from-sky-600   to-cyan-600",    link: "/products" },
        { icon: <TbDental className="text-6xl" />,title: "Dental Treatment Delivery System",      color: "from-indigo-600 to-blue-700",   link: "/products" },
        { icon: <BsLungs className="text-6xl" />, title: "ICU Equipment",                         color: "from-blue-700  to-slate-800",   link: "/products" },
        { icon: <FaBaby className="text-6xl" />,  title: "Neonatal/Pediatric",                    color: "from-sky-700   to-indigo-700",  link: "/products" },
        { icon: <GiKidneys className="text-6xl"/>,title: "Nephrology",                            color: "from-blue-800  to-indigo-800",  link: "/products" },
    ] as const;

    return (
        <section className="bg-white py-16">
            <div className="section-container">
                <div className="text-center mb-12">
                    <h2 className="title-xl mb-4">We Specialize in 5 Branches</h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Comprehensive medical equipment solutions across multiple specialties
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {categories.map((c, i) => (
                        <Link key={i} href={c.link} className="group block">
                            <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                <div className={`bg-gradient-to-br ${c.color} p-8 text-white`}>
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                            {c.icon}
                                        </div>
                                        <h3 className="font-bold text-lg leading-tight min-h-[60px] flex items-center justify-center">
                                            {c.title}
                                        </h3>
                                    </div>
                                    <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-neutral-600 mb-4">Explore our comprehensive range of medical equipment</p>
                    <Link
                        href="/products"
                        className="inline-block bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
