/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'images.unsplash.com','shuffle.dev','www.thewowstyle.com'],
    },
    experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig
