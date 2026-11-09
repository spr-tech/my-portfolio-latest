import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75 is the default for screenshots; 90 keeps the small profile photo crisp.
    qualities: [75, 90],
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
