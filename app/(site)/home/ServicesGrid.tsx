import Link from "next/link";
import {
    MdLocalHospital, MdEngineering, MdVerifiedUser, MdBuild,
    MdPublic, MdLocalShipping, MdForum, MdLightbulbOutline
} from "react-icons/md";

export default function ServicesGrid() {
    const services = [
        { icon: <MdLocalHospital className="text-5xl" />, title: "Responsive Support",              description: "Our skilled engineers are ready to provide prompt answers to your queries during business hours.", color: "from-sky-600    to-cyan-600" },
        { icon: <MdEngineering className="text-5xl" />,   title: "Expertise and Experience",        description: "Our team, with over 20 years of medical equipment expertise, swiftly addresses any challenge with precision.", color: "from-blue-700   to-indigo-700" },
        { icon: <MdVerifiedUser className="text-5xl" />,  title: "Extended Warranty",               description: "We offer over 10 years of warranty for many of our products, ensuring long-term reliability.",              color: "from-indigo-600 to-blue-700" },
        { icon: <MdBuild className="text-5xl" />,         title: "Comprehensive After-Sales Service", description: "Receive thorough support and servicing post-purchase to maintain optimal performance.",                  color: "from-slate-700  to-blue-800" },
        { icon: <MdPublic className="text-5xl" />,        title: "Global Quality Standards",        description: "Medical equipment procured only from globally renowned manufacturers.",                                  color: "from-blue-800   to-indigo-800" },
        { icon: <MdLocalShipping className="text-5xl" />, title: "Nationwide Delivery",             description: "Fast and reliable delivery services across the nation.",                                                color: "from-cyan-700   to-sky-700" },
        { icon: <MdForum className="text-5xl" />,         title: "Expert Communication",            description: "Our engineers work closely with healthcare professionals to meet clinical needs.",                        color: "from-sky-700    to-blue-700" },
        { icon: <MdLightbulbOutline className="text-5xl"/>,title: "Innovative Solutions",           description: "Technologies that transform healthcare and enhance patient outcomes.",                                   color: "from-indigo-700 to-slate-800" },
    ] as const;

    return (
        <section className="bg-gradient-to-br from-neutral-50 to-sky-50 py-16">
            <div className="section-container">
                <div className="text-center mb-12">
                    <h2 className="title-xl mb-4">What We Offer</h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Comprehensive medical equipment solutions with unmatched support and service excellence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                {s.icon}
                            </div>
                            <h3 className="text-xl font-bold text-neutral-800 mb-3">{s.title}</h3>
                            <p className="text-neutral-600 leading-relaxed">{s.description}</p>
                            <div className={`mt-4 h-1 w-0 bg-gradient-to-r ${s.color} rounded-full transition-all duration-300 group-hover:w-full`} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4">Ready to Experience Excellence?</h3>
                    <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                        Partner with EMT for world-class medical equipment and unparalleled service support
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact-us"
                            className="inline-block bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            Contact Us Today
                        </Link>
                        <Link
                            href="/products"
                            className="inline-block bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                        >
                            Browse Products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
