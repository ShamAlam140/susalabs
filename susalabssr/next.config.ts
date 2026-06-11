import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: path.join(process.cwd()),
  turbopack: {
    root: path.join(process.cwd()),
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'susaweb-418006.el.r.appspot.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion', 'lucide-react', '@mui/icons-material', '@mui/material'],
  },
  // Remove console logs in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
