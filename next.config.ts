import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    authInterrupts: true,
  },
  env: {
    WS_URL: process.env.WS_URL,
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
