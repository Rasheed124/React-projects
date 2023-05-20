/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    images: {
        domains: ["links.duromediacademy.com", "cdn.sanity.io"]
    },
}

module.exports = nextConfig

