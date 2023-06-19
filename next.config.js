/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        esmExternals: 'loose'
        
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
