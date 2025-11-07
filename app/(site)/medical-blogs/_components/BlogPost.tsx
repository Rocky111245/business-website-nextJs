"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "./blogData";

type BlogPostProps = { id: string };

export default function BlogPost({ id }: BlogPostProps) {
    // tolerate future numeric ids
    const post = blogPosts.find((p) => String(p.id) === String(id));

    if (!post) {
        return (
            <main className="min-h-[60vh] bg-slate-50">
                <div className="container mx-auto px-4 pt-28">
                    <h1 className="text-2xl font-semibold text-slate-900">Article Not Found</h1>
                    <Link
                        href="/medical-blogs"
                        className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Articles
                    </Link>
                </div>
            </main>
        );
    }

    const date = new Date(post.date).toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <main className="bg-slate-50">
            {/* Sticky back link (keeps existing header logic intact) */}
            <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/70 backdrop-blur">
                <div className="container mx-auto px-4 py-3">
                    <Link
                        href="/medical-blogs"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Articles
                    </Link>
                </div>
            </div>

            {/* Hero */}
            <section className="relative">
                <div className="container mx-auto px-4 pt-8 lg:pt-12">
                    <div className="relative overflow-hidden rounded-2xl">
                        <div className="relative aspect-[21/9] w-full max-h-[520px]">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                sizes="100vw"
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        </div>

                        {/* Title / meta */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-8">
                            <div className="pointer-events-auto inline-flex items-center gap-2">
                <span className="rounded-full bg-blue-600/90 px-2.5 py-1 text-xs font-semibold text-white">
                  {post.category}
                </span>
                                <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-700">
                  Article
                </span>
                            </div>
                            <h1 className="pointer-events-auto mt-3 max-w-5xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                                {post.title}
                            </h1>
                            <div className="pointer-events-auto mt-3 flex items-center gap-2 text-sm text-slate-200">
                                <Calendar className="h-4 w-4" />
                                <span>{date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Body */}
            <section className="pb-20 pt-8">
                <div className="container mx-auto max-w-3xl px-4">
                    {post.description ? (
                        <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-slate-800 shadow-sm">
                            <p className="text-[15px] leading-7">{post.description}</p>
                        </div>
                    ) : null}

                    {/* Content card: inject trusted HTML and style child tags with Tailwind arbitrary variants */}
                    <article
                        className={[
                            "rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-100",
                            // paragraphs
                            "[&_p]:mb-4 [&_p]:leading-7 [&_p]:text-slate-700",
                            // h2 / h3
                            "[&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900",
                            "[&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900",
                            // lists
                            "[&_ul]:mb-5 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2",
                            // list markers / items
                            "[&_li]:text-slate-700 [&_li>strong]:text-slate-900 [&_li>strong]:font-semibold",
                            // links if you add any in future
                            "[&_a]:text-blue-600 hover:[&_a]:underline",
                            // blockquote (not used now but harmless)
                            "[&_blockquote]:border-l-4 [&_blockquote]:border-blue-300 [&_blockquote]:pl-3 [&_blockquote]:text-slate-700 [&_blockquote]:my-4",
                        ].join(" ")}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* CTA (optional, unchanged) */}
                    <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white">
                        <h2 className="text-2xl font-bold">Need Medical Equipment?</h2>
                        <p className="mt-2 opacity-90">
                            Contact Evolution Medical Technologies for cutting-edge solutions.
                        </p>
                        <Link
                            href="/contact-us"
                            className="mt-5 inline-block rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-blue-700 shadow hover:bg-blue-50"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
