import Image from "next/image";

export default function MissionVisionSection() {
    return (
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
            {/* Split background images */}
            <div className="absolute inset-0 flex">
                <div className="w-1/2 relative">
                    <Image
                        src="https://ik.imagekit.io/emtbd/emt_images/images/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673968937853"
                        alt="Our Values"
                        fill
                        className="object-cover opacity-60"
                    />
                </div>
                <div className="w-1/2 relative">
                    <Image
                        src="https://ik.imagekit.io/emtbd/emt_images/images/analysis-2030265.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673883338760"
                        alt="Mission & Vision"
                        fill
                        className="object-cover opacity-60"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="bg-gradient-to-br from-blue-800/90 to-indigo-800/90 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center min-h-[400px]">
                            <div className="text-white">
                                <h2 className="title-xl mb-6">Our Values</h2>
                                <p className="text-xl leading-relaxed text-blue-100">
                                    Excellence, Integrity, Quality, Affordability, Responsibility, and Reliability are our core values.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-sky-100/95 to-blue-100/95 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center min-h-[400px]">
                            <div>
                                <h2 className="title-xl text-blue-900 mb-6">Mission & Vision</h2>
                                <div className="space-y-4 text-neutral-800">
                                    <p className="text-lg leading-relaxed">
                                        <span className="font-semibold text-blue-800">Our Mission</span> is to be the most reliable and committed business partner in the sale of quality medical equipment…
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        <span className="font-semibold text-blue-800">Our Vision</span> is to be the leading biomedical equipment distributor and seller in Bangladesh.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/30" />
        </section>
    );
}
