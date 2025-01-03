/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.licdn.com',     // Existing domain
      'images.inc.com',      // Existing domain
      'example.com',         // Existing domain
      'cdn.example.net',     // Existing domain
      'images.prismic.io',   // Added earlier
      'plus.unsplash.com',   // New domain for Unsplash
    ],
  },
};

module.exports = nextConfig;
