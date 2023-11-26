/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '/photos/*'
      },
      {
        protocol: 'https',
        hostname: 'steamcdn-a.akamaihd.net',
        pathname: '/steam/apps/*/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.steamstatic.com',
        pathname: '/steamcommunity/public/images/items/*/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.akamai.steamstatic.com',
        pathname: '/steam/apps/*/**'
      },
    ],
  }
}


module.exports = nextConfig
