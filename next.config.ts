// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            // your existing host(s)
            { protocol: "https", hostname: "ik.imagekit.io" },

            // WordPress CDN variants (covers your URLs like https://i2.wp.com/...)
            { protocol: "https", hostname: "i0.wp.com" },
            { protocol: "https", hostname: "i1.wp.com" },
            { protocol: "https", hostname: "i2.wp.com" },
            // if you prefer a wildcard and your Next version supports it, you can use this instead of the 3 lines above:
            // { protocol: "https", hostname: "*.wp.com" },
        ],
        // formats: ["image/avif", "image/webp"], // optional
    },
};

export default nextConfig;
