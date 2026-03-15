import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    appIsrStatus: false, // Disables the "N" / build indicator
  },
};

export default nextConfig;
