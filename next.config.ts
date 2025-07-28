import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   env: {
    FROM_EMAIL: process.env.FROM_EMAIL,
    AWS_REGION: process.env.AWS_REGION,
  },
};

export default nextConfig;
