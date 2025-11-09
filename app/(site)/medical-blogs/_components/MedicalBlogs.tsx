"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Search } from "lucide-react";
import { blogPosts } from "./blogData";

export default function MedicalBlogs() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

    const filteredPosts = blogPosts.filter((post) => {
        const q = searchQuery.toLowerCase();
        const matchesSearch = post.title.toLowerCase().includes(q) || post.description.toLowerCase().includes(q);
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-slate-50">
            <section className="relative isolate text-white">
                <div className="relative bg-gradient-to-br from-[#0b1b3b] via-[#0e2e6e] to-[#0a58ca]">
                    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20" style={{ background: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_20%_-10%,rgba(255,255,255,0.18),transparent),radial-gradient(900px_300px_at_90%_10%,rgba(59,130,246,0.18),transparent)]" />

                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
                        <header className="mx-auto max-w-3xl text-center">
                            <h1 className=" pt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                                Medical Breakthroughs &nbsp;
                                <span className="bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">&amp; Insights</span>
                            </h1>
                            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-white/80 sm:text-lg">
                                Stay informed about the latest verified medical innovations and breakthrough technologies shaping modern healthcare.
                            </p>
                        </header>

                        <div className="mx-auto mt-6 max-w-2xl">
                            <div className="relative">
                                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full rounded-xl border border-white/15 bg-white/10 pl-12 pr-4 py-3 text-white placeholder:text-white/60 shadow-sm outline-none ring-0 transition focus:border-sky-300/60 focus:bg-white/15 focus:ring-2 focus:ring-sky-300/30"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            {categories.map((category) => {
                                const active = selectedCategory === category;
                                return (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={[
                                            "rounded-full px-5 py-2 text-sm font-medium transition-colors shadow-sm",
                                            active ? "bg-sky-400 text-slate-900 hover:bg-sky-300" : "border border-white/15 bg-white/10 text-white/85 hover:bg-white/15",
                                        ].join(" ")}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <svg aria-hidden="true" className="absolute inset-x-0 -bottom-px h-10 w-full text-[#0a58ca]" viewBox="0 0 1440 60" preserveAspectRatio="none">
                    <path fill="currentColor" d="M0,36 C160,54 320,12 480,22 C640,32 800,52 960,36 C1120,20 1280,26 1440,8 L1440,60 L0,60 Z" />
                </svg>
            </section>

            <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredPosts.map((post) => (
                        <Link key={post.id} href={`/medical-blogs/${post.id}`} className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-3 left-3">
                                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">{post.category}</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                                </div>

                                <h2 className="mb-3 line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">{post.title}</h2>

                                <p className="line-clamp-3 leading-relaxed text-slate-600">{post.description}</p>

                                <div className="mt-4 font-semibold text-blue-600">Read More →</div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="py-16 text-center">
                        <p className="text-lg text-slate-600">No articles found. Try a different search or category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
