import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.21"],
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
