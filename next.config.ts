import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

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
      },
      {
        protocol: 'https',
        hostname: 'pngimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'maps.example.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.electromart.com.gh',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ione.com.kh',
        pathname: '/**',
      }
    ],
  },
};

export default withFlowbiteReact(nextConfig);
