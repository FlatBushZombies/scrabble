import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Add this if you're using the Pages Router
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  }
};

export default nextConfig;
