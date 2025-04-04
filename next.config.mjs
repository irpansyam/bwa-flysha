/* import { NextConfig } from "next"; */

const nextConfig = {
  /* config options here */
  webpack: (config) => {
    config.externals.push("@node-rs/bcrypt");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'efeydtvyiafcvfxqistu.supabase.co'
      }
    ],
    unoptimized: true
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
