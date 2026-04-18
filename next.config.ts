import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Type checking is run separately; skip during next build to avoid timeouts
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
