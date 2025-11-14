/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://emtbd.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    exclude: [
        '/api/*', // Exclude API routes
        '/admin/*', // Exclude admin pages if you have any
    ],
    changefreq: 'weekly',
    priority: 0.7,
    // Generate separate sitemaps for different sections
    additionalPaths: async (config) => [
        await config.transform(config, '/'),
        await config.transform(config, '/products'),
        await config.transform(config, '/contact-us'),
        await config.transform(config, '/about-us'),
        await config.transform(config, '/medical-blogs'),
    ],
}