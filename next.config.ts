import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Required for GitHub Pages static building
  images: {
    unoptimized: true,   // Required because GitHub Pages doesn't support the dynamic Image Optimization API
  },
  // REMOVED basePath: Your site deploys straight to the root of dcrxz.com, not a sub-directory!
};

export default nextConfig;