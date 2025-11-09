// app/medical-blogs/[id]/page.tsx
import type { Metadata } from "next";
import BlogPost from "../_components/BlogPost";
import { blogPosts } from "../_components/blogData";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const post = blogPosts.find((p) => String(p.id) === String(id));

    const title = post
        ? `${post.title} | Evolution Medical Technologies`
        : "Article | Evolution Medical Technologies";

    const description =
        post?.description?.slice(0, 160) ||
        "Read medical insights, innovations, and technology updates.";

    const canonicalPath = `/medical-blogs/${id}`;
    const base = process.env.NEXT_PUBLIC_SITE_URL || "";

    return {
        title,
        description,
        alternates: { canonical: base ? `${base}${canonicalPath}` : canonicalPath },
        openGraph: {
            title,
            description,
            url: base ? `${base}${canonicalPath}` : canonicalPath,
            type: "article",
            images: post ? [post.image] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        robots: { index: Boolean(post), follow: Boolean(post) },
    };
}


export default async function BlogArticlePage({ params }: Props) {
    const { id } = await params;
    return <BlogPost id={id} />;
}
