import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cstad.edu.kh', // Your external hostname here
        pathname: '/**', // Matches all paths
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Your external hostname here
        pathname: '/**', // Matches all paths
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com', // Your external hostname here
        pathname: '/**', // Matches all paths
      }
    ],
  },
};

export default nextConfig;
