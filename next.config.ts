import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Required for GitHub Pages static building
  images: {
    unoptimized: true,   // Required because GitHub Pages doesn't support the dynamic Image Optimization API
  },
  // Bypasses ESLint checks completely during production compilation
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;