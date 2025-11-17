// app/medical-blogs/[id]/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import BlogPost from "../_components/BlogPost";
import { blogPosts } from "../_components/blogData";

type Props = { params: Promise<{ id: string }> };

// ADD THIS FUNCTION:
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const post = blogPosts.find((p) => String(p.id) === String(id));

    const title = post
        ? `${post.title} | Evolution Medical Technologies`
        : "Article | Evolution Medical Technologies";

    const description =
        post?.description?.slice(0, 160) ||
        "Read medical insights, innovations, and technology updates from Evolution Medical Technologies.";

    const canonicalPath = `/medical-blogs/${id}`;
    const base = process.env.NEXT_PUBLIC_SITE_URL || "https://emtbd.com";

    return {
        title,
        description,
        keywords: post
            ? [
                "medical innovation",
                "healthcare technology",
                post.category,
                "medical equipment",
                "Bangladesh healthcare",
            ]
            : undefined,
        alternates: {
            canonical: base ? `${base}${canonicalPath}` : canonicalPath
        },
        openGraph: {
            title,
            description,
            url: base ? `${base}${canonicalPath}` : canonicalPath,
            type: "article",
            images: post ? [post.image] : undefined,
            siteName: "Evolution Medical Technologies",
            publishedTime: post?.date,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: post ? [post.image] : undefined,
        },
        robots: {
            index: Boolean(post),
            follow: Boolean(post)
        },
    };
}

function JsonLd({ post, id }: { post: any; id: string }) {
    if (!post) return null;

    const base = process.env.NEXT_PUBLIC_SITE_URL || "https://emtbd.com";
    const canonicalPath = `/medical-blogs/${id}`;

    const article = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        image: post.image,
        datePublished: post.date,
        author: {
            "@type": "Organization",
            name: "Evolution Medical Technologies",
        },
        publisher: {
            "@type": "Organization",
            name: "Evolution Medical Technologies",
            logo: {
                "@type": "ImageObject",
                url: `${base}/logo.png`, // Update with your actual logo path
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": base ? `${base}${canonicalPath}` : canonicalPath,
        },
    };

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: base,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Medical Insights",
                item: `${base}/medical-blogs`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: base ? `${base}${canonicalPath}` : canonicalPath,
            },
        ],
    };

    return (
        <>
            <Script
                id="ld-article"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
            />
            <Script
                id="ld-breadcrumb-article"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    );
}

export default async function BlogArticlePage({ params }: Props) {
    const { id } = await params;
    const post = blogPosts.find((p) => String(p.id) === String(id));

    return (
        <>
            <JsonLd post={post} id={id} />
            <BlogPost id={id} />
        </>
    );
}