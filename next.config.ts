import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Required for GitHub Pages
  images: {
    unoptimized: true,   // Required because GitHub Pages doesn't support the Next.js Image Optimization API
  },
  // Ensure this matches your repository name exactly
  basePath: '/portfolio', 
};

export default nextConfig;