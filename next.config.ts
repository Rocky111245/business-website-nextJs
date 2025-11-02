import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            // ImageKit (already needed)
            { protocol: "https", hostname: "ik.imagekit.io" },

            // WordPress CDN variants that WP uses
            { protocol: "https", hostname: "i0.wp.com" },
            { protocol: "https", hostname: "i1.wp.com" },
            { protocol: "https", hostname: "i2.wp.com" },

            // (Optional) if you load directly from your WP site too:
            { protocol: "https", hostname: "nts-bd.net" },
            { protocol: "https", hostname: "www.nts-bd.net" },
        ],
    },
};

export default nextConfig;
