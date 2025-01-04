/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.licdn.com',     
      'images.inc.com',    
      'example.com',         
      'cdn.example.net',     
      'images.prismic.io',   
      'plus.unsplash.com',   
      'media.istockphoto.com',
    ],
  },
};

module.exports = nextConfig;
