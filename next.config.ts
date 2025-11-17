// // next.config.ts
// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//     images: {
//         // Use EITHER remotePatterns OR domains (pick one style). remotePatterns shown here:
//         remotePatterns: [
//             { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
//             { protocol: "https", hostname: "ik.imagekit.io", pathname: "/**" },
//             { protocol: "https", hostname: "i0.wp.com", pathname: "/**" },
//             { protocol: "https", hostname: "i1.wp.com", pathname: "/**" },
//             { protocol: "https", hostname: "i2.wp.com", pathname: "/**" },
//             // Wildcards on hostname aren’t supported—list each subdomain explicitly.
//         ],
//         // Optionally:
//         // formats: ["image/avif", "image/webp"],
//     },
// };
//
// export default nextConfig;
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;