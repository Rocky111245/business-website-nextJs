// app/medical-blogs/[id]/page.tsx
import type { Metadata } from "next";


import BlogPost from "../_components/BlogPost";

export const metadata: Metadata = {
    title: "Article | Evolution Medical Technologies",
};

// In Next.js 15, params is a Promise. Await it before using.
type Props = { params: Promise<{ id: string }> };

export default async function BlogArticlePage({ params }: Props) {
    const { id } = await params;            // ✅ unwrap the Promise
    return <BlogPost id={id} />;
}