import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Forces Next.js to append a slash to routes, fixing strict static routing lookups
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;